import { actions } from "astro:actions";
import { type Component, createSignal, type ParentProps } from "solid-js";
import type { MediaBase } from "../../integrations/tmdb/types";
import { MediaGrid } from "../media-grid";
import ImgMagnifier from "./assets/magnifier.svg";

type SearchListProps = ParentProps<{
  query?: string;
  pageCount?: number;
}>;

export const SearchList: Component<SearchListProps> = (props) => {
  const [container, setContainer] = createSignal<HTMLDivElement>();

  const [currentPage, setCurrentPage] = createSignal(1);

  const [collection, setCollection] = createSignal<MediaBase[]>([]);

  const onMore = async () => {
    const response = await actions.loadMoreSearch({
      page: currentPage() + 1,
      query: props.query,
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
      <form class="flex flex-row justify-start gap-4 bg-base-300 p-4">
        <ImgMagnifier aria-label="Search" class="h-6 w-6" />
        <input
          aria-label="query"
          class="input"
          id="query"
          name="query"
          value={props.query || ""}
        />
        <button type="submit">Search</button>
      </form>
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
