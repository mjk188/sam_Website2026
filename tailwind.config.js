/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1917",
        muted: "#4f4946",
        faint: "#77706c",
        maroon: { DEFAULT: "#8a2a1b", dark: "#6f2015" },
        teal: { DEFAULT: "#1f6f7d", bright: "#2a8ea0", deep: "#17565f" },
        mist: "#f7f6f4",
        line: "#e7e3df",
        blush: "#f7efec",
        moss: "#3d6b45",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        deva: ['"Tiro Devanagari Hindi"', '"Noto Serif Devanagari"', "serif"],
      },
      maxWidth: { site: "1240px" },
    },
  },
  plugins: [],
};
