import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { tmdb } from "@integrations/tmdb";
import { mediaIdSchema } from "@integrations/valibot/schema";

const pageSchema = z.coerce.number().int().min(1).default(1);

export const server = {
  loadMoreGenre: defineAction({
    handler(input) {
      console.log("[loadMoreGenre]", input);

      const context = tmdb.getTMDBContext();

      return tmdb.getMediaByGenre({
        context,
        genre: input.genreId,
        media: input.mediaType,
        page: input.page,
      });
    },
    input: z.object({
      genreId: mediaIdSchema,
      mediaType: z.union([z.literal("tv"), z.literal("movie")]),
      page: pageSchema,
    }),
  }),
  loadMoreMovieCategory: defineAction({
    handler(input) {
      const context = tmdb.getTMDBContext();

      return input.name === "trending"
        ? tmdb.getTrendingMovie({ context, page: input.page })
        : tmdb.getMovies({ context, page: input.page, query: input.name });
    },
    input: z.object({
      name: z.string().min(1),
      page: pageSchema,
    }),
  }),
  loadMoreSearch: defineAction({
    handler(input) {
      const context = tmdb.getTMDBContext();

      return tmdb.search({ context, ...input });
    },
    input: z.object({
      page: pageSchema,
      query: z.string().optional().default(""),
    }),
  }),
  loadMoreTvCategory: defineAction({
    handler(input) {
      const context = tmdb.getTMDBContext();

      return input.name === "trending"
        ? tmdb.getTrendingTv({ context, page: input.page })
        : tmdb.getTvShows({ context, page: input.page, query: input.name });
    },
    input: z.object({
      name: z.string().min(1),
      page: pageSchema,
    }),
  }),
};
