// Maps a skill label to an icon in public/svg/skills. Unknown labels return null.
const files = {
  react: "react", "react native": "react", "next.js": "nextJS", angular: "angular", typescript: "typescript",
  "tailwind css": "tailwind", "material ui": "materialui", "node.js": "javascript", express: "javascript",
  python: "python", fastapi: "python", graphql: "graphql", pytorch: "pytorch", playwright: "selenium",
  mongodb: "mongoDB", mysql: "mysql", postgresql: "postgresql", firebase: "firebase", aws: "aws",
  docker: "docker", git: "git", figma: "figma",
};

export function skillIcon(label) {
  const file = files[label.toLowerCase()];
  return file ? `/svg/skills/${file}.svg` : null;
}
