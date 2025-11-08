"use client";
import type { ComponentType } from "react";
import "./init-web-fragments";

const WebFragmentElement = "web-fragment" as unknown as ComponentType<{
  src?: string;
  "fragment-id": string;
}>;

type WebFragmentProps = {
  fragmentId: string;
  src?: string;
};

export const WebFragment = ({ fragmentId, src }: WebFragmentProps) => {
  return <WebFragmentElement fragment-id={fragmentId} src={src} />;
};
