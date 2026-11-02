import Arrow from "../components/Arrow";
import { EMAIL, mailto } from "../data/site";

const AREAS = [
  {
    title: "Heritage & conservation",
    body: "Conservation architects, archaeologists and researchers who work hands-on with monuments, materials and archives.",
  },
  {
    title: "Walks & programmes",
    body: "Storytellers, guides and programme leads who design and lead walks, workshops and dialogues.",
  },
  {
    title: "Research & documentation",
    body: "Writers, photographers and oral historians who record, archive and publish what we learn.",
  },
  {
    title: "Operations & outreach",
    body: "People who keep the collective running: partnerships, communications, design and logistics.",
  },
];

export default function Join() {
  return (
    <section>
      <div className="container-site pt-7 pb-9 md:pt-12 md:pb-16">
        <p className="eyebrow">Join the Collective</p>
        <h1 className="display mt-4 text-4xl leading-[1.1] md:text-[48px]">
          Work with us, <span className="accent text-teal">build with us.</span>
        </h1>
        <p className="mt-5 font-serif text-lg leading-[1.5] text-moss md:text-[20px]">
          We are always looking for people who care about culture and heritage to join our team, whether full-time,
          part-time or as fellows and interns.
        </p>

        <div className="mt-10 grid gap-x-10 gap-y-6 border-t border-line pt-6 md:pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div key={a.title}>
              <h2 className="font-serif text-[20px] leading-snug text-ink">{a.title}</h2>
              <p className="mt-1.5 text-[15px] leading-[1.6] text-muted">{a.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-line pt-6 md:pt-8 md:flex-row md:items-center">
          <div>
            <p className="font-serif text-[22px] italic leading-snug text-teal md:text-[26px]">
              Send us your CV and a short note on why you'd like to join.
            </p>
            <p className="mt-1.5 text-[15px] text-muted md:text-base">
              Write to{" "}
              <a href={mailto("Application — Join the Collective")} className="text-teal underline underline-offset-4 hover:text-maroon">
                {EMAIL}
              </a>
            </p>
          </div>
          <a href={mailto("Application — Join the Collective")} className="btn-primary shrink-0">
            Apply by email <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
