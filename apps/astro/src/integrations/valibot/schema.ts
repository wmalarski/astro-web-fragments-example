import { z } from "astro/zod";

export const mediaId = z.coerce.number().min(0).step(1);
