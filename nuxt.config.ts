// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: true,
  },
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "kr",
      },
      title: "함께하고싶은 사람을 꿈꾸다.",
      link: [
        {
          rel: "stylesheet",
          as: "style",
          href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable.css"
        }
      ]
    },
  },
  css: ["~/assets/scss/main.scss", "~/assets/scss/reset.scss"],
});
