// Descarga los últimos reels de @go.essence_ vía Apify (apify/instagram-scraper)
// antes del build: video + portada se sirven desde el propio sitio porque las
// URLs del CDN de Instagram caducan. Si algo falla, el sitio usa embeds de respaldo.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PROFILE_URL = 'https://www.instagram.com/go.essence_/';
const ACTOR = 'apify~instagram-scraper';
const LIMIT = 3;
const MEDIA_DIR = path.resolve('public/instagram');
const DATA_FILE = path.resolve('src/data/instagram-reels.json');
const CACHE_TTL = 6 * 60 * 60 * 1000; // en local, evita llamar a Apify en cada arranque
const MAX_VIDEO_BYTES = 24 * 1024 * 1024; // Cloudflare Pages rechaza archivos de más de 25 MiB

function readToken() {
  if (process.env.APIFY_TOKEN) return process.env.APIFY_TOKEN;
  try {
    const env = fs.readFileSync('.env', 'utf8');
    return env.match(/^APIFY_TOKEN=(.+)$/m)?.[1].trim();
  } catch {}
}

function cacheIsFresh() {
  try {
    const { fetchedAt, reels } = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    return (
      Date.now() - fetchedAt < CACHE_TTL &&
      reels.length &&
      reels.every((r) => fs.existsSync(path.join('public', r.video)))
    );
  } catch {
    return false;
  }
}

async function download(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`descarga ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function fetchReels(token) {
  const res = await fetch(
    `https://api.apify.com/v2/acts/${ACTOR}/run-sync-get-dataset-items?token=${token}&timeout=240`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // se piden extra por si hay reels fijados o demasiado pesados
      body: JSON.stringify({ directUrls: [PROFILE_URL], resultsType: 'reels', resultsLimit: LIMIT + 4 }),
    },
  );
  if (!res.ok) throw new Error(`Apify respondió ${res.status}`);

  const candidates = (await res.json())
    .filter((p) => p.type === 'Video' && p.shortCode && p.videoUrl && !p.isPinned)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  // Se descarga todo antes de tocar public/instagram, para no dejarlo a medias si algo falla
  const picked = [];
  for (const p of candidates) {
    if (picked.length === LIMIT) break;
    const video = await download(p.videoUrl);
    if (video.length > MAX_VIDEO_BYTES) {
      console.warn(`[instagram] ${p.shortCode} pesa ${(video.length / 1e6).toFixed(1)} MB, se omite`);
      continue;
    }
    picked.push({ p, video, poster: await download(p.displayUrl) });
  }
  if (picked.length < LIMIT) throw new Error(`solo ${picked.length} reels válidos`);

  fs.rmSync(MEDIA_DIR, { recursive: true, force: true });
  fs.mkdirSync(MEDIA_DIR, { recursive: true });

  return Promise.all(
    picked.map(async ({ p, video, poster }) => {
      fs.writeFileSync(path.join(MEDIA_DIR, `${p.shortCode}.mp4`), video);
      await sharp(poster).resize({ width: 720, withoutEnlargement: true }).webp({ quality: 72 })
        .toFile(path.join(MEDIA_DIR, `${p.shortCode}.webp`));
      return {
        code: p.shortCode,
        url: p.url,
        caption: (p.caption ?? '').split('\n')[0].trim(),
        likes: p.likesCount ?? 0,
        comments: p.commentsCount ?? 0,
        timestamp: p.timestamp,
        video: `/instagram/${p.shortCode}.mp4`,
        poster: `/instagram/${p.shortCode}.webp`,
      };
    }),
  );
}

if (!process.env.CI && cacheIsFresh()) {
  console.log('[instagram] reels en caché, sin llamar a Apify');
} else {
  try {
    const token = readToken();
    if (!token) throw new Error('APIFY_TOKEN no definido');
    const reels = await fetchReels(token);
    fs.writeFileSync(DATA_FILE, JSON.stringify({ fetchedAt: Date.now(), reels }, null, 2));
    console.log(`[instagram] ${reels.length} reels descargados: ${reels.map((r) => r.code).join(', ')}`);
  } catch (err) {
    // No se rompe el build: se conserva lo último descargado o se usan embeds de respaldo
    console.warn(`[instagram] no se pudieron obtener reels: ${err.message}`);
  }
}
