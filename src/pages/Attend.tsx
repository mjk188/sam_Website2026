import { useState } from "react";
import { EVENTS } from "../data/content";
import { WHATSAPP_URL } from "../data/site";
import WalkCard from "../components/WalkCard";
import WalkModal from "../components/WalkModal";

export default function Attend() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section>
        <div className="container-site pt-8 pb-9 md:pt-14 md:pb-16">
          <p className="eyebrow">Attend an Event</p>
          <h1 className="display mt-3 leading-[1.05] md:mt-5">
            {/* संवाद | Samvaad: the Hindi set slightly larger so both words share a visual height, joined by a short maroon rule. */}
            <span className="flex items-baseline gap-3.5 text-[40px] md:gap-6 md:text-[64px]">
              <span className="font-deva text-[1.08em] leading-none text-maroon">संवाद</span>
              <span aria-hidden className="h-[0.62em] w-[2px] self-center bg-maroon/35" />
              <span className="font-serif font-light italic leading-none tracking-[-0.02em] text-teal">Samvaad</span>
            </span>
            <span className="mt-2 block text-[20px] md:mt-3 md:text-[24px]">
              Curated Walks <span className="accent">and Experiences.</span>
            </span>
          </h1>
          <p className="lead mt-2 lg:whitespace-nowrap">Exclusively curated Walks, workshops and dialogues across India and beyond.</p>
          <p className="lead mt-1">
            Interested?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-teal underline decoration-teal/40 underline-offset-4 hover:text-maroon"
            >
              Drop a message
            </a>
          </p>

          <div className="mt-6 grid grid-cols-2 gap-x-3 sm:gap-x-8 lg:grid-cols-4">
            {EVENTS.map((e, i) => (
              <WalkCard key={e.title} walk={e} onOpen={() => setOpen(i)} />
            ))}
          </div>
        </div>
      </section>

      {open !== null && <WalkModal walk={EVENTS[open]} onClose={() => setOpen(null)} />}
    </>
  );
}
