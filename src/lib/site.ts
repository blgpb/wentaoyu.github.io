import { getEntry } from 'astro:content';

export async function getSiteSettings() {
  const entry = await getEntry('settings', 'site');
  return entry.data;
}
