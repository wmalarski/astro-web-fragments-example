import { z } from "astro/zod";

export const mediaIdSchema = z.coerce.number().min(0).step(1);
