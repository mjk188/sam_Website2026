import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { PAGES } from "./src/data/pages";

const SITE = "https://samfoundation.in";

// Content-Security-Policy for the published site only: the dev server injects inline scripts this would block.
// Allows our own files plus Google Fonts, the Web3Forms contact API and Instagram reel embeds.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self' https://api.web3forms.com",
  "frame-src https://www.instagram.com",
  "object-src 'none'",
  "base-uri 'self'",
].join("; ");

const securityHeaders = (): Plugin => ({
  name: "csp-meta",
  apply: "build",
  transformIndexHtml: (html) =>
    html.replace("<head>", `<head>\n    <meta http-equiv="Content-Security-Policy" content="${CSP}" />`),
});

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// GitHub Pages answers unknown paths with 404.html, so search engines would see every inner page as "not found".
// Writing a copy of index.html for each page (gallery.html, …) makes those URLs real files that answer
// 200, each with its own title, description and canonical link. The sitemap is generated from the same list.
const pageCopies = (): Plugin => {
  let outDir = "dist";
  return {
    name: "page-copies",
    apply: "build",
    configResolved: (config) => {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle: () => {
      const template = readFileSync(join(outDir, "index.html"), "utf8");
      for (const page of PAGES) {
        const url = SITE + page.path;
        const html = template
          .replace(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(page.description)}`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(page.title)}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(page.description)}`)
          .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`);
        // gallery.html rather than gallery/index.html: GitHub Pages serves /gallery from it without redirecting to /gallery/.
        const file = page.path === "/" ? join(outDir, "index.html") : join(outDir, `${page.path}.html`);
        mkdirSync(dirname(file), { recursive: true });
        writeFileSync(file, html);
      }
      const urls = PAGES.map((p) => `  <url><loc>${SITE}${p.path}</loc></url>`).join("\n");
      writeFileSync(
        join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
    },
  };
};

export default defineConfig({
  plugins: [react(), securityHeaders(), pageCopies()],
  // Lets a Cloudflare quick tunnel serve the dev preview for review links.
  server: { allowedHosts: [".trycloudflare.com"] },
});
