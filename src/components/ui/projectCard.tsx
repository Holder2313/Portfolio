'use client'
import { useRouter } from "next/navigation";

import React from "react";

interface ProjectCardProps {
  project: {
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
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  const router = useRouter();


  return (
    <div className="relative cardShadow border mb-10 max-w-[340px] max-h-[200px] bg-cover bg-center rounded-lg overflow-hidden group cursor-pointer filter brightness-[80%] hover:brightness-[100%] ">
      <div className="shadow-xl flex items-center justify-center">
        {/* <div className=" absolute inset-0 w-full h-full bg-black/20"></div> */}
        <img
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-125"
          src={project.img[0]}
          alt={project.alt[0] }
        />
      </div>
      <div className=" flex flex-col items-center  absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-xl font-semibold mb-2">
          {project.client}
        </h3>
        <button
          onClick={() => router.push(`/projet/${project.id}`)}
          className="bg-accent text-white px-4 py-2 rounded">
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
