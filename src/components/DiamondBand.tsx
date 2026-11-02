/** Repeating diamond-and-dot motif used above the footer. */
export default function DiamondBand() {
  return (
    <div className="border-y border-line py-1 md:py-2" aria-hidden>
      {/* On phones the whole band is scaled down, so the diamonds shrink instead of being clipped. */}
      <div className="h-[40px] overflow-hidden md:h-[64px]">
      <svg className="block h-[64px] w-[160%] origin-top-left scale-[0.625] md:w-full md:scale-100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diamonds" width="91" height="64" patternUnits="userSpaceOnUse" x="-9">
            <path d="M45.5 6 L82 32 L45.5 58 L9 32 Z" fill="none" stroke="#8a2a1b" strokeWidth="1.6" />
            <circle cx="45.5" cy="32" r="4" fill="#8a2a1b" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamonds)" />
      </svg>
      </div>
    </div>
  );
}
