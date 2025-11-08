// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  build: {
    assets: "_fragment/astro/assets",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
