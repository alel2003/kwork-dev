// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/public/css/main.css'],
  modules: ['@nuxtjs/google-fonts', ['@nuxtjs/google-fonts', {
    families: {
      Inter: [400, 500],
      Roboto: [400],
      Lato: [400, 500],
    }
  }], 'nuxt-icon', 'nuxt-aos', '@nuxt/eslint'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})