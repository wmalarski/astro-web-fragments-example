// @ts-expect-error `.open-next/worker.ts` is generated at build time
import { default as handler } from "./.open-next/worker.js";
import { webFragmentsMiddleware } from "./integrations/web-fragments/middleware";

export default {
  fetch: async (request, env, ctx) =>
    webFragmentsMiddleware(request, () => handler.fetch(request, env, ctx)),
} satisfies ExportedHandler<CloudflareEnv>;
