type Props = { size?: "sm" | "lg" };

/** Sun-over-स mark, a "।" divider, then "Saṃ" with the maroon anusvara dot under the m. */
export default function Wordmark({ size = "sm" }: Props) {
  const big = size === "lg";
  return (
    <span className={`inline-flex items-center ${big ? "gap-4" : "gap-2.5"}`}>
      <svg
        viewBox="4.5 0 22 40"
        className={big ? "h-[114px] w-[62px]" : "h-[74px] w-[40px]"}
        aria-hidden
      >
        <circle cx="15.5" cy="12.5" r="5" fill="#8a2a1b" />
        <text x="15" y="39.5" textAnchor="middle" fontFamily="'Kurale', serif" fontSize="31" fill="#1c1917">
          स
        </text>
      </svg>
      {/* Shifted down so the divider and "Saṃ" centre on the स rather than on the whole sun-and-स mark. */}
      <span className={`inline-flex items-center ${big ? "translate-y-[23px] gap-[18px]" : "translate-y-[15px] gap-3"}`}>
      <span aria-hidden className={`w-[2px] bg-muted/80 ${big ? "h-[56px]" : "h-[36px]"}`} />
      <span className={`whitespace-nowrap font-serif leading-none text-ink ${big ? "text-[73px]" : "text-[47px]"}`}>
        Sa
        <span className="relative">
          m
          <span
            aria-hidden
            className="absolute bottom-[-0.2em] left-1/2 h-[0.25em] w-[0.25em] -translate-x-1/2 rounded-full bg-maroon"
          />
        </span>
      </span>
      </span>
    </span>
  );
}
