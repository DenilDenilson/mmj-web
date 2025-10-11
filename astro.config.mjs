// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [tailwind(), mdx()],
  server: {
    port: 8090,
    host: true
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});