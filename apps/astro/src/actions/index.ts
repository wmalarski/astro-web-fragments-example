import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import {
  getMediaByGenre,
  getMovies,
  getTMDBContext,
  getTrendingMovie,
  getTrendingTv,
  getTvShows,
  search,
} from "../integrations/tmdb/services";
import { mediaIdSchema } from "../integrations/valibot/schema";

const pageSchema = z.coerce.number().int().min(1).default(1);

export const server = {
  loadMoreGenre: defineAction({
    handler(input) {
      const context = getTMDBContext();

      return getMediaByGenre({
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
      const context = getTMDBContext();

      return input.name === "trending"
        ? getTrendingMovie({ context, page: input.page })
        : getMovies({ context, page: input.page, query: input.name });
    },
    input: z.object({
      name: z.string().min(1),
      page: pageSchema,
    }),
  }),
  loadMoreSearch: defineAction({
    handler(input) {
      const context = getTMDBContext();

      return search({ context, ...input });
    },
    input: z.object({
      page: pageSchema,
      query: z.string().optional().default(""),
    }),
  }),
  loadMoreTvCategory: defineAction({
    handler(input) {
      const context = getTMDBContext();

      return input.name === "trending"
        ? getTrendingTv({ context, page: input.page })
        : getTvShows({ context, page: input.page, query: input.name });
    },
    input: z.object({
      name: z.string().min(1),
      page: pageSchema,
    }),
  }),
};
