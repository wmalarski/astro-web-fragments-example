// @ts-check

import node from "@astrojs/node";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  adapter: node({ mode: "standalone" }),
  base: "_astro",
  build: {
    assets: "astro/assets",
  },
  env: {
    schema: {
      TMDB_API_KEY: envField.string({ access: "public", context: "server" }),
    },
  },
  integrations: [solidJs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
