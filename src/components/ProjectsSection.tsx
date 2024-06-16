'use client'
import React, { useEffect } from "react";
import ProjectCard from "./ui/projectCard";
import { getAllProjects } from "../../utils/actions";
import Title from "./ui/title";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import { useSession } from "next-auth/react";


const ProjectsSection: React.FC = () => {
  const { data: session, status } = useSession();
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
      <div className=" flex flex-col md:flex-row items-center justify-between gap-7 mb-5">
        <Title title="Portfolio" subTitle="Un aperçu de mes derniers projets" />

        {session && 
        <Link href="/addProjectForm">
        <div className=" flex items-center">
          <IoMdAdd size={40} /> 
          <p>Ajouter un nouveau projet</p>
          </div>
        </Link>
        }
        
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
