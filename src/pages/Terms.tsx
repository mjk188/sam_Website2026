import { COPYRIGHT_NOTICE, TERMS } from "../data/legal";
import { ORG_NAME } from "../data/site";

export default function Terms() {
  return (
    <section>
      <div className="container-site max-w-3xl pb-12 pt-8 md:pb-24 md:pt-16">
        <p className="eyebrow">Legal</p>
        <h1 className="display mt-3 text-[30px] leading-[1.1] md:mt-5 md:text-[52px]">
          Terms of Use <span className="accent text-teal">&amp; Copyright</span>
        </h1>
        <p className="mt-3 font-serif text-[15px] leading-[1.5] text-moss md:mt-5 md:text-[20px]">
          All content on this website is the exclusive property of {ORG_NAME}. No part of it may be used without our
          prior written permission.
        </p>

        <div className="mt-7 space-y-6 md:mt-12 md:space-y-9">
          {TERMS.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-[18px] leading-snug text-maroon md:text-[24px]">{section.title}</h2>
              {section.body.map((para) => (
                <p key={para} className="mt-2 text-[14px] leading-[1.6] text-muted md:mt-3 md:text-[16px] md:leading-[1.75]">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-9 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-faint md:mt-14 md:text-[12px]">
          {COPYRIGHT_NOTICE}
        </p>
      </div>
    </section>
  );
}
