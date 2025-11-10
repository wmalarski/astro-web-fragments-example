import {
  type Component,
  createEffect,
  createSignal,
  For,
  onCleanup,
  type ParentProps,
} from "solid-js";
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
  const [triggerElement, setTriggerElement] = createSignal<HTMLDivElement>();

  const intersectionObserverCallback: IntersectionObserverCallback = (
    entries,
  ) => {
    const isIntersecting = entries.some((entry) => entry.isIntersecting);
    const isEnabled = props.currentPage < props.pageCount;

    if (!isEnabled || !isIntersecting) {
      return;
    }

    props.onMore?.();
  };

  createEffect(() => {
    const element = triggerElement();
    const root = props.parentContainer;

    if (!element || !root) {
      return;
    }

    const observer = new IntersectionObserver(intersectionObserverCallback, {
      root,
      threshold: 1.0,
    });

    observer.observe(element);

    onCleanup(() => {
      observer.disconnect();
    });
  });

  return (
    <section>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4 p-8">
        {props.children}
        <For each={props.collection}>
          {(media) => <MediaCard media={media} />}
        </For>
        <div ref={setTriggerElement} />
      </div>
    </section>
  );
};
