import { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Lightbox from "./Lightbox";
import ReelModal from "./ReelModal";
import { byId, thumb } from "../data/photos";
import { WHATSAPP_URL } from "../data/site";
import type { Walk } from "../data/content";

type Props = { walk: Walk; onClose: () => void };

/** Full-screen view of one walk: poster, details and every photo from it. */
export default function WalkModal({ walk, onClose }: Props) {
  const photos = walk.photos.map(byId);
  const [viewer, setViewer] = useState<number | null>(null);
  const [reel, setReel] = useState<number | null>(null);

  // Re-applied after the photo lightbox closes, since it resets body scrolling on its way out.
  useEffect(() => {
    if (viewer !== null) return;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => e.key === "Escape" && reel === null && onClose();
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("keydown", key);
      document.body.style.overflow = "";
    };
  }, [viewer, reel, onClose]);

  return (
    <div className="fixed inset-0 z-[45] overflow-y-auto bg-white" role="dialog" aria-modal aria-label={walk.title}>
      <div className="container-site py-6 md:py-10">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[13px] uppercase tracking-[0.18em] text-teal hover:text-maroon"
          >
            Close ✕
          </button>
        </div>

        <div className="mt-6 grid gap-7 md:gap-10 lg:grid-cols-12 lg:items-center">
          <img
            src={walk.poster ?? walk.image}
            alt={`${walk.title} poster`}
            className="mx-auto max-h-[82vh] w-auto max-w-full rounded-sm object-contain lg:col-span-7"
          />
          <div className="lg:col-span-5">
            <h2 className="display text-4xl md:text-[52px]">{walk.title}</h2>
            <p className="mt-1 font-deva text-2xl text-maroon">{walk.deva}</p>
            <p className="mt-6 font-serif text-xl italic leading-snug text-muted md:text-[24px]">{walk.body}</p>
            {walk.details && <p className="mt-5 text-[17px] leading-[1.7] text-muted">{walk.details}</p>}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary mt-7 md:mt-10">
              Drop a message <Arrow />
            </a>
          </div>
        </div>

        {walk.videos && walk.videos.length > 0 && (
          <section className="mt-16 border-t border-line pt-7 md:pt-10 md:mt-20">
            <p className="eyebrow">On video</p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              {walk.videos.map((v, i) => (
                <button key={v.id} type="button" onClick={() => setReel(i)} className="group text-left">
                  <span className="relative block aspect-[9/16] overflow-hidden rounded-sm bg-ink">
                    <img
                      src={thumb(v.cover)}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-maroon transition group-hover:scale-110">
                      <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span className="mt-3 block font-serif text-[17px] italic text-muted group-hover:text-maroon">{v.title}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {photos.length > 0 && (
          <section className="mt-16 border-t border-line pt-7 md:pt-10 md:mt-20">
            <p className="eyebrow">From the walk</p>
            <div className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
              {photos.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setViewer(i)}
                  className="group mb-3 block w-full overflow-hidden bg-mist md:mb-4"
                >
                  <img
                    src={thumb(p.id)}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full transition duration-500 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      {reel !== null && walk.videos && (
        <ReelModal id={walk.videos[reel].id} title={walk.videos[reel].title} onClose={() => setReel(null)} />
      )}

      {viewer !== null && (
        <Lightbox photos={photos} index={viewer} onIndex={setViewer} onClose={() => setViewer(null)} />
      )}
    </div>
  );
}
