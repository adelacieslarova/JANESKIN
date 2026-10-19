import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://janeskin.cz',
  output: 'static',
  integrations: [
    sitemap({
      // interní přehled stylů do vyhledávání nepatří
      filter: (page) => !page.includes('/styleguide'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
