// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "kr",
      },
      title: "함께하고싶은 사람을 꿈꾸다.",
    },
  },
  css: ["~/assets/scss/main.scss", "~/assets/scss/reset.scss"],
});
