import { personalData } from "@/utils/data/personal-data";
import SocialLinks from "./ui/social-links";

export default function Footer() {
  return (
    <footer className="rule">
      <div className="container-site flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-lg">
            {personalData.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            © {new Date().getFullYear()} · {personalData.location}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <SocialLinks />
          <a href={`mailto:${personalData.email}`} className="link text-sm text-muted">
            {personalData.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
