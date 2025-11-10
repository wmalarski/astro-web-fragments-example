import { actions } from "astro:actions";
import { type Component, createSignal, type ParentProps } from "solid-js";
import type { MediaBase } from "../../integrations/tmdb/types";
import { MediaGrid } from "../media-grid";

type TvCategoryListProps = ParentProps<{
  name?: string;
  pageCount?: number;
  genreId: number;
  mediaType: MediaBase["media_type"];
}>;

export const GenreList: Component<TvCategoryListProps> = (props) => {
  const [container, setContainer] = createSignal<HTMLDivElement>();

  const [currentPage, setCurrentPage] = createSignal(1);

  const [collection, setCollection] = createSignal<MediaBase[]>([]);

  const onMore = async () => {
    const response = await actions.loadMoreGenre({
      genreId: props.genreId,
      mediaType: props.mediaType,
      page: currentPage() + 1,
    });
    const newMedia = response.data?.results || [];
    setCollection((current) => [...current, ...newMedia]);
    setCurrentPage((current) => current + 1);
  };

  return (
    <div
      class="flex max-h-screen w-full flex-col overflow-y-scroll"
      ref={setContainer}
    >
      <h1 class="px-8 pt-4 text-4xl">
        {`Movie Genre: ${props.name || "Not defined"}`}
      </h1>
      <div>
        <MediaGrid
          collection={collection()}
          currentPage={currentPage()}
          onMore={onMore}
          pageCount={props.pageCount || 1}
          parentContainer={container()}
        >
          {props.children}
        </MediaGrid>
      </div>
    </div>
  );
};
