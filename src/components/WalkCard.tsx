import { useEffect, useState } from "react";
import Arrow from "./Arrow";
import { thumb } from "../data/photos";
import type { Walk } from "../data/content";

type Props = { walk: Walk; onOpen: () => void };

/** Poster card that flips through the walk's photos while hovered. */
export default function WalkCard({ walk, onOpen }: Props) {
  const frames = [walk.cover ?? walk.poster ?? walk.image, ...walk.photos.map(thumb)];
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hovering || frames.length < 2) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % frames.length), 1100);
    return () => window.clearInterval(t);
  }, [hovering, frames.length]);

  return (
    // Each card spans five rows of the parent grid (subgrid), so titles, descriptions and links line up across a row.
    <article className="row-span-5 grid grid-rows-subgrid gap-0">
      <button
        type="button"
        onClick={onOpen}
        onMouseEnter={() => {
          setHovering(true);
          if (frames.length > 1) setIndex(1);
        }}
        onMouseLeave={() => {
          setHovering(false);
          setIndex(0);
        }}
        className="relative aspect-square overflow-hidden rounded-sm bg-mist"
        aria-label={`Open ${walk.title}`}
      >
        {frames.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </button>
      <h2 className="mt-2.5 self-end font-serif text-[17px] leading-tight sm:mt-4 sm:text-[24px] text-ink">{walk.title}</h2>
      <p className="font-deva text-[14px] leading-snug text-maroon sm:text-lg">{walk.deva}</p>
      <p className="mt-1 font-serif text-[13px] italic leading-[1.4] sm:mt-1.5 sm:text-[16px] sm:leading-[1.45] text-muted">{walk.body}</p>
      <button type="button" onClick={onOpen} className="link-mono mb-7 mt-2 w-fit self-start text-[11px] sm:mb-10 sm:mt-3 sm:text-[13px]">
        View more <Arrow />
      </button>
    </article>
  );
}
