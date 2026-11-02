import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Wordmark from "./Wordmark";
import { ATTEND, GET_INVOLVED } from "../data/site";

const navClass = ({ isActive }: { isActive: boolean }) =>
  `inline-flex items-center gap-2 whitespace-nowrap font-mono text-[15px] font-medium uppercase leading-none tracking-[0.14em] transition-colors hover:text-maroon lg:text-[12.5px] lg:tracking-[0.1em] xl:text-[14px] xl:tracking-[0.12em] ${
    isActive ? "text-maroon" : "text-teal"
  }`;

export default function Header() {
  const { pathname } = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const involvedActive = pathname.startsWith("/get-involved") && pathname !== ATTEND.to;

  useEffect(() => {
    setDropdown(false);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setDropdown(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header className="border-b border-line">
      <div className="container-site flex h-[104px] items-center justify-between">
        <Link to="/" aria-label="Sam — home">
          <Wordmark />
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex xl:gap-8">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>
          <NavLink to="/gallery" className={navClass}>
            Gallery
          </NavLink>
          <NavLink to={ATTEND.to} className={navClass}>
            {ATTEND.label}
          </NavLink>
          <div
            ref={ref}
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            {/* Clicking goes to the first Get Involved page; hovering still shows the sub-pages. */}
            <Link
              to={GET_INVOLVED[0].to}
              aria-haspopup="true"
              aria-expanded={dropdown}
              onFocus={() => setDropdown(true)}
              className={navClass({ isActive: involvedActive })}
            >
              Get Involved
            </Link>
            {dropdown && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                <ul className="min-w-[200px] border border-line bg-white py-2 shadow-sm">
                  {GET_INVOLVED.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `block px-5 py-3 text-base hover:bg-mist ${isActive ? "text-maroon" : "text-ink"}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <NavLink to="/contact" className={navClass}>
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-4 lg:ml-7 xl:ml-9">
          <Link to="/join" className="btn-primary hidden whitespace-nowrap px-6 py-3 text-[15px] sm:inline-flex lg:px-5 lg:text-[14px] xl:px-6 xl:text-[15px]">
            Join the Collective
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
          >
            <span className="h-[2px] w-7 bg-ink" />
            <span className="h-[2px] w-7 bg-ink" />
          </button>
        </div>
      </div>

      {mobile && (
        <nav className="border-t border-line lg:hidden">
          <div className="container-site flex flex-col gap-5 py-6">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About Us
            </NavLink>
            <NavLink to="/gallery" className={navClass}>
              Gallery
            </NavLink>
            <NavLink to={ATTEND.to} className={navClass}>
              {ATTEND.label}
            </NavLink>
            <Link to={GET_INVOLVED[0].to} className={navClass({ isActive: involvedActive })}>
              Get Involved
            </Link>
            {GET_INVOLVED.map((item) => (
              <NavLink key={item.to} to={item.to} className={(s) => `${navClass(s)} pl-4`}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className={navClass}>
              Contact Us
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
