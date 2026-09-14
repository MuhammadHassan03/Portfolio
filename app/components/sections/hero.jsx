import { personalData, proof } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi2";
import ExternalLink from "../ui/external-link";

export default function Hero() {
  return (
    <section className="container-site pt-10 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Statement */}
        <div className="animate-rise lg:col-span-8">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {personalData.availability}
          </p>
          <h1 className="display mt-6 text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Software that ships,
            <br />
            <em className="font-light italic text-muted">and holds up</em>
            <br />
            under audit.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            I am {personalData.name}, {personalData.designation}. {personalData.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#work" className="btn-primary">
              Read the case studies
              <HiArrowDown size={16} aria-hidden />
            </Link>
            <ExternalLink href={personalData.resume}>Résumé</ExternalLink>
          </div>
        </div>

        {/* Portrait: pale-blue wash echoes the photo's own background so it sits on the page instead of in a box. */}
        <div className="animate-rise lg:col-span-4" style={{ animationDelay: "120ms" }}>
          <figure className="mx-auto w-full max-w-xs lg:ml-auto lg:max-w-none">
            <div className="overflow-hidden rounded-[2rem] bg-wash">
              <Image
                src={personalData.profile}
                alt={`Portrait of ${personalData.name}`}
                width={825}
                height={1063}
                priority
                sizes="(min-width: 1024px) 24rem, 20rem"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[11px] text-muted">
              <span>{personalData.location}</span>
              <span>UTC+5</span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Proof strip */}
      <dl className="rule mt-16 grid grid-cols-2 gap-x-6 gap-y-8 pt-8 sm:mt-24 lg:grid-cols-4">
        {proof.map((p) => (
          <div key={p.label}>
            <dd className="display text-4xl tabular-nums sm:text-5xl">{p.value}</dd>
            <dt className="mt-2 text-sm text-muted">{p.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
