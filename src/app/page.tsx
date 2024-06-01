import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SoftSkills from "@/components/SoftSkills";
import TechSkills from "@/components/TechSkills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SoftSkills />
      <TechSkills />
      <ProjectsSection />
      <Contact />
    </main>
  );
}
