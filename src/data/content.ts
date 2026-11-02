export const HOME_STREAMS = [
  {
    title: "Preservation of Tangible & Intangible Heritage",
    body: "Safeguarding monuments, historic structures, crafts, oral traditions, performing arts, folklore and indigenous knowledge systems.",
  },
  {
    title: "Research & Documentation",
    body: "Surveys, archives and publications on culture, conservation, community and oral history — across written, visual and audio media.",
  },
  {
    title: "Heritage Education & Capacity Building",
    body: "Short courses, training, workshops and awareness campaigns on heritage, conservation practice and traditional knowledge.",
  },
  {
    title: "Curation & Experiential Learning",
    body: "Designing heritage walks, cultural trails, site visits and immersive interpretation programmes that bring places to life.",
  },
  {
    title: "Community Engagement & Culture-Led Development",
    body: "Inclusive platforms for artists, scholars and communities — using culture for social inclusion, identity and skill building.",
  },
  {
    title: "Collaboration & Knowledge Networks",
    body: "Partnerships with institutions, museums, archives, government, CSR foundations and community groups — in India and abroad.",
  },
];

export const PILLARS = [
  {
    deva: "संस्कृति",
    title: "Culture",
    image: "p168",
    body: "Traditions, Crafts, Festivals, Performing arts and Material Heritage explored as a living entity not artefact.",
  },
  {
    deva: "संवाद",
    title: "Conversations",
    image: "p17",
    body: "Heritage walks, dialogues and curated programmes that connect scholars, practitioners and the wider public.",
  },
  {
    deva: "संरक्षण",
    title: "Conservation",
    image: "p56",
    body: "Hands-on conservation, documentation and research that protect tangible and intangible carriers of our past.",
  },
];

export const ACTIVITIES = [
  {
    title: "Preservation of Tangible & Intangible Heritage",
    body: "Initiatives for the promotion, safeguarding and conservation of monuments, historic structures, traditional crafts, oral traditions, performing arts, folklore and indigenous knowledge systems.",
  },
  {
    title: "Research & Documentation",
    body: "Surveys, documentation and archives on culture, heritage, conservation, community and oral history — across written, visual and audio media — and their publication.",
  },
  {
    title: "Integrated Sustainability Programmes",
    body: "Programmes that promote integrated approaches to sustainable development on the social, economic and environmental pillars, using culture and its attributes.",
  },
  {
    title: "Heritage Education & Capacity Building",
    body: "Short-term courses, training programmes, workshops, lectures and awareness campaigns on cultural heritage, conservation practice, traditional knowledge systems and heritage management.",
  },
  {
    title: "Curation, Interpretation & Experiential Learning",
    body: "Curated campaigns, heritage walks, cultural trails, site visits, immersive learning experiences and interpretation programmes.",
  },
  {
    title: "Community Awareness, Engagement & Participation",
    body: "Inclusive platforms that engage artists, scholars, students, practitioners and local communities through events, discussions, exhibitions, storytelling and public programmes.",
  },
  {
    title: "Culture-Led Development",
    body: "Using culture and heritage as tools for local growth, social inclusion, identity building, community participation and skill development.",
  },
  {
    title: "Collaboration & Knowledge Networks",
    body: "Partnerships with educational institutions, cultural organisations, museums, archives, government agencies, conservation professionals, community groups and CSR foundations — nationally and internationally.",
  },
];

export type Walk = {
  image: string;
  /** Poster shown in the walk view; also the card cover unless `cover` is set. */
  poster?: string;
  /** Square card cover, for when the poster isn't square. */
  cover?: string;
  /** Longer description shown only in the walk view. */
  details?: string;
  /** Instagram reels shown in the walk view, by reel id (instagram.com/reel/<id>). */
  videos?: { id: string; title: string; cover: string }[];
  /** Photo ids from src/data/photos.ts, shown on hover and inside the walk view. */
  photos: string[];
  type: string;
  typeColor: string;
  place: string;
  title: string;
  deva: string;
  body: string;
};

