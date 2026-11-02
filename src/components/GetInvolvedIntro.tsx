import { NavLink } from "react-router-dom";
import { GET_INVOLVED } from "../data/site";

/** Shared intro + sub-navigation at the top of every Get Involved page. */
export default function GetInvolvedIntro() {
  return (
    <section>
      <div className="container-site pt-6 md:pt-7">
        <p className="eyebrow">Get Involved</p>
        <p className="mt-2 font-serif text-[21px] italic leading-snug text-muted md:mt-4 md:text-[28px] lg:text-[30px]">
          Culture is built with people.<br /><span className="text-teal">Here is how you can be part of it.</span>
        </p>
        <nav className="mt-5 flex justify-between gap-2 whitespace-nowrap border-t border-line pt-4">
          {GET_INVOLVED.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `shrink-0 font-mono text-[9.5px] font-medium uppercase tracking-[0.06em] md:text-[16px] md:tracking-[0.18em] transition-colors hover:text-maroon ${
                  isActive ? "border-b border-maroon pb-1 text-maroon" : "text-teal"
                }`
              }
            >
              {item.short}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  );
}
