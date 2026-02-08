// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  app: {
    head: {
      title: 'Shaaf Yousaf - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=0.9' },
        { name: 'description', content: 'Engineering ideas through code, design, and film' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/resources/logo.png' },
      ],
    },
  },
  
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
  ],
  
  css: [
    '~/assets/css/global.css',
  ],
  
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [300, 400, 500, 600, 700, 800, 900] },
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [300, 400, 500, 600, 700, 800] },
      { name: 'Exo 2', provider: 'google', weights: [300, 400, 500, 600, 700, 800, 900] },
    ],
  },
  
  image: {
    quality: 80,
    format: ['webp', 'png', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  
  icon: {
    size: '24px',
    customCollections: [
      {
        prefix: 'custom',
        dir: './assets/icons',
      },
    ],
  },
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/global.css" as *;',
        },
      },
    },
  },
})
