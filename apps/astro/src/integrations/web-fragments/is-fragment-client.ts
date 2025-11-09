export const isFragmentClient = () => {
  return document.body.getAttribute("data-fragment") === "true";
};
