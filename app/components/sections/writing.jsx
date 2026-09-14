import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import Reveal from "../ui/reveal";
import Section from "../ui/section";
import PostCard from "./post-card";

export default function Writing({ posts }) {
  if (!posts?.length) return null;
  return (
    <Section id="writing" eyebrow="Writing" title="Notes I publish as I learn.">
      <div className="grid gap-x-10 md:grid-cols-3">
        {posts.slice(0, 3).map((p, i) => (
          <Reveal key={p.id} delay={i * 60}>
            <PostCard post={p} />
          </Reveal>
        ))}
      </div>
      <Link href="/blog" className="btn-ghost mt-10">
        All posts <HiArrowRight size={16} aria-hidden />
      </Link>
    </Section>
  );
}
