// Title and search-result description for each page. The build writes a copy of index.html per page with these
// (so each URL answers 200 with its own title and canonical link) and generates sitemap.xml from this list.
export type Page = { path: string; title: string; description: string };

const SUFFIX = " | Sam Foundation";

export const PAGES: Page[] = [
  {
    path: "/",
    title: "Sam Foundation — A Collective Confluence",
    description:
      "Sam (सम्) is a multifaceted heritage collective — Sanskriti · Samvad · Sanrakshan. Culture, conversations and conservation across India and beyond.",
  },
  {
    path: "/about",
    title: "About Us" + SUFFIX,
    description:
      "Sam Foundation works at the confluence of heritage, community and contemporary practice, connecting culture, conversations and conservation across India and beyond.",
  },
  {
    path: "/gallery",
    title: "Gallery" + SUFFIX,
    description: "Glimpses from our work and visits: places, people and time in motion.",
  },
  {
    path: "/get-involved/attend",
    title: "Attend an Event: संवाद Samvaad" + SUFFIX,
    description: "Curated walks and experiences: exclusively curated walks, workshops and dialogues across India and beyond.",
  },
  {
    path: "/get-involved/collaborate",
    title: "Collaborate" + SUFFIX,
    description:
      "We work with institutions, professionals and community groups to strengthen heritage education, conservation and public engagement in India and internationally.",
  },
  {
    path: "/get-involved/sponsor",
    title: "Sponsor & Contribute" + SUFFIX,
    description:
      "Align your support with culture and conservation. Sponsorship connects organisations and CSR foundations with heritage, with documentation and reporting.",
  },
  {
    path: "/join",
    title: "Join the Collective" + SUFFIX,
    description:
      "Work with us, build with us: full-time, part-time, fellowship and internship roles for people who care about culture and heritage.",
  },
  {
    path: "/contact",
    title: "Contact Us" + SUFFIX,
    description:
      "Attend a walk, propose a collaboration, sponsor a programme or simply say hello. We'd love to hear from you.",
  },
  {
    path: "/terms",
    title: "Terms of Use & Copyright" + SUFFIX,
    description: "Terms of use and copyright notice for the Sam Foundation website and all its content.",
  },
];

export const pageFor = (path: string) => PAGES.find((p) => p.path === path.replace(/\/+$/, "") || p.path === path);
