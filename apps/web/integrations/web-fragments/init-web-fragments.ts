"use client";

if (typeof window !== "undefined") {
  import("web-fragments").then((module) => module.initializeWebFragments());
}
