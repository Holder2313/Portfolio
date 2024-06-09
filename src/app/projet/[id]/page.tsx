"use client";

import InfosProjet from "@/components/projet-page/InfosProjet";
import { TabsProject } from "@/components/ui/TabProject";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Project {
  id: number;
  description: string;
  client: string;
  date: string;
  contexte: string;
  approche: string;
  tags: string[];
  img: string[];
  logo: string;
  alt: string[];
  github?: string;
}

interface ProjetProps {
  params: {
    id: string;
  };
}

const Projet = ({ params }: ProjetProps) => {
  const { id } = params;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch("/projetsData.json");
        const data = await response.json();
        const projectData = data.projects.find(
          (proj: Project) => proj.id === parseInt(id, 10)
        );
        setProject(projectData);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <section className="container w-full lg:h-screen flex flex-col lg:flex-row justify-between  mx-auto pt-20 p-4">
      <div className=" mt-10 w-full lg:w-[45%] flex flex-col ">
        <div>
          <h1 className="text-4xl font-bold mb-4">{project.client}</h1>
          <p className=" text-xl">{project.description} </p>

          <div className=" flex mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 bg-accent rounded-lg p-2 hover:bg-secondary hover:text-primary"
              aria-label="Github"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showStatus={false}
        >
          {project.img.map((image, index) => (
            <div className=" h-full w-full mt-6 lg:mt-[160px] " key={index}>
              <img
                className=" w-full rounded"
                src={image}
                alt={project.alt[index]}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="  flex flex-col w-full lg:w-1/2 mt-10 ">
        <InfosProjet
          client={project.client}
          date={project.date}
          tags={project.tags}
        />
        <TabsProject contexte={project.contexte} approche={project.approche} />
      </div>
    </section>
  );
};

export default Projet;
