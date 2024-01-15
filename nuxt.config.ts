// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
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
    "bootstrap-vue-3/dist/bootstrap-vue-3.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/morokai.scss";',
        },
      },
    },
  },
})