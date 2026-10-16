// Últimos reels de @go.essence_ vía Apify (apify/instagram-scraper).
// Se ejecuta en build: el token nunca llega al navegador.
import fs from 'node:fs';
import path from 'node:path';

const PROFILE_URL = 'https://www.instagram.com/go.essence_/';
const ACTOR = 'apify~instagram-scraper';
const CACHE_FILE = path.resolve('.astro/instagram-reels.json');
const CACHE_TTL = 6 * 60 * 60 * 1000; // en local, evita llamar a Apify en cada recarga

// Se usan si Apify falla o no hay token
const FALLBACK = ['DW1mhcOERJQ', 'DWzEnbUkXzu', 'DWJ6s07AO7T'];

function readCache() {
  try {
    const { at, codes } = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    if (Date.now() - at < CACHE_TTL && codes?.length) return codes;
  } catch {}
  return null;
}

function writeCache(codes) {
  try {
    fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
    fs.writeFileSync(CACHE_FILE, JSON.stringify({ at: Date.now(), codes }));
  } catch {}
}

async function fetchReelCodes(limit) {
  const token = process.env.APIFY_TOKEN ?? import.meta.env.APIFY_TOKEN;
  if (!token) throw new Error('APIFY_TOKEN no definido');

  const res = await fetch(
    `https://api.apify.com/v2/acts/${ACTOR}/run-sync-get-dataset-items?token=${token}&timeout=240`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // se piden algunos extra por si hay reels fijados (no son los más recientes)
      body: JSON.stringify({ directUrls: [PROFILE_URL], resultsType: 'reels', resultsLimit: limit + 3 }),
    },
  );
  if (!res.ok) throw new Error(`Apify respondió ${res.status}`);

  const items = await res.json();
  return items
    .filter((p) => p.type === 'Video' && p.shortCode && !p.isPinned)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, limit)
    .map((p) => p.shortCode);
}

let pending;

/** URLs de embed de los últimos `limit` videos del perfil. */
export function getLatestReelEmbeds(limit = 3) {
  pending ??= (async () => {
    const isCI = !!process.env.CI;
    let codes = isCI ? null : readCache();
    if (!codes) {
      try {
        codes = await fetchReelCodes(limit);
        if (codes.length < limit) throw new Error(`solo ${codes.length} reels`);
        writeCache(codes);
      } catch (err) {
        console.warn(`[instagram] usando reels de respaldo: ${err.message}`);
        codes = FALLBACK;
      }
    }
    return codes.slice(0, limit).map((c) => `https://www.instagram.com/p/${c}/embed/?theme=dark`);
  })();
  return pending;
}
