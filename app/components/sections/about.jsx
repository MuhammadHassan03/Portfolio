import { certifications, educations } from "@/utils/data/educations";
import { personalData } from "@/utils/data/personal-data";
import { research } from "@/utils/data/projects-data";
import Reveal from "../ui/reveal";
import Section from "../ui/section";

function List({ heading, items, render }) {
  return (
    <div>
      <h3 className="eyebrow">{heading}</h3>
      <ul className="mt-4 divide-y divide-ink/10">
        {items.map((it) => (
          <li key={it.id} className="py-3">
            {render(it)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Self-taught first, degree second, certified third.">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="text-lg leading-relaxed text-muted">{personalData.description}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            I started writing code in 2021 and have not stopped. Outside client work I read accessibility
            standards for fun, solve LeetCode problems, answer questions on Stack Overflow and write about what I
            learn.
          </p>
          <div className="mt-10">
            <List
              heading="Research"
              items={research}
              render={(r) => (
                <>
                  <p className="font-medium">
                    {r.title} <span className="font-mono text-xs text-muted">· {r.year}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{r.summary}</p>
                </>
              )}
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="space-y-10 lg:col-span-5 lg:col-start-8">
          <List
            heading="Certifications"
            items={certifications}
            render={(c) => (
              <>
                <p className="font-medium">{c.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {c.issuer}
                  {c.year && ` · ${c.year}`}
                </p>
              </>
            )}
          />
          <List
            heading="Education"
            items={educations}
            render={(e) => (
              <div className="grid grid-cols-[6.5rem_1fr] gap-3">
                <p className="font-mono text-xs tabular-nums text-muted pt-1">{e.duration}</p>
                <div>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-muted">{e.institution}</p>
                </div>
              </div>
            )}
          />
        </Reveal>
      </div>
    </Section>
  );
}
