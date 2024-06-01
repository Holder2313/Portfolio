import React from "react";
import Title from "./ui/title";
import ProjectCard from "./ui/projectCard";
import projetsData from "../../public/projetsData.json";

export default function ProjectsSection() {
  return (
    <section id="projects" className="container py-8">
      <Title title="Portfolio" subTitle="Un aperçu de mes derniers projets" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {projetsData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} /> 
        ))} 
      </div>
    </section>
  );
}
