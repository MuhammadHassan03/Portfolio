"use client";
import { chapters } from "@/utils/chapters";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMiniBars2, HiMiniXMark } from "react-icons/hi2";

const links = chapters.filter((c) => c.id !== "hire").map((c) => ({ href: `/#${c.id}`, label: c.label }));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-paper/85 shadow-[0_1px_0_rgb(var(--ink)/0.12)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" onClick={close} className="font-serif text-lg tracking-tight">
          {personalData.name}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link href="/#hire" className="btn-primary !min-h-9 !px-4">
              Hire me
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiMiniXMark size={24} /> : <HiMiniBars2 size={24} />}
        </button>
      </nav>

      <div id="mobile-menu" hidden={!open} className="rule bg-paper md:hidden">
        <ul className="container-site flex flex-col py-4">
          {links.map((l, i) => (
            <li key={l.href} className="rule first:border-0">
              <Link href={l.href} onClick={close} className="flex items-baseline gap-4 py-3 font-serif text-2xl">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link href="/#hire" onClick={close} className="btn-primary w-full">
              Hire me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
