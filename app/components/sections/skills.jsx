import { skillGroups } from "@/utils/data/skills";
import Chips from "../ui/chips";
import Reveal from "../ui/reveal";
import Section from "../ui/section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="The toolkit, grouped by the job it does."
      intro="Frontend by training, full stack by necessity, AI and accessibility by choice."
    >
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.label} delay={(i % 3) * 60}>
            <div className="rule pt-4">
              <h3 className="flex items-baseline justify-between">
                <span className="font-medium">{g.label}</span>
                <span className="font-mono text-xs tabular-nums text-muted">{g.items.length}</span>
              </h3>
              <Chips items={g.items} icons label={g.label} className="mt-4" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
