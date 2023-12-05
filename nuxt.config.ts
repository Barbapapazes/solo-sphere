import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/ui',
  ],

  css: [join(currentDir, './assets/css/app.css')],

  devtools: { enabled: true },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  content: {
    documentDriven: false,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },

  ui: {
    icons: ['heroicons', 'simple-icons'],
  },

  colorMode: {
    classSuffix: '',
  },
})
