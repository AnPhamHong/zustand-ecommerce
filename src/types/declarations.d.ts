declare module "@splidejs/react-splide" {
  import { FC, PropsWithChildren } from "react";

  export const Splide: FC<PropsWithChildren<Record<string, unknown>>>;
  export const SplideSlide: FC<PropsWithChildren<Record<string, unknown>>>;
}
