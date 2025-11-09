export const isFragmentClient = () => {
  // biome-ignore lint/suspicious/noExplicitAny: needed
  return Boolean((window as unknown as any).isFragment);
};
