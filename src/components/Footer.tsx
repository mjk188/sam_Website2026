import { Link } from "react-router-dom";
import DiamondBand from "./DiamondBand";
import Wordmark from "./Wordmark";
import { COPYRIGHT_NOTICE } from "../data/legal";
import { GET_INVOLVED, SOCIALS, TRIAD_DEVANAGARI, TRIAD_ENGLISH } from "../data/site";

const heading = "font-mono text-[10px] uppercase md:text-[13px] tracking-[0.18em] text-teal";
const link = "whitespace-nowrap text-[12.5px] leading-tight text-teal md:text-[17px] md:leading-normal transition-colors hover:text-maroon";

export default function Footer() {
  return (
    <footer>
      <DiamondBand />
      <div className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-site -translate-x-1/2 lg:block">
        {/* Same watermark as the home hero: faint स with the diamond above it */}
        <span className="absolute left-[68%] top-[-24px] select-none font-deva text-[442px] leading-none text-blush">
          स
        </span>
        <span className="absolute left-[calc(68%+330px)] top-[-4px] h-[72px] w-[72px] rotate-45 bg-blush" />
      </div>
      <div className="container-site relative pb-5 pt-4 md:pb-20 md:pt-20">
        <div className="grid gap-3 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <span className="block origin-left scale-[0.8] md:hidden"><Wordmark /></span>
            <span className="hidden md:inline"><Wordmark size="lg" /></span>
            <p className="mt-1 font-deva text-[15px] md:mt-7 md:text-xl leading-none text-maroon">{TRIAD_DEVANAGARI}</p>
            <p className="mt-1.5 font-mono text-[9.5px] font-medium uppercase md:mt-3 md:text-[12px] tracking-[0.18em] text-muted">{TRIAD_ENGLISH}</p>
          </div>

          {/* Phones: each group on a single line of links, to keep the footer short. */}
          <div className="space-y-1.5 text-[12px] leading-snug tracking-[-0.01em] md:hidden">
            {[
              { title: "", items: [{ label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Gallery", to: "/gallery" }, { label: "Contact", to: "/contact" }] },
              { title: "Get Involved", items: GET_INVOLVED.map((g) => ({ label: g.label.replace("Attend an Event", "Attend"), to: g.to })) },
            ].map((group) => (
              <p key={group.title || "pages"}>
                {group.title && <span className={`${heading} mr-1.5 !tracking-[0.1em]`}>{group.title}</span>}
                {group.items.map((item, i) => (
                  <span key={item.to}>
                    {i > 0 && <span className="text-faint"> · </span>}
                    <Link to={item.to} className={`${link} !text-[12px]`}>{item.label}</Link>
                  </span>
                ))}
              </p>
            ))}
            <p>
              <span className={`${heading} mr-1.5 !tracking-[0.1em]`}>Follow</span>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={`${link} !text-[12px]`}>{s.label} · {s.handle}</a>
              ))}
            </p>
          </div>

          <div className="hidden md:col-span-2 md:col-start-7 md:block">
            <h3 className={heading}>Explore</h3>
            <ul className="mt-1.5 space-y-1.5 text-[12.5px] leading-[1.25] md:mt-6 md:space-y-3 md:text-base md:leading-normal">
              <li><Link to="/" className={link}>Home</Link></li>
              <li><Link to="/about" className={link}>About Us</Link></li>
              <li><Link to="/gallery" className={link}>Gallery</Link></li>
              <li><Link to="/contact" className={link}>Contact</Link></li>
            </ul>
          </div>

          <div className="hidden md:col-span-2 md:block">
            <h3 className={heading}>Get Involved</h3>
            <ul className="mt-1.5 space-y-1.5 text-[12.5px] leading-[1.25] md:mt-6 md:space-y-3 md:text-base md:leading-normal">
              {GET_INVOLVED.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:col-span-2 md:col-start-11 md:block">
            <h3 className={heading}>Follow</h3>
            <ul className="mt-1.5 space-y-1.5 text-[12.5px] leading-[1.25] md:mt-6 md:space-y-3 md:text-base md:leading-normal">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noreferrer" className={link}>{s.label}</a>
                  ) : (
                    <span className={link}>{s.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-1 border-t border-line pt-3 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.08em] text-faint md:mt-14 md:flex-row md:items-center md:justify-between md:gap-6 md:pt-6 md:text-[11px] md:tracking-[0.14em]">
          <p>{COPYRIGHT_NOTICE}</p>
          <Link to="/terms" className="shrink-0 text-teal transition-colors hover:text-maroon">
            Terms of Use &amp; Copyright
          </Link>
        </div>
      </div>
      </div>
    </footer>
  );
}
