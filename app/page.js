import { getPosts } from "@/utils/dev-to";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Hero from "./components/sections/hero";
import Hire from "./components/sections/hire";
import Services from "./components/sections/services";
import Skills from "./components/sections/skills";
import Work from "./components/sections/work";
import Writing from "./components/sections/writing";

// Order mirrors utils/chapters.js.
export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Experience />
      <Skills />
      <About />
      <Writing posts={posts} />
      <Hire />
    </>
  );
}
