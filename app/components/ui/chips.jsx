import { skillIcon } from "@/utils/skill-icon";
import Image from "next/image";

export default function Chips({ items, label = "Tools", icons = false, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label={label}>
      {items.map((t) => {
        const src = icons ? skillIcon(t) : null;
        return (
          <li key={t} className="chip">
            {src && <Image src={src} alt="" width={12} height={12} className="h-3 w-3" />}
            {t}
          </li>
        );
      })}
    </ul>
  );
}
