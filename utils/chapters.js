// Single source of truth for page flow: nav links, chapter rail and section numbering all read this.
export const chapters = [
  { id: "services", label: "What I do" },
  { id: "work", label: "Case studies" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "writing", label: "Writing" },
  { id: "hire", label: "Hire me" },
];

export const chapterNumber = (id) => String(chapters.findIndex((c) => c.id === id) + 1).padStart(2, "0");
