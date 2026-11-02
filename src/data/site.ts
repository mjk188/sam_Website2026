// Contact details are assembled at runtime so they never appear as plain strings in the source or HTML,
// which keeps them out of reach of most email and phone-number scrapers.
const join = (...parts: string[]) => parts.join("");
export const EMAIL = join("collective", "samm", String.fromCharCode(64), "gmail", ".", "com");
export const WHATSAPP_URL = join("https://wa.me/", "91", "95328", "35871");

export const ORG_NAME = "Sam Foundation";
export const SITE_DOMAIN = "samfoundation.in";
export const COPYRIGHT_YEAR = 2026;
export const TRIAD_DEVANAGARI = "संस्कृति · संवाद · संरक्षण";
export const TRIAD_ENGLISH = "Culture · Conversations · Conservation";

// Web3Forms access key (free, from web3forms.com, tied to EMAIL). While empty, the contact form falls back to mailto.
export const WEB3FORMS_KEY = "d7bfae8b-9e17-4b3d-989b-352b873cd345";

export const mailto = (subject: string, body = "") =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

/** Attend an Event has its own top-level tab; Get Involved covers the other ways to take part. */
export const ATTEND = { label: "Attend an Event", to: "/get-involved/attend" };

export const GET_INVOLVED = [
  { label: "Collaborate", short: "Collaborate", to: "/get-involved/collaborate" },
  { label: "Sponsor & Contribute", short: "Sponsor & Contribute", to: "/get-involved/sponsor" },
];

export const SOCIALS = [
  { label: "Instagram", handle: "@collectivesamm", href: "https://www.instagram.com/collectivesamm/" },
];
