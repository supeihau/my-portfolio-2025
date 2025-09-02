// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css', // MDI 圖示
    '@/assets/scss/app.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: { noExternal: ['vuetify'] },
    plugins: [
      vuetify({
        autoImport: true, // 自動匯入 Vuetify 元件/指令
      }),
    ],
  },
})