import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  debug: true,
  css: ['~/assets/css/index.sass'],
  components: {
    dirs: ['~/components/global', '~/components/pages']
  },
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    viewTransition: true
  },
  modules: ['@pinia/nuxt', '@nuxt/image'],
  vite: {
    build: {
      // @edusites/icons usa top-level await no resolvedor de icones.
      // O alvo padrao do Vite (es2020) nao suporta TLA e quebra o build.
      target: 'es2022'
    }
  },
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg'],
    densities: [1, 2]
  },
  nitro: {
    compressPublicAssets: true,
    minify: true,
    storage: {
      memory: {
        driver: 'memory'
      }
    }
  },
  build: {
    optimization: {
      splitChunks: {
        layouts: true,
        pages: true,
        commons: true
      }
    }
  },
  compatibilityDate: '2025-04-03'
})
