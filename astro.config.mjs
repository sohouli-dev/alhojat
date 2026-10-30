import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sohouli-dev.github.io',
  base: '/alhojat',
  integrations: [tailwind()],
});

