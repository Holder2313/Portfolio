'use client'
import React, { useEffect } from "react";
import ProjectCard from "./ui/projectCard";
import { getAllProjects } from "../../utils/actions";
import Title from "./ui/title";


const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        setProjects(data);
        console.log("Projects fetched:", data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="container py-8">
      <Title title="Portfolio" subTitle="Un aperçu de mes derniers projets" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
