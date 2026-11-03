import { useEffect, type MouseEvent } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { PAGES, pageFor } from "../data/pages";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = (pageFor(pathname) ?? PAGES[0]).title;
  }, [pathname]);

  // Copyright deterrent: no "Save image/video as…" menu on site media (see /terms).
  const blockMediaMenu = (e: MouseEvent) => {
    if (e.target instanceof HTMLImageElement || e.target instanceof HTMLVideoElement) e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col" onContextMenu={blockMediaMenu}>
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur">
        <Header />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
