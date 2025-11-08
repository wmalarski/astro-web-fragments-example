// @ts-check

import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  adapter: node({ mode: "standalone" }),
  build: {
    assets: "_fragment/astro/assets",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
