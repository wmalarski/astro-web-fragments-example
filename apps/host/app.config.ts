import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    compatibilityDate: "2025-11-07",
    preset: "cloudflare_module",
  },
});
