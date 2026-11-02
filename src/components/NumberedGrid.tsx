type Item = { title: string; body: string };

const DOTS = ["bg-ink", "bg-teal", "bg-ink", "bg-maroon", "bg-teal", "bg-ink"];

/** Bordered card grid with "01"-style indices, used for streams of work and sponsorship options. */
export default function NumberedGrid({
  items,
  cols,
  dots = false,
  size = "md",
  titlesOnly = false,
}: {
  items: Item[];
  cols: 2 | 3 | 4;
  dots?: boolean;
  size?: "md" | "lg";
  titlesOnly?: boolean;
}) {
  const colClass = { 2: "grid-cols-2", 3: "grid-cols-2 lg:grid-cols-3", 4: "grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={`grid border-l border-t border-line ${colClass}`}>
      {items.map((item, i) => (
        <article
          key={item.title}
          className={`relative border-b border-r border-line ${size === "lg" ? "p-3.5 md:p-12" : "p-3.5 md:p-9"}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.2em] text-faint md:text-[13px]">{String(i + 1).padStart(2, "0")}</span>
            {dots && <span className={`h-1 w-1 rounded-full ${DOTS[i % DOTS.length]}`} />}
          </div>
          <h3
            className={`mt-1.5 font-serif text-[14px] font-normal leading-snug text-ink md:mt-5 ${size === "lg" ? "md:text-[26px]" : "md:text-[22px]"}`}
          >
            {item.title}
          </h3>
          {!titlesOnly && (
            <p className={`mt-2 text-[12.5px] leading-[1.5] text-muted md:mt-4 md:leading-[1.75] ${size === "lg" ? "md:text-base" : "md:text-[17px]"}`}>{item.body}</p>
          )}
        </article>
      ))}
    </div>
  );
}
