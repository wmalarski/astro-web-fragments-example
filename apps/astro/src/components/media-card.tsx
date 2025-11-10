import { paths } from "@awfe/paths";
import { getPoster, getPosterSet } from "@integrations/tmdb/images";
import type { MediaBase } from "@integrations/tmdb/types";
import { type Component, createMemo, type ParentProps } from "solid-js";
import { Link } from "./link.tsx";
import { Stars } from "./stars/stars";

type MediaCardProps = {
  media: MediaBase;
};

export const MediaCard: Component<MediaCardProps> = (props) => {
  return (
    <MediaCardLink mediaId={props.media.id} mediaType={props.media.media_type}>
      <MediaCardContent media={props.media} />
    </MediaCardLink>
  );
};

type MediaCardLinkProps = ParentProps<{
  mediaId: number;
  mediaType: MediaBase["media_type"];
}>;

export const MediaCardLink: Component<MediaCardLinkProps> = (props) => {
  return (
    <Link class="block w-48" href={paths.media(props.mediaType, props.mediaId)}>
      {props.children}
    </Link>
  );
};

type MediaCardContentProps = {
  media: MediaBase;
};

export const MediaCardContent: Component<MediaCardContentProps> = (props) => {
  const heading = createMemo(() => getHeading(props.media));

  return (
    <div class="block w-48">
      <div class="scale-95 transition-scale duration-300 ease-in-out hover:scale-100">
        <picture>
          <img
            alt={heading()}
            class="max-w-full border-4 border-base-300 object-cover text-black"
            height={270}
            src={getPoster(props.media, "92")}
            srcset={getPosterSet(props.media, "185")}
            width={185}
          />
        </picture>
      </div>
      <span>{heading()}</span>
      <Stars rating={props.media.vote_average} />
    </div>
  );
};

const getHeading = (media: MediaBase): string | undefined => {
  if ("title" in media) {
    return media.title;
  }
  if ("name" in media) {
    return media.name;
  }
};
