import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import image from '@astrojs/image'

// https://astro.build/config
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.stardash.nl',
  integrations: [mdx(), sitemap(), tailwind(), image(), svelte()],
})
