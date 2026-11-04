// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://sohouli-dev.github.io',
  base: '/alhojat',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'وبگاه الحجة(عج) پژوهشگاه تخصصی مهدویت ',
      defaultLocale: 'fa',
      locales: {
        fa: {
          label: 'فارسی',
          lang: 'fa',
          dir: 'rtl',
        },
      },
      sidebar: [
        {
          label: 'کتابخانه پژوهشی معارف مهدوی',
          items: [
            { label: 'معرفی پروژه', link: '/fa/intro/' },
          ],
        },
      ],
    }),
  ],
});
/* 'پژوهشگاه تخصصی الحجة(عج) ' */
