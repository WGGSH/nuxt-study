// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    base: "/nuxt-study/",
  },
  app: {
    cdnURL: "/nuxt-study",
  },
  generate: {
    dir: "docs",
  },
});
