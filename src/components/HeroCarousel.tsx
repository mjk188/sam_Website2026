import { useEffect, useState } from "react";
import { byId, photo } from "../data/photos";
import { HOME_SLIDES as SLIDES } from "../data/home";



const SLIDE_MS = 3000;

/** Photos cross-fade on their own every few seconds. */
export default function HeroCarousel({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  // Only fetch a slide shortly before it is shown, so the first photo isn't competing with all the others.
  const [ready, setReady] = useState(2);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
      setReady((r) => Math.min(r + 1, SLIDES.length));
    }, SLIDE_MS);
    return () => window.clearInterval(t);
  }, []);

  return (
    <figure className={`relative overflow-hidden bg-ink ${className}`}>
      {SLIDES.map((s, i) => {
        const active = i === index;
        const layer = `absolute inset-0 transition-opacity duration-700 ${active ? "opacity-100" : "opacity-0"}`;
        return s.video ? (
          <video
            key={s.id}
            src={s.video}
            poster={photo(s.id)}
            autoPlay
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "none"}
            aria-label={byId(s.id).alt}
            className={`${layer} h-full w-full object-cover`}
          />
        ) : (
          <img
            key={s.id}
            src={i < ready ? photo(s.id) : undefined}
            alt={byId(s.id).alt}
            className={`${layer} h-full w-full object-cover`}
            style={{ objectPosition: s.focus ?? "center" }}
          />
        );
      })}
    </figure>
  );
}
