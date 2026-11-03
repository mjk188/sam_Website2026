import { COPYRIGHT_YEAR, ORG_NAME, SITE_DOMAIN } from "./site";

/** Short notice shown in the footer of every page. */
export const COPYRIGHT_NOTICE = `© ${COPYRIGHT_YEAR} ${ORG_NAME}. All rights reserved. Unauthorised use of any content on this site is strictly prohibited.`;

/** Terms of Use, shown at /terms. Each section is a heading and one or more paragraphs. */
export const TERMS: { title: string; body: string[] }[] = [
  {
    title: "1. Ownership",
    body: [
      `This website (${SITE_DOMAIN}) and all of its content, including without limitation all text, photographs, videos, audio, posters, illustrations, graphics, logos, layouts, design and source code, are the sole and exclusive property of ${ORG_NAME}. All content is protected by the Copyright Act, 1957 (India), the Trade Marks Act, 1999 (India) and applicable international copyright and intellectual property laws.`,
    ],
  },
  {
    title: "2. No licence granted",
    body: [
      `You may view the pages of this website in your browser for your own personal, non-commercial information only. No right, title, interest or licence in any content is transferred or granted to you by accessing this website. All rights not expressly granted are reserved by ${ORG_NAME}.`,
    ],
  },
  {
    title: "3. Prohibited use",
    body: [
      `Without the prior written permission of ${ORG_NAME}, you must not copy, download, save, screenshot for reuse, reproduce, republish, upload, post, transmit, frame, scrape, modify, adapt, translate, distribute, sell, license or otherwise use any content from this website, in whole or in part, by any means or in any medium. This includes use on social media, in print, on other websites, in presentations, and for training artificial intelligence or machine-learning systems.`,
      "Any such use is unauthorised and unlawful.",
    ],
  },
  {
    title: "4. Name, logo and marks",
    body: [
      `The names "${ORG_NAME}", "Sam", "सम्" and "सं", the logo and all related marks identify ${ORG_NAME} and may not be used in any manner that suggests affiliation with, sponsorship by or endorsement from ${ORG_NAME}, or that is likely to cause confusion.`,
    ],
  },
  {
    title: "5. Fraud and impersonation",
    body: [
      `${ORG_NAME} will never ask you for payments, donations, bank details or personal information except through the official channels listed on this website. Any website, account, message or person claiming to represent ${ORG_NAME} through other channels is not authorised. Please report suspected impersonation or fraud to us immediately.`,
    ],
  },
  {
    title: "6. Enforcement",
    body: [
      `Unauthorised use of any content constitutes infringement of ${ORG_NAME}'s rights under the Copyright Act, 1957, the Information Technology Act, 2000 and other applicable laws, and may result in civil and criminal proceedings, including injunctions, damages and costs. ${ORG_NAME} actively monitors for misuse and will enforce its rights to the fullest extent permitted by law.`,
    ],
  },
  {
    title: "7. Governing law",
    body: [
      "These terms are governed by the laws of India. Any dispute arising from them or from the use of this website is subject to the exclusive jurisdiction of the courts at New Delhi.",
    ],
  },
  {
    title: "8. Permissions and contact",
    body: [
      `To request permission to use any content, or to report misuse or impersonation, write to ${ORG_NAME} at the email address on our Contact page. By using this website you agree to these terms.`,
    ],
  },
];
