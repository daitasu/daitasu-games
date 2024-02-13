// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/device",
    "@pinia/nuxt",
  ],
  app: {
    head: {
      title: "Flying Shigechi",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "空を飛ぶ Shigechi がキノコを追い求める物語です",
        },
      ],
    },
  },
});
