import { HiArrowUpRight } from "react-icons/hi2";

export default function ExternalLink({ href, children, className = "btn-ghost" }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
      <HiArrowUpRight size={14} aria-hidden />
    </a>
  );
}
