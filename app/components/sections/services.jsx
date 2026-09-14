import { services } from "@/utils/data/personal-data";
import Chips from "../ui/chips";
import Reveal from "../ui/reveal";
import Section from "../ui/section";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I do"
      title="Three things I am hired for."
      intro="Each one comes with the same habit: measurable outcomes, tests you can run, and documentation your team will actually read."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80} className="bg-paper">
            <article className="flex h-full flex-col p-6 sm:p-8">
              <p className="font-mono text-xs text-muted">0{i + 1}</p>
              <h3 className="mt-6 font-serif text-2xl leading-tight">{s.title}</h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">{s.body}</p>
              <Chips items={s.stack} label="Stack" className="mt-6" />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
