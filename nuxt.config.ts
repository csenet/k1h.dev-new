// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  },
  devtools: { enabled: true },

  components: [
    {
      prefix: 'Top',
      path: resolve('./components/top'),
      global: true,
    },
  ],

  css: [
    "bootstrap/dist/css/bootstrap.css",
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/morokai.scss" as morokai;',
        },
      },
    },
  },

  compatibilityDate: '2025-04-19',
})
