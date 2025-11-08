// @ts-check

import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  adapter: node({ mode: "standalone" }),
  build: {
    assets: "_fragment/astro/assets",
  },
  env: {
    schema: {
      TMDB_API_KEY: envField.string({ access: "public", context: "server" }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
