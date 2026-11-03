import { useEffect, useRef } from "react";

type Clip = { src: string; title: string };

const CLIPS: Clip[] = [
  // Interleaved so clips from the same place (Basant, the Northeast, Safdarjung) never sit side by side.
  { src: "/videos/flower-offering", title: "Laying out an offering" },
  { src: "/videos/safdarjung-dusk-group", title: "Walkers at Safdarjung Tomb, dusk" },
  { src: "/videos/block-printing", title: "Hand block printing" },
  { src: "/videos/marigold-sorting", title: "Marigolds for Basant" },
  { src: "/videos/qutub-pillars-group", title: "Among the pillars at the Qutub" },
  { src: "/videos/loom-warping", title: "Setting up the warp for a loom" },
  { src: "/videos/safdarjung-trees", title: "Safdarjung Tomb through the trees" },
  { src: "/videos/wheelchair-walk", title: "An accessible walk under the trees" },
  { src: "/videos/basant-crowd", title: "Basant at Nizamuddin Dargah" },
  { src: "/videos/puppet-stall", title: "A puppet maker's stall" },
  { src: "/videos/white-cenotaphs", title: "Looking out over white marble cenotaphs" },
  { src: "/videos/northeast-children", title: "A performance with weaving communities" },
  { src: "/videos/prayer-beads", title: "Prayer beads and offerings" },
  { src: "/videos/safdarjung-garden", title: "The garden at Safdarjung" },
  { src: "/videos/walk-trees", title: "Walking together under the trees" },
  { src: "/videos/group-on-wall", title: "A pause on the old walls" },
  { src: "/videos/safdarjung-group-portrait", title: "Together at Safdarjung Tomb" },
  { src: "/videos/gateway-group", title: "At the gateway" },
  { src: "/videos/red-curtains", title: "Among the red curtains" },
];

/** A silent looping clip that only plays while on screen, so the page stays light. */
function LoopClip({ clip, className = "" }: { clip: Clip; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.src) v.src = `${clip.src}.mp4`;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [clip.src]);

  return (
    <figure className={`group relative overflow-hidden bg-ink ${className}`}>
      <video
        ref={ref}
        poster={`${clip.src}.jpg`}
        muted
        loop
        playsInline
        preload="none"
        aria-label={clip.title}
        className="h-full w-full object-cover"
      />
    </figure>
  );
}

/** Editorial grid of looping clips: a large feature, then the rest in a dense grid. */
export default function MotionReel() {
  const [feature, ...rest] = CLIPS;
  // Every seventh clip is promoted to a large tile to keep the rhythm varied.
  const isLarge = (i: number) => i % 7 === 6;
  // On phones (3 columns) a single clip can be left alone on the last row; stretch it into a wide banner instead.
  const cells = 4 + rest.reduce((n, _, i) => n + (isLarge(i) ? 4 : 1), 0);
  const widenLast = cells % 3 === 1 && !isLarge(rest.length - 1);
  return (
    <div className="grid grid-flow-dense grid-cols-3 gap-1.5 md:grid-cols-4 md:gap-3">
      <LoopClip clip={feature} className="col-span-2 row-span-2 aspect-[3/4]" />
      {rest.map((c, i) => (
        <LoopClip
          key={c.src}
          clip={c}
          className={
            isLarge(i)
              ? "col-span-2 row-span-2 aspect-[3/4]"
              : widenLast && i === rest.length - 1
                ? "col-span-3 aspect-video md:col-span-1 md:aspect-[3/4]"
                : "aspect-[3/4]"
          }
        />
      ))}
    </div>
  );
}
