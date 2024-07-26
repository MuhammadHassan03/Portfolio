import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import axios from "axios";

async function getData() {
  try {
    const res = await axios.get(
      `https://dev.to/api/articles?username=${personalData.devUsername}`
    );

    if (!res) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.data;
    console.log(data);
    const filtered = data
      .filter((item) => item?.cover_image || "https://picsum.photos/1920/1080")
      .sort(() => Math.random() - 0.5);

    return filtered;
  } catch (error) {
    console.log("error", error.message);
  }
}

export default async function Home() {
  const blogs = await getData();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
