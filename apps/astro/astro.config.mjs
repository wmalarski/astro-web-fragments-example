// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: "_fragment/homepage/assets",
    // assetsPrefix: "_fragment/homepage/assets",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
