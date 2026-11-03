import { useEffect } from "react";

type Props = { id: string; title: string; onClose: () => void };

/** Plays one Instagram reel in a pop-up over the page. */
export default function ReelModal({ id, title, onClose }: Props) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", key, true);
    return () => document.removeEventListener("keydown", key, true);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-4" role="dialog" aria-modal aria-label={title} onClick={onClose}>
      <div className="flex w-full max-w-[420px] items-center justify-between pb-3 font-mono text-[12px] uppercase tracking-[0.18em] text-white/70">
        <span className="truncate pr-4">{title}</span>
        <button type="button" className="shrink-0 text-white/90 hover:text-white" onClick={onClose}>
          Close ✕
        </button>
      </div>
      <iframe
        src={`https://www.instagram.com/reel/${id}/embed`}
        title={title}
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        className="h-[min(78vh,740px)] w-full max-w-[420px] rounded-sm bg-white"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
