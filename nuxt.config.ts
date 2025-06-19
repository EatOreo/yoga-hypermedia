export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  // RENDERING MODE: SSG
  ssr: true, // since the build preset github_pages makes static pages we are really using SSG
  nitro: {
    preset: 'github_pages',
  },
  app: {
    baseURL: '/yoga-hypermedia/',
    head: {
      title: 'Yogaga',
      charset: 'utf-8',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Find Your Inner Peace with Yogaga.' },
        { name: 'keywords', content: 'yoga, meditation, mindfulness, wellness, flexibility, relaxation, fitness, breathing, asana, health' }
      ],
    }
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
})
