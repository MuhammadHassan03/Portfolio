import { timeConverter } from "@/utils/time-converter";
import { HiArrowUpRight } from "react-icons/hi2";

export default function PostCard({ post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noreferrer"
      className="rule group flex h-full flex-col py-6 transition-colors hover:text-accent"
    >
      <p className="font-mono text-xs text-muted">
        {timeConverter(post.published_at)} · {post.reading_time_minutes} min
      </p>
      <h3 className="mt-3 font-serif text-2xl leading-tight">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">{post.description}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm">
        Read on dev.to <HiArrowUpRight size={14} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
