// Case studies. `problem` / `built` / `result` are what clients read; keep each to one or two sentences.
export const projectsData = [
  {
    id: 1,
    name: "AI-enhanced WCAG rule engine",
    client: "YRA Tech",
    role: "Lead engineer",
    year: "2025 — 26",
    problem:
      "Testaro's accessibility rules flag issues but cannot say how severe they are or how to fix them safely.",
    built:
      "Reimplemented rules such as titledEl, nonTable, allCaps and language-of-parts as Python APIs where a model classifies severity, picks a fix from a closed vocabulary and explains itself, while deterministic patchers and a verification oracle handle auto-remediation. Shadow-mode runner plus a thin Node.js client over JSON stdio.",
    result: "Rules now ship with explainable severity and safe, verified patches instead of raw flags.",
    tools: ["Python", "BeautifulSoup", "Gemini Flash", "Node.js", "Playwright", "pytest"],
    code: "",
    demo: "",
    private: true,
  },
  {
    id: 2,
    name: "Neural translation comparison tool",
    client: "YRA Tech",
    role: "Full stack / AI engineer",
    year: "2025",
    problem: "Choosing a machine-translation engine per language pair was guesswork.",
    built:
      "Two-way comparison of DeepL, Google Translate, NLLB-200 and Opus-MT with MBR decoding, LLM-as-judge scoring via Groq, word-level LCS diffs, back-translation confidence and a terminology glossary.",
    result: "Side-by-side, scored output that makes engine selection a data decision.",
    tools: ["Next.js 14", "TypeScript", "Python", "NLLB-200", "Opus-MT", "DeepL API", "Groq"],
    code: "",
    demo: "",
    private: true,
  },
  {
    id: 3,
    name: "Visual-semantic mismatch detection",
    client: "YRA Tech",
    role: "ML engineer",
    year: "2025",
    problem: "Pages can look fine while their accessibility tree tells screen readers something else entirely.",
    built:
      "Paired Chrome DevTools accessibility trees with page screenshots and vision-language models to detect where the visual and semantic layers disagree.",
    result: "A new class of defects surfaced that no rule-based checker catches.",
    tools: ["Python", "Chrome DevTools Protocol", "Qwen-VL", "Playwright"],
    code: "",
    demo: "",
    private: true,
  },
  {
    id: 4,
    name: "PackRat AI travel app",
    client: "Bierman Collective",
    role: "Full stack developer",
    year: "2024",
    problem: "A trip-planning product needed web, iOS and Android from one small team.",
    built:
      "Shared codebase across Next.js and React Native using Solito, tRPC and Drizzle ORM, Mapbox routing, Tamagui UI and Firebase auth.",
    result: "Live on both stores with 10K+ App Store users, operational across Europe.",
    tools: ["Next.js", "React Native", "tRPC", "Drizzle ORM", "MySQL", "Mapbox", "Tamagui"],
    code: "https://github.com/MuhammadHassan03/PackRat",
    demo: "https://packrat.world/",
  },
  {
    id: 5,
    name: "Devellp CRM platform",
    client: "Devellp",
    role: "Software engineer",
    year: "2024 — 25",
    problem: "A field-service startup needed a mobile CRM with payments, messaging and video built in.",
    built:
      "Owned the React Native app end to end alongside a .NET and Python microservices backend with Apple Pay, Twilio and Zeego integrations.",
    result: "Shipped and live on the US App Store.",
    tools: ["React Native", "TypeScript", ".NET", "Python", "MongoDB", "Apple Pay", "Twilio"],
    code: "",
    demo: "https://devellp.com/",
  },
  {
    id: 6,
    name: "Real-time chat",
    client: "Internee.pk",
    role: "Intern",
    year: "2023",
    problem: "Internship brief: one-to-one chat with proper auth.",
    built: "Express and MongoDB API, JWT authentication, Socket.IO transport, Chakra UI front end.",
    result: "Delivered within the internship window.",
    tools: ["React", "Express", "Socket.IO", "MongoDB", "JWT"],
    code: "",
    demo: "",
  },
];

export const research = [
  {
    id: 1,
    title: "Automated audio description for video",
    summary:
      "Ranked strategic recommendation for a training-free VLM-to-LLM pipeline, with a joint timing optimizer and on-screen-code triage as differentiators.",
    year: "2026",
  },
  {
    id: 2,
    title: "Perceived text contrast",
    summary: "Measuring human perception of text contrast to inform a next-generation contrast formula for WCAG.",
    year: "2026",
  },
];
