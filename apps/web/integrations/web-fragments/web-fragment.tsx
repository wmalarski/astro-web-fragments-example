"use client";
import type { ComponentType } from "react";
import "./init-web-fragments";

type FragmentId =
  | "genre-movie"
  | "genre-tv"
  | "movie"
  | "movies-category"
  | "movies"
  | "person"
  | "search"
  | "tv"
  | "tvs-category"
  | "tvs"
  | "homepage";

const WebFragmentElement = "web-fragment" as unknown as ComponentType<{
  src?: string;
  "fragment-id": FragmentId;
}>;

type WebFragmentProps = {
  fragmentId: FragmentId;
  src?: string;
};

export const WebFragment = ({ fragmentId, src }: WebFragmentProps) => {
  return <WebFragmentElement fragment-id={fragmentId} src={src} />;
};
