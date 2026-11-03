/** Photos in the home page slideshow, in order. They are kept out of the Gallery so nothing repeats. */
// A slide can also be a short silent clip: { id: "p26", video: "/videos/qutub-dusk.mp4" }.
// `id` is still required; its photo is the poster shown while the clip loads.
// `focus` sets which part of a photo stays in view when the frame crops it (CSS object-position).
export type Slide = { id: string; caption: string; video?: string; focus?: string };

export const HOME_SLIDES: Slide[] = [
  { id: "p167", caption: "A weaver at her loom" },
  { id: "p181", caption: "Walkers reading an old wall" },
  { id: "p182", caption: "Sorting marigolds for Basant" },
  { id: "p183", caption: "A ruined gateway" },
  { id: "p184", caption: "In a ruined passage" },
  { id: "p185", caption: "At a sandstone gateway" },
  { id: "p186", caption: "Threads of prayer" },
  { id: "p187", caption: "Looking up at the Qutub Minar" },
  { id: "p162", caption: "A bamboo kitchen" },
  { id: "p188", caption: "Flower seller, Nizamuddin Basti" },
  { id: "p189", caption: "A hand on the jaali" },
  { id: "p190", caption: "History is fun" },
  { id: "p191", caption: "On the steps of a gateway" },
  { id: "p192", caption: "Reading carved stone at night" },
];

/**
 * Photos used as one-off features on other pages (About strip, Collaborate, Sponsor, the home pillars).
 * Like the slideshow, these stay out of the Gallery, walk photo sets and the film so each appears once.
 */
export const FEATURED_IDS = ["p13", "p64", "p166", "p23", "p171", "p168", "p17", "p56"];
