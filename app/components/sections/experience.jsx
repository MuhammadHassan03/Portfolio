import { experiences } from "@/utils/data/experience";
import Reveal from "../ui/reveal";
import Section from "../ui/section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Three years, all remote, all US clients.">
      <ol>
        {experiences.map((job, i) => (
          <Reveal key={job.id}>
            <li className="rule grid gap-4 py-8 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <p className="font-mono text-xs tabular-nums text-muted sm:pt-1.5">
                {job.start}
                <br className="hidden sm:block" /> <span className="sm:hidden">—</span> {job.end}
              </p>
              <div>
                <h3 className="text-xl font-medium leading-snug">
                  {job.title}{" "}
                  <span className="text-muted">
                    ·{" "}
                    {job.link ? (
                      <a href={job.link} target="_blank" rel="noreferrer" className="link">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </span>
                </h3>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
                {job.highlights.length > 0 && (
                  <ul className="mt-4 max-w-3xl space-y-2 text-[15px] leading-relaxed text-muted">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
