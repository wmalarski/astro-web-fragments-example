import type { Component } from "solid-js";
import ImgStars from "./assets/stars.png";
import ImgStarsFilled from "./assets/stars-filled.png";

type StarsProps = {
  rating?: number;
};

export const Stars: Component<StarsProps> = (props) => {
  const stars = Math.round((props.rating || 0) * 10) / 10;
  const value = 100 - Math.round((props.rating || 0) * 10);
  const style = { clipPath: `inset(0px ${value}% 0px 0px)` };

  return (
    <div class="relative flex flex-row items-center gap-2">
      <img alt="rating" class="h-3 w-20" src={ImgStars.src} />
      <img
        alt="rating"
        class="absolute h-3 w-20"
        src={ImgStarsFilled.src}
        style={style}
      />
      <div class="text-sm opacity-80">{stars}</div>
    </div>
  );
};