export const EVENTS: Walk[] = [
  {
    image: "/images/photos/p50.jpg",
    poster: "/images/walks/quwwat-e-qutub.jpg",
    photos: ["p07", "p22", "p50", "p55", "p51", "p26", "p20"],
    type: "Evening Walk",
    typeColor: "text-maroon",
    place: "Mehrauli, Delhi",
    title: "Quwwat-e-Qutub",
    deva: "कुव्वत-ऐ-कुतुब",
    body: "An evening walk tracing the precinct and its landscape.",
  },
  {
    image: "/images/walks/sunder-nursery.jpg",
    poster: "/images/walks/sunder-nursery.jpg",
    photos: ["p156", "p151", "p153", "p154", "p155", "p158"],
    type: "Heritage Walk",
    typeColor: "text-teal",
    place: "Nizamuddin, Delhi",
    title: "Sunder Nursery",
    deva: "सुंदर नर्सरी",
    body: "A walk through time.",
  },
  {
    image: "/images/walks/safdarjung-tomb.jpg",
    poster: "/images/walks/safdarjung-tomb.jpg",
    photos: ["p88", "p90", "p85", "p86", "p89", "p91"],
    type: "Heritage Walk",
    typeColor: "text-teal",
    place: "Delhi",
    title: "Safdarjung Tomb",
    deva: "सफ़दरजंग का मक़बरा",
    body: "From Imperial Fall to Provincial Rise.",
  },
  {
    image: "/images/photos/p102.jpg",
    poster: "/images/walks/peepal-ki-chhanv-mein.jpg",
    cover: "/images/walks/peepal-square.jpg",
    videos: [
      { id: "DLcfKz1PzuB", title: "Showreel", cover: "p111" },
      { id: "DL_Hz1pB3DZ", title: "The after movie", cover: "p112" },
      { id: "DLNCYulvZsQ", title: "A standing ovation at Akshara", cover: "p106" },
      { id: "DKmQeuQPG7b", title: "The announcement", cover: "p102" },
    ],
    photos: ["p101", "p111", "p112", "p113", "p110", "p103", "p105", "p106", "p107"],
    type: "Theatre",
    typeColor: "text-maroon",
    place: "Akshara Theatre, New Delhi",
    title: "Peepal ki Chhanv Mein",
    deva: "पीपल की छाँव में",
    body: "Three stories by Premchand and Bhisham Sahni, under one tree.",
    details:
      "Premchand's Gulli Danda and Bade Bhai Sahab, and Bhisham Sahni's Dholak. Four siblings play, quarrel and dream in the shade of a peepal, and grow up into people who remember it differently. Staged with Abhimanch Theatre on 21 June 2025 at Akshara Theatre, New Delhi, with live music; the first show was performed for children from Salaam Baalak Trust.",
  },
  {
    image: "/images/walks/hauz-e-khas.jpg",
    poster: "/images/walks/hauz-e-khas.jpg",
    photos: ["p121", "p128", "p123", "p126", "p125", "p127"],
    type: "Heritage Walk",
    typeColor: "text-teal",
    place: "Hauz Khas, Delhi",
    title: "Hauz-e-Khas",
    deva: "हौज़-ए-ख़ास",
    body: "Beyond the Urban Village.",
    details: "Heritage Walk · 20 September 2026, 10:30 AM.",
  },
  {
    image: "/images/walks/gardens-of-paradise.jpg",
    poster: "/images/walks/gardens-of-paradise.jpg",
    photos: ["p143", "p136", "p135", "p133", "p140", "p142", "p138", "p139"],
    type: "Heritage Walk",
    typeColor: "text-teal",
    place: "Lodhi Garden, Delhi",
    title: "Gardens of Paradise",
    deva: "लोधी गार्डन",
    body: "Exploring Lodhi Gardens, its architecture and afterlife.",
  },
  {
    image: "/images/walks/humayuns-tomb.jpg",
    poster: "/images/walks/humayuns-tomb.jpg",
    photos: ["p199", "p193", "p195", "p194", "p197", "p196", "p198"],
    type: "Heritage Walk",
    typeColor: "text-teal",
    place: "Nizamuddin, Delhi",
    title: "Humayun's Tomb",
    deva: "हुमायूँ का मक़बरा",
    body: "Tombs, traditions and tales through time.",
  },
  {
    image: "/images/walks/qalb-e-sufiya.jpg",
    poster: "/images/walks/qalb-e-sufiya.jpg",
    photos: ["p200", "p203", "p202", "p201", "p60", "p63", "p57", "p14", "p61", "p39", "p41", "p42", "p40"],
    type: "Heritage Walk",
    typeColor: "text-teal",
    place: "Nizamuddin, Delhi",
    title: "Qalb-e-Sufiya",
    deva: "क़ल्ब-ए-सूफ़िया",
    body: "Rediscovering the spiritual mosaic of Nizamuddin Dargah.",
  },
  {
    image: "/images/walks/kingsway-to-kartavyapath.jpg",
    poster: "/images/walks/kingsway-to-kartavyapath.jpg",
    photos: ["p208", "p207", "p205", "p204", "p206", "p209"],
    type: "Heritage Walk",
    typeColor: "text-teal",
    place: "Central Vista, New Delhi",
    title: "Kingsway to Kartavyapath",
    deva: "किंग्सवे से कर्तव्य पथ",
    body: "Tracing the beacon of change then and now.",
  },
];

export const COLLAB_TYPES = [
  {
    title: "Joint research & documentation",
    body: "Co-led surveys, oral-history archives and publications on heritage, conservation and community.",
  },
  {
    title: "Co-curated walks & programmes",
    body: "Heritage walks, cultural trails and interpretation programmes designed with partner institutions.",
  },
  {
    title: "Exhibitions & public programmes",
    body: "Storytelling sessions, discussions and exhibitions that bring research and craft to wider publics.",
  },
  {
    title: "Capacity building & training",
    body: "Short courses, workshops and lectures for students, professionals and community practitioners.",
  },
];

export const PARTNERS = [
  "Educational institutions & universities",
  "Cultural organisations and foundations",
  "Museums and archives",
  "Government agencies",
  "Conservation professionals & studios",
  "Community groups and local stewards",
  "CSR foundations",
];

export const SPONSOR_OPTIONS = [
  {
    title: "A walk series",
    body: "Underwrite a season of curated heritage walks open to students, residents and the wider public.",
  },
  {
    title: "A documentation project",
    body: "Support oral-history, photographic or archival documentation of a craft, community or monument.",
  },
  {
    title: "A workshop cohort",
    body: "Fund a workshop in conservation practice, traditional craft or heritage education for a cohort of participants.",
  },
  {
    title: "A publication",
    body: "Back a research publication, zine or interpretive guide that brings our work to wider readers.",
  },
];

export const DONATION_AREAS = [
  {
    title: "Conservation initiatives",
    body: "Lime, earth and masonry work on monuments and historic structures, alongside training for young conservation professionals.",
  },
  {
    title: "Community programmes",
    body: "Heritage walks, dialogues, exhibitions and storytelling sessions that keep traditions in active circulation.",
  },
  {
    title: "Scholarships & education",
    body: "Workshop and course fees for students, artisans and community members who could not otherwise attend.",
  },
];
