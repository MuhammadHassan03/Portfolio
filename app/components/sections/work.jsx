import { projectsData } from "@/utils/data/projects-data";
import { FaGithub } from "react-icons/fa6";
import Chips from "../ui/chips";
import ExternalLink from "../ui/external-link";
import Reveal from "../ui/reveal";
import Section from "../ui/section";

// Problem → Built → Result. Same three labels on every study so a client can skim the column.
const rows = [
  ["Problem", "problem"],
  ["Built", "built"],
  ["Result", "result"],
];

function CaseStudy({ project, index }) {
  return (
    <article className="rule grid gap-6 py-10 sm:py-12 lg:grid-cols-12 lg:gap-10">
      <header className="lg:col-span-4">
        <p className="font-mono text-xs tabular-nums text-muted">
          {String(index + 1).padStart(2, "0")} · {project.year}
        </p>
        <h3 className="display mt-3 text-3xl sm:text-4xl">{project.name}</h3>
        <p className="mt-3 text-sm text-muted">
          {project.client} · {project.role}
        </p>
        {project.private && (
          <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Internal product, details on request
          </p>
        )}
      </header>

      <dl className="space-y-5 lg:col-span-6">
        {rows.map(([label, key]) => (
          <div key={key} className="grid grid-cols-[5.5rem_1fr] gap-4">
            <dt className="eyebrow pt-1">{label}</dt>
            <dd className={`leading-relaxed ${key === "result" ? "font-medium text-ink" : "text-muted"}`}>{project[key]}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-5 lg:col-span-2 lg:items-end">
        <Chips items={project.tools} className="lg:justify-end" />
        {(project.demo || project.code) && (
          <div className="flex flex-wrap gap-2">
            {project.demo && (
              <ExternalLink href={project.demo} className="btn-ghost !min-h-10 !px-4 text-xs">
                Live
              </ExternalLink>
            )}
            {project.code && (
              <ExternalLink href={project.code} className="btn-ghost !min-h-10 !px-4 text-xs">
                <FaGithub size={13} aria-hidden /> Source
              </ExternalLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="Case studies"
      title="Work, written the way a client reads it."
      intro="Problem first, then what I built, then what changed. No screenshots of dashboards you cannot log in to."
    >
      <div>
        {projectsData.map((p, i) => (
          <Reveal key={p.id}>
            <CaseStudy project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
