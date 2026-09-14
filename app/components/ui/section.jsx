import { chapterNumber } from "@/utils/chapters";
import Reveal from "./reveal";

// Every chapter shares this frame: numbered rule, eyebrow, serif title, optional intro, then content.
export default function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`container-site scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Reveal>
        <div className="rule flex items-baseline justify-between gap-4 pt-4">
          <p className="eyebrow">{eyebrow}</p>
          <p className="font-mono text-xs tabular-nums text-muted">{chapterNumber(id)}</p>
        </div>
        <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-12">
          <h2 className="display text-4xl sm:text-5xl lg:col-span-7">{title}</h2>
          {intro && <p className="text-lg leading-relaxed text-muted lg:col-span-5 lg:pt-2">{intro}</p>}
        </div>
      </Reveal>
      <div className="mt-12 sm:mt-16">{children}</div>
    </section>
  );
}
