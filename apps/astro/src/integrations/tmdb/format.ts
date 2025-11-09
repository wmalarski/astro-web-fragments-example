import { categories } from "./categories";
import type { MediaBase } from "./types";

type GetListItem = {
  type: MediaBase["media_type"];
  query: string;
};

export const getListItem = ({ type = "movie", query }: GetListItem) => {
  return categories[type].find((list) => list.query === query)?.title || query;
};
