// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Tidtee345.github.io',
  base: '/panchalee-connect/',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
