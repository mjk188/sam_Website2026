import NumberedGrid from "../components/NumberedGrid";
import { ACTIVITIES } from "../data/content";
import { byId, thumb } from "../data/photos";

export default function About() {
  return (
    <>
      <section className="border-b border-line">
        <div className="container-site grid gap-7 py-12 md:py-28 lg:grid-cols-3 lg:items-end lg:gap-4">
          <div className="lg:col-span-2">
            <p className="eyebrow">About Us</p>
            <h1 className="display mt-5 text-4xl leading-[1.1] md:text-[56px]">
              Culture as a
              <br />
              <span className="accent">shared resource</span>
              <br />
              for past, present and future.
            </h1>
          </div>
          <p className="font-serif text-xl leading-[1.6] text-moss md:text-[22px] lg:pb-2">
            CollectiveSamm works at the confluence of heritage, community and contemporary practice, connecting
            culture, conversations and conservation across India and beyond.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-site grid grid-cols-3 gap-3 py-7 md:gap-4 md:py-14">
          {["p13", "p64", "p166"].map((id) => (
            <div key={id} className="aspect-[3/4] overflow-hidden bg-mist">
              <img src={thumb(id)} alt={byId(id).alt} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="vision" className="border-b border-line">
        <div className="container-site grid gap-6 py-8 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <h2 className="display text-[26px] text-maroon md:text-[44px]">Vision</h2>
            <p className="mt-2.5 font-serif text-[15px] leading-[1.55] text-ink md:mt-4 md:text-[20px] md:leading-[1.6]">
              To preserve, promote and advance cultural heritage and its values as a shared resource for sustainable
              social, economic and environmental development.
            </p>
          </div>
          <div className="border-t border-line pt-6 md:border-l md:border-t-0 md:pl-16 md:pt-0">
            <h2 className="display text-[26px] text-teal md:text-[44px]">Mission</h2>
            <p className="mt-2.5 font-serif text-[15px] leading-[1.55] text-ink md:mt-4 md:text-[20px] md:leading-[1.6]">
              To connect culture, communities and development through culture, conversations and conservation —
              fostering heritage education, cultural engagement, experiential learning and initiatives that preserve
              and celebrate India's diverse tangible and intangible heritage.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-site py-12 md:py-28">
          <p className="eyebrow">Nature of Activities</p>
          <h2 className="display mb-5 mt-3 text-[28px] leading-[1.1] md:mb-12 md:mt-5 md:text-[56px]">Eight streams of work.</h2>
          <NumberedGrid items={ACTIVITIES} cols={4} titlesOnly />
        </div>
      </section>
    </>
  );
}
