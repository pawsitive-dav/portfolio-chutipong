export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Chutipong Kritkaow | Full Stack Developer & UX/UI Designer',
      meta: [
        { name: 'theme-color', content: '#ffffff' },
        { name: 'author', content: 'Chutipong Kritakow' },
        {
          property: 'og:title',
          content: 'Chutipong Kritkaow | Full Stack Developer & UX/UI Designer',
        },
        {
          property: 'og:description',
          content:
            'Welcome to my portfolio! I’m Chutipong Kritkaow, a Full Stack Developer and UX/UI Designer passionate about crafting seamless digital experiences. With expertise in both front-end and back-end development, I create scalable web applications with user-centric design. Explore my projects, skills, and experiences that showcase my dedication to building functional and aesthetically refined solutions.',
        },
        { property: 'og:image', content: '/og-image.jpg' },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      lastUpdate: '10 Feb 2025',
    },
  },
  modules: [
    'nuxt-lucide-icons',
    '@hypernym/nuxt-anime',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'th', name: 'ภาษาไทย', language: 'th-TH', file: 'th.json' },
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'th',
    lazy: true,
    vueI18n: './i18n.config.ts',
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
