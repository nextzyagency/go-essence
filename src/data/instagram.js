// Reels descargados por scripts/fetch-instagram.mjs (se ejecuta antes de dev/build).
import fs from 'node:fs';
import path from 'node:path';

// Embeds de respaldo si no hay reels descargados (Apify falló o sin token)
const FALLBACK = ['DW1mhcOERJQ', 'DWzEnbUkXzu', 'DWJ6s07AO7T'];

/** Últimos reels con video local; vacío si no hay descarga disponible. */
export function getLatestReels(limit = 3) {
  try {
    const { reels } = JSON.parse(fs.readFileSync(path.resolve('src/data/instagram-reels.json'), 'utf8'));
    return reels.slice(0, limit);
  } catch {
    return [];
  }
}

export function getFallbackEmbeds(theme = 'light') {
  return FALLBACK.map((c) => `https://www.instagram.com/p/${c}/embed/${theme === 'dark' ? '?theme=dark' : ''}`);
}
