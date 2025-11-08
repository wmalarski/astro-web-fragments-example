// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import { initializeWebFragments } from "web-fragments";

const app = document.getElementById("app");

if (app) {
  mount(() => <StartClient />, app);
}

initializeWebFragments();
