// Icons resolve via utils/skill-icon.js; anything without an icon renders as a plain chip.
export const skillGroups = [
  { label: "Frontend", items: ["React", "Next.js", "React Native", "Angular", "TypeScript", "Tailwind CSS", "Material UI", "Tamagui", "Redux", "Zustand"] },
  { label: "Backend", items: ["Node.js", "Express", "tRPC", "Python", "FastAPI", ".NET", "GraphQL", "Socket.IO", "Prisma", "Drizzle ORM"] },
  { label: "AI / ML", items: ["LLM pipelines", "RAG", "Multi-agent systems", "Vision-language models", "Gemini / GPT / Groq", "NMT (NLLB-200, Opus-MT)", "MBR decoding", "LLM-as-judge", "PyTorch"] },
  { label: "Accessibility", items: ["WCAG 2.2", "Section 508", "European Accessibility Act", "Testaro", "ANDI", "DevTools a11y tree", "Playwright", "APCA research"] },
  { label: "Voice & automation", items: ["Retell", "Vapi", "Bland", "Twilio", "GoHighLevel"] },
  { label: "Data & cloud", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "AWS", "Docker", "Tailscale", "Linux / WSL"] },
];
