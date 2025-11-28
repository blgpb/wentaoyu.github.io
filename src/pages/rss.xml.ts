import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { getSiteSettings } from '../lib/site';

export async function GET(context: APIContext) {
  const [updates, site] = await Promise.all([getCollection('updates'), getSiteSettings()]);
  const items = updates
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.summary,
      link: `/updates#${item.slug}`
    }));

  return rss({
    title: `${site.hero.name} · Updates`,
    description: site.hero.mission,
    site: context.site ?? 'https://example.com',
    items
  });
}
