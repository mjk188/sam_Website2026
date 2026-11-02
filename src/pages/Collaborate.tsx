import Arrow from "../components/Arrow";
import GetInvolvedIntro from "../components/GetInvolvedIntro";
import { COLLAB_TYPES, PARTNERS } from "../data/content";
import { byId, photo } from "../data/photos";
import { mailto } from "../data/site";

export default function Collaborate() {
  return (
    <>
      <GetInvolvedIntro />
      <section>
        <div className="container-site grid gap-5 pt-6 pb-8 md:gap-7 md:pt-7 md:pb-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1 className="display text-[28px] leading-[1.1] md:text-[42px]">
              Conserving Heritage is a <span className="accent text-teal">shared practice.</span>
            </h1>
            <p className="mt-2.5 max-w-2xl font-serif text-[15px] leading-[1.45] text-moss md:mt-3 md:text-[20px] md:leading-[1.5]">
              We work with institutions, professionals and community groups to strengthen heritage education,
              conservation and public engagement in India and internationally.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 md:mt-6 md:gap-x-8 md:gap-y-5">
              {COLLAB_TYPES.map((c) => (
                <div key={c.title} className="border-t border-line pt-2.5 md:pt-4">
                  <h2 className="font-serif text-[15px] leading-snug text-ink md:text-[20px]">{c.title}</h2>
                  <p className="mt-1 text-[12px] leading-[1.45] text-muted md:mt-1.5 md:text-[15px] md:leading-[1.6]">{c.body}</p>
                </div>
              ))}
            </div>

            <a href={mailto("Collaboration proposal")} className="btn-primary mt-5 px-6 py-3 text-[15px] md:mt-7 md:px-8 md:py-4 md:text-base">
              Propose a collaboration <Arrow />
            </a>
          </div>

          <aside className="h-fit border border-line bg-mist p-4 md:p-7 lg:col-span-5">
            <figure className="mb-3 md:mb-6">
              <div className="aspect-[16/9] overflow-hidden bg-mist">
                <img src={photo("p23")} alt={byId("p23").alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </figure>
            <h2 className="display text-[20px] leading-tight md:text-[30px]">
              Who we <span className="accent text-teal">work with</span>
            </h2>
            <ul className="mt-1.5 space-y-0.5 md:mt-3 md:space-y-1">
              {PARTNERS.map((p) => (
                <li key={p} className="font-serif text-[15px] leading-snug text-ink md:text-[18px]">
                  {p}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
