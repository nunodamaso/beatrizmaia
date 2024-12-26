// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://nunodamaso.github.io',
	base: '/beatrizmaia',
	integrations: [mdx(), sitemap()],
});
