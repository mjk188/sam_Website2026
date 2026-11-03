import { useEffect } from "react";
import { photo, type Photo } from "../data/photos";

type Props = { photos: Photo[]; index: number; onClose: () => void; onIndex: (i: number) => void };

export default function Lightbox({ photos, index, onClose, onIndex }: Props) {
  const current = photos[index];
  const step = (d: number) => onIndex((index + d + photos.length) % photos.length);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [index, photos.length, onClose, onIndex]);

  const btn = "absolute top-1/2 -translate-y-1/2 p-4 font-mono text-2xl text-white/70 hover:text-white";

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95" role="dialog" aria-modal onClick={onClose}>
      <div className="flex items-center justify-between px-5 py-4 font-mono text-[13px] uppercase tracking-[0.18em] text-white/60">
        <span>
          {index + 1} / {photos.length}
        </span>
        <button type="button" className="text-white/80 hover:text-white" onClick={onClose}>
          Close ✕
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-20">
        <img
          src={photo(current.id)}
          alt={current.alt}
          className="max-h-[78vh] max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <button type="button" aria-label="Previous" className={`${btn} left-0`} onClick={(e) => (e.stopPropagation(), step(-1))}>
          ←
        </button>
        <button type="button" aria-label="Next" className={`${btn} right-0`} onClick={(e) => (e.stopPropagation(), step(1))}>
          →
        </button>
      </div>
      <p className="px-5 pb-6 text-center font-serif text-lg italic text-white/80">{current.alt}</p>
    </div>
  );
}
