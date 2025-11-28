// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 当前仓库是 project pages：blgpb/wentaoyu.github.io
  // 站点域名为 https://blgpb.github.io/wentaoyu.github.io/
  site: 'https://blgpb.github.io',
  base: '/wentaoyu.github.io',
  output: 'static',
  prefetch: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});