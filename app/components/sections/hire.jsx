import { personalData, process } from "@/utils/data/personal-data";
import Reveal from "../ui/reveal";
import Section from "../ui/section";
import SocialLinks from "../ui/social-links";
import ContactForm from "./contact-form";

export default function Hire() {
  return (
    <Section
      id="hire"
      eyebrow="Hire me"
      title="Here is exactly what happens next."
      intro={`${personalData.availability}. Tell me about the product and I will come back with a written plan, not a sales call.`}
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <ol className="space-y-6">
            {process.map((p) => (
              <li key={p.step} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="font-mono text-xs tabular-nums text-accent pt-1">{p.step}</span>
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="rule mt-10 pt-6 text-sm text-muted">
            <p>
              Prefer email?{" "}
              <a href={`mailto:${personalData.email}`} className="link text-ink">
                {personalData.email}
              </a>
            </p>
            <SocialLinks className="mt-5" />
          </div>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
