import { defineConfig } from "@solidjs/start/config";
import { type ChildProcess, spawn } from "node:child_process";
import type { PluginOption } from "vite";

export default defineConfig({
  server: {
    compatibilityDate: "2025-11-07",
    preset: "cloudflare-pages",
  },
  vite: {
    plugins: [wranglerPagesDevWithReload()],
  },
});

function wranglerPagesDevWithReload(): PluginOption[] {
  if (process.env.NODE_ENV !== "development") {
    return [];
  }

  const runWranglerPagesDev: (() => void) & {
    pagesDevProcess?: ChildProcess;
  } = () => {
    runWranglerPagesDev.pagesDevProcess?.kill();
    runWranglerPagesDev.pagesDevProcess = spawn(
      "pnpm",
      ["wrangler", "pages", "dev", "--binding", "DEV_MODE=true"],
      { stdio: "inherit" },
    );
  };

  return [
    {
      buildStart() {
        // we want to watch for changes in the web-fragments/gateway entrypoint
        // this.addWatchFile("../../packages/web-fragments/src/gateway");
        // after each change lets re-run wrangler pages dev
        runWranglerPagesDev();
      },
      name: "pages-functions-external-hot-reload",
    },
  ];
}

// function buildAndServeFragment(fragment: 'remix' | 'qwik') {
// 	spawn('pnpm', ['--filter', `pierced-react___${fragment}-fragment`, 'buildAndServe'], {
// 		stdio: ['ignore', 'inherit', 'inherit'],
// 		env: { ...process.env, NODE_ENV: 'production' },
// 	});
// }
