import { useState } from "react";
import GetInvolvedIntro from "../components/GetInvolvedIntro";
import { EVENTS } from "../data/content";
import { WHATSAPP_URL } from "../data/site";
import WalkCard from "../components/WalkCard";
import WalkModal from "../components/WalkModal";

export default function Attend() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <GetInvolvedIntro />
      <section>
        <div className="container-site pt-6 pb-9 md:pt-7 md:pb-16">
          <h1 className="display text-4xl leading-[1.1] md:text-[42px]">
            Curated Heritage Walks <span className="accent">and Experiences.</span>
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
