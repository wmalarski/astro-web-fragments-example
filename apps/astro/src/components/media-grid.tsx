import { type Component, createSignal, For, type ParentProps } from "solid-js";
import type { MediaBase } from "../integrations/tmdb/types";
import { MediaCard } from "./media-card";

type MediaGridProps = ParentProps<{
  collection: MediaBase[];
  currentPage: number;
  onMore?: () => void;
  pageCount: number;
  parentContainer?: Element | null;
}>;

export const MediaGrid: Component<MediaGridProps> = (props) => {
  const [throttleTimer, setThrottleTimer] = createSignal(false);
  const [scrollEnabled, setScrollEnabled] = createSignal(
    props.currentPage < props.pageCount,
  );

  const handleScroll = () => {
    if (!props.parentContainer) {
      return;
    }

    const endOfPage =
      props.parentContainer.clientHeight + props.parentContainer.scrollTop >=
      props.parentContainer.scrollHeight - 100;

    if (endOfPage) {
      props.onMore?.();
    }

    if (props.currentPage === props.pageCount) {
      setScrollEnabled(false);
    }
  };

  const onScroll = () => {
    if (throttleTimer() || !scrollEnabled()) {
      return;
    }
    setThrottleTimer(true);
    setTimeout(() => {
      handleScroll();
      setThrottleTimer(false);
    }, 1000);
  };

  return (
    <section>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4 p-8"
        onScroll={onScroll}
      >
        {props.children}
        <For each={props.collection}>
          {(media) => <MediaCard media={media} />}
        </For>
      </div>
    </section>
  );
};
