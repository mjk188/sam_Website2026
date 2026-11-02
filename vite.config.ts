import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

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

export default defineConfig({
  plugins: [react(), securityHeaders()],
  // Lets a Cloudflare quick tunnel serve the dev preview for review links.
  server: { allowedHosts: [".trycloudflare.com"] },
});
