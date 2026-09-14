import { personalData } from "@/utils/data/personal-data";
import { FaGithub, FaLinkedinIn, FaStackOverflow, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const links = [
  { href: personalData.github, label: "GitHub", Icon: FaGithub },
  { href: personalData.linkedIn, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: personalData.twitter, label: "X (Twitter)", Icon: FaXTwitter },
  { href: personalData.stackOverflow, label: "Stack Overflow", Icon: FaStackOverflow },
  { href: personalData.leetcode, label: "LeetCode", Icon: SiLeetcode },
];

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-muted transition-colors duration-200 hover:border-ink hover:text-ink"
          >
            <Icon size={17} />
          </a>
        </li>
      ))}
    </ul>
  );
}
