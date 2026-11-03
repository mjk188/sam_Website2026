import { Link } from "react-router-dom";
import Arrow from "../components/Arrow";
import { MISSION, PILLARS } from "../data/content";
import { thumb } from "../data/photos";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Pinned to the content width (not the window) so the watermark sits in the same spot on every laptop. */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-site -translate-x-1/2 lg:block">
          <span className="absolute left-[-1.5%] top-[-2%] select-none font-deva text-[820px] leading-none text-blush">
            स
          </span>
          <span className="absolute left-[26.5%] top-[-3%] h-28 w-28 rotate-45 bg-blush" />
        </div>
        <div className="container-site relative grid gap-4 pb-9 md:pb-14 md:gap-12 md:py-20 lg:grid-cols-12 lg:items-center lg:py-12">
          <div className="flex flex-col justify-center lg:col-span-5">
            <h1 className="display text-[27px] leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[50px] xl:text-[54px]">
              <span className="text-maroon">Saṃ</span> is a multifaceted confluence where{" "}
              <strong className="font-semibold">past</strong>, <strong className="font-semibold">present</strong> and{" "}
              <strong className="font-semibold">future</strong> converge.
            </h1>
            <p className="mt-2.5 max-w-xl font-serif text-[15.5px] italic leading-snug text-teal md:mt-8 md:text-[30px]">
              We are the creators, carriers and preservers of Culture, Heritage and their attributes.
            </p>
            <Link to="/about" className="btn-primary mt-4 self-start px-6 py-2.5 text-[15px] md:mt-10 md:px-10 md:py-5 md:text-[19px]">
              Enter the sanctuary <Arrow />
            </Link>
          </div>
          {/* On laptops, sized to the screen height (up to 680px) so the whole hero is visible without scrolling. */}
          {/* On phones the slideshow leads as a full-width banner above the text; on desktop it sits beside it. */}
          <HeroCarousel className="order-first -mx-5 aspect-[4/3] md:mx-0 md:aspect-square md:rounded-sm lg:order-none lg:col-span-7 lg:col-start-6 lg:aspect-auto lg:h-[min(680px,calc(100svh-104px-6rem))] lg:min-h-[460px]" />
        </div>
      </section>

      {/* What we do: headline on the left; mission and the "08 streams" note on the right. */}
      <section className="border-t border-line">
        <div className="container-site grid gap-6 py-12 md:py-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">What we do</p>
            <h2 className="display mt-3 text-[32px] leading-[1.08] md:mt-5 md:text-[52px]">
              Culture and Heritage as a <span className="accent text-teal">living practice.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="font-serif text-[17px] leading-[1.55] text-ink md:text-[22px] md:leading-[1.6]">{MISSION}</p>
            <div className="mt-5 flex items-center gap-3.5 border-t border-line pt-5 md:mt-9 md:gap-5 md:pt-8">
              <p className="font-serif text-[17px] leading-[1.55] text-moss md:text-[22px] md:leading-[1.6]">
                <em className="text-maroon">Eight</em> interlinked streams of work, from conservation and research to education, curation, community and
                collaboration.
                <Link to="/about" className="mt-2 block w-fit border-b border-teal/50 pb-0.5 font-sans text-[15px] font-semibold text-teal hover:border-maroon hover:text-maroon md:mt-3 md:text-[17px]">
                  See all →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section className="border-t border-line">
        <div className="container-site py-12 md:py-28">
          <p className="eyebrow">How we do it</p>
          <h2 className="display mt-5 text-4xl leading-[1.1] md:text-[56px]">
            Three streams, <span className="accent text-teal">one confluence.</span>
          </h2>
          <p className="mt-5 font-serif text-xl leading-snug text-ink md:text-[22px]">
            Culture, Conversations and Conservation woven together through walks, workshops, research and community
            programmes.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-2.5 sm:gap-7 md:mt-20 lg:gap-12">
            {PILLARS.map((p) => (
              <div key={p.title}>
                <h3 className="mb-2.5 flex flex-col items-center justify-center gap-1 sm:mb-5 sm:flex-row sm:gap-3 lg:gap-4">
                  <span className="translate-y-[0.1em] font-deva text-[16px] leading-none text-teal sm:text-[24px] lg:text-[30px] xl:text-[34px]">{p.deva}</span>
                  <span aria-hidden className="hidden h-[1em] w-px shrink-0 bg-faint text-[22px] sm:block md:text-[24px] lg:text-[30px] xl:text-[34px]" />
                  <span className="whitespace-nowrap font-serif text-[15px] leading-none text-maroon sm:text-[24px] lg:text-[30px] xl:text-[34px]">{p.title}</span>
                </h3>
                <div className="aspect-[4/5] overflow-hidden bg-mist">
                  <img src={thumb(p.image)} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <p className="mt-1.5 text-center font-serif text-[10px] italic leading-[1.35] text-muted sm:mt-5 sm:text-[16px] sm:leading-[1.55] lg:text-[17px]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we do it: centred, after What and How. */}
      <section className="border-t border-line">
        <div className="container-site py-12 text-center md:py-24">
          <p className="eyebrow">Why we do it</p>
          <h2 className="display mx-auto mt-3 max-w-4xl text-[30px] leading-[1.1] md:mt-5 md:text-[52px]">
            The future has no roots <span className="accent text-teal">without the past.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-serif text-[15px] leading-[1.55] text-muted md:mt-6 md:text-[19px] md:leading-[1.6]">
            Our heritage is more than history; it is the foundation of our identity.
            <br />
            By preserving our past and protecting our cultural treasures, we build a bridge between generations to inspire and guide the future.
          </p>
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-maroon">
        <div className="container-site py-14 text-center md:py-28">
          <blockquote className="mx-auto max-w-2xl font-serif text-3xl font-light italic leading-snug text-white md:text-[44px]">
            “Culture is of the people, for the people, by the people.”
          </blockquote>
          <Link to="/about" className="link-mono mt-7 md:mt-10 text-white">
            Read our manifesto <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
