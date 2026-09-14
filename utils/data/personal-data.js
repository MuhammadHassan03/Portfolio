export const personalData = {
  name: "Muhammad Hassan",
  firstName: "Hassan",
  profile: "/profile.png",
  designation: "Full Stack / AI Software Engineer",
  tagline: "I build accessibility tooling, AI agents and RAG systems for US startups.",
  description:
    "Three years of remote work for US companies. Currently at YRA Tech, a Massachusetts accessibility company, building AI-enhanced WCAG rule engines, neural translation comparison tooling and contrast-perception research. Before that I shipped a CRM platform for Devellp and the PackRat AI travel app, now past 10K App Store users, for Bierman Collective.",
  location: "Jhelum, Pakistan · Remote, US hours",
  availability: "Taking on select contract work",
  email: "engineermirzahassan@gmail.com",
  phone: "+92 317 5429933",
  github: "https://github.com/MuhammadHassan03",
  linkedIn: "https://www.linkedin.com/in/muhammadhassan03/",
  twitter: "https://twitter.com/mirza_hassan07",
  stackOverflow: "https://stackoverflow.com/users/23089473/muhammadhassan",
  leetcode: "https://leetcode.com/MirzaHassan07/",
  upwork: "https://www.upwork.com/freelancers/~012de8f7e218ece2ad",
  devUsername: "mirzahassan07",
  resume: "https://drive.google.com/file/d/1BeVG5ZwAVFJQvQa1lcqOdk_QzFu3y2Ru/view?usp=sharing",
  siteUrl: "https://devmirzahassan.netlify.app",
};

// Hero proof points. Keep to four; each must be true and defensible.
export const proof = [
  { value: "3 yrs", label: "Remote engineering for US companies" },
  { value: "10K+", label: "App Store users on PackRat AI" },
  { value: "100%", label: "Job Success Score on Upwork" },
  { value: "508", label: "DHS Trusted Tester certified" },
];

// What a client actually gets. Outcome first, tech second.
export const services = [
  {
    title: "AI agents & RAG systems",
    body: "Production LLM pipelines with evaluation built in: retrieval, tool use, LLM-as-judge scoring and self-hosted open models when data cannot leave your network.",
    stack: ["Python", "FastAPI", "Gemini / GPT / Groq", "Qwen-VL", "PyTorch"],
  },
  {
    title: "Accessibility engineering",
    body: "WCAG 2.2, Section 508 and European Accessibility Act compliance that is actually verified: rule engines, automated audits and remediation, not checkbox reports.",
    stack: ["WCAG 2.2", "Testaro", "Playwright", "DevTools a11y tree", "APCA"],
  },
  {
    title: "Full stack web & mobile",
    body: "Next.js and React Native apps shipped to the App Store and Play Store, with Node or .NET backends and the payments, messaging and maps integrations startups need.",
    stack: ["Next.js", "React Native", "Node.js", "tRPC", ".NET", "AWS"],
  },
];

// How an engagement runs. Answers the "what happens if I hire you" question.
export const process = [
  { step: "01", title: "Scope call", body: "Thirty minutes. You explain the problem, I ask the awkward questions early." },
  { step: "02", title: "Written plan", body: "Milestones, risks and a fixed first deliverable within two days of the call." },
  { step: "03", title: "Build in the open", body: "Weekly demos on a staging URL, PRs you can read, no surprises at the end." },
  { step: "04", title: "Hand-off", body: "Docs, tests and a recorded walkthrough so your team owns it after I leave." },
];
