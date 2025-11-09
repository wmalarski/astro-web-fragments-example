export const isFragmentRequest = (request: Request) => {
  return request.headers.get("x-fragment-mode") === "embedded";
};
