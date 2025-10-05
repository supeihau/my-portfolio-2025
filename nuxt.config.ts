// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      title: '線上作品集 | 蘇姵華',
      meta: [
        // 基本 SEO
        { name: 'description', content: '蘇姵華的個人作品集，結合 UI/UX 設計與前端開發，熟悉 Nuxt 3、Vue、React 與 Figma。展示從設計到程式實作的專案成果，專注於美感、使用體驗與程式碼可維護性，致力於打造兼具創意與效能的數位產品。' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },

        // Open Graph (Facebook / LINE)
        { property: 'og:title', content: '線上作品集 | 蘇姵華' },
        { property: 'og:description', content: '蘇姵華的個人作品集，結合 UI/UX 設計與前端開發，熟悉 Nuxt 3、Vue、React 與 Figma。展示從設計到程式實作的專案成果，專注於美感、使用體驗與程式碼可維護性，致力於打造兼具創意與效能的數位產品。' },
        { property: 'og:type', content: 'website' },
        // TODO: { property: 'og:url', content: 'https://example.com' },
        // TODO: { property: 'og:image', content: 'https://example.com/cover.jpg' },
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      htmlAttrs: {
        lang: 'zh-Hant'
      },
    },
    baseURL: '/'
  },
  css: [
    'vuetify/styles',
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
  modules: ['@nuxt/image-edge', '@nuxt/fonts'],
  routeRules: {
    '/**': { prerender: true }
  },
  runtimeConfig: {
    githubToken: process.env.VITE_GITHUB_TOKEN,
    public: {}
  },
  nitro: { preset: 'vercel' }
  
})