import Arrow from "../components/Arrow";
import GetInvolvedIntro from "../components/GetInvolvedIntro";
import { mailto } from "../data/site";
import { byId, photo } from "../data/photos";

/** Sponsor and Donate share one page: sponsorship first, then individual giving. */
export default function Sponsor() {
  return (
    <>
      <GetInvolvedIntro />
      <section>
        <div className="container-site pt-6 pb-8 md:pt-7 md:pb-14">
          <p className="eyebrow">Why sponsor</p>
          <h1 className="display mt-2 text-[28px] leading-[1.1] md:mt-3 md:text-[48px] lg:whitespace-nowrap lg:text-[50px] xl:text-[56px]">
            Align your support with <span className="accent">culture &amp; conservation.</span>
          </h1>

          <div className="mt-3 grid gap-4 md:mt-4 md:gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col lg:col-span-7">
              <p className="font-serif text-[17px] leading-snug text-ink md:text-[22px]">
                Culture and its sustainability sit at the heart of CSR priorities.
              </p>
              <p className="mt-1 text-[13.5px] leading-[1.45] text-muted md:text-[16px] md:leading-[1.5]">
                Partnering with us delivers visible cultural impact alongside rigorous documentation and reporting.
              </p>
              <p className="mt-3 border-t border-line pt-3 font-serif text-[14.5px] leading-[1.45] text-moss md:mt-4 md:pt-4 md:text-[18px]">
                Sponsorship lets organisations and CSR foundations connect with Culture and heritage in a meaningful,
                measurable way funding programmes that educate, conserve and bring communities together.
              </p>
              <p className="mt-3 font-serif text-[17px] leading-snug text-ink md:mt-4 md:text-[22px]">
                We are always looking for sponsors for our projects.
              </p>
              <p className="mt-0.5 font-serif text-[14.5px] italic leading-snug text-teal md:text-[18px]">
                Reach out to us to know about our current projects.
              </p>
              <a href={mailto("Sponsorship enquiry")} className="btn-primary mt-3 self-start px-6 py-3 text-[15px] md:mt-4 md:px-8 md:py-4 md:text-base">
                Reach out <Arrow />
              </a>
            </div>
            <img
              src={photo("p171")}
              alt={byId("p171").alt}
              loading="lazy"
              className="block aspect-[16/10] w-full self-start object-cover md:aspect-auto lg:col-span-5"
            />
          </div>

          <div
            id="contribute"
            className="mt-6 grid scroll-mt-28 gap-3 border-t border-line pt-5 md:mt-8 md:gap-6 md:pt-6 lg:grid-cols-12 lg:items-end lg:gap-10"
          >
            <div className="lg:col-span-7">
              <p className="eyebrow">Contribute</p>
              <h2 className="display mt-2 text-[26px] leading-[1.1] md:mt-3 md:text-[44px]">
                Make culture <span className="accent text-teal">accessible for all.</span>
              </h2>
              <p className="mt-2 font-serif text-[14.5px] leading-[1.45] text-moss md:mt-3 md:text-[20px] md:leading-[1.5]">
                We seek stewards who will support our work in every way, for only then can cultural rights be realised
                for all.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="font-serif text-[15px] italic leading-snug text-teal md:text-[21px]">
                Increase cultural capacities. Become a Culture Steward.
              </p>
              <a href={mailto("Donation")} className="btn-primary mt-3 px-6 py-3 text-[15px] md:mt-4 md:px-8 md:py-4 md:text-base">
                Email us to know more <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
