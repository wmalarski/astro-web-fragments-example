type MediaType = "movie" | "tv";

export const pathsPrefix = "/_astro";

export const paths = {
  genre: (mediaType: MediaType, id: number) =>
    `${pathsPrefix}/genre/${id}/${mediaType}/`,
  index: pathsPrefix,
  media: (mediaType: MediaType, id: number) =>
    `${pathsPrefix}/${mediaType}/${id}/`,
  movieCategory: (category: string) =>
    `${pathsPrefix}/movie/categories/${category}/`,
  movies: `${pathsPrefix}/movie/`,
  notFound: "/404/",
  person: (id: number) => `${pathsPrefix}/person/${id}/`,
  search: `${pathsPrefix}/search/`,
  tv: `${pathsPrefix}/tv/`,
  tvCategory: (category: string) => `${pathsPrefix}/tv/categories/${category}/`,
};
