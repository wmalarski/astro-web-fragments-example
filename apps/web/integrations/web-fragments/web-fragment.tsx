"use client";
import type { ComponentType } from "react";
import "./init-web-fragments";
import { pathsPrefix } from "./paths";
import type { FragmentId } from "./types";

const WebFragmentElement = "web-fragment" as unknown as ComponentType<{
  src?: string;
  "fragment-id": FragmentId;
}>;

type WebFragmentProps = {
  fragmentId: FragmentId;
  src?: string;
};

export const WebFragment = ({ fragmentId, src }: WebFragmentProps) => {
  return (
    <WebFragmentElement fragment-id={fragmentId} src={`${pathsPrefix}${src}`} />
  );
};
