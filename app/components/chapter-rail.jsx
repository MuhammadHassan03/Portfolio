"use client";
import { chapters } from "@/utils/chapters";
import { useEffect, useState } from "react";

// Fixed left rail on wide screens showing where the reader is in the page flow.
export default function ChapterRail() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.1, 0.5] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Chapters" className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 2xl:block">
      <ol className="space-y-3">
        {chapters.map((c, i) => {
          const on = active === c.id;
          return (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className={`group flex items-center gap-3 font-mono text-[11px] transition-colors ${on ? "text-ink" : "text-muted/70 hover:text-ink"}`}
              >
                <span className={`h-px transition-all duration-300 ${on ? "w-8 bg-accent" : "w-4 bg-current"}`} />
                <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className={`transition-opacity ${on ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>{c.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
