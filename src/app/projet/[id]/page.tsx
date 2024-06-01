'use client'
import React, { useEffect, useState } from "react";

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
}

interface ProjetProps {
  params: {
    id: string;
  };
}

const Projet: React.FC<ProjetProps> = ({ params }) => {
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{project.client}</h1>
      <img
        src={project.img[0]}
        alt={project.alt[0]}
        className="w-full h-auto mb-4"
      />
      <p className="mb-2">
        <strong>Description:</strong> {project.description}
      </p>
      <p className="mb-2">
        <strong>Date:</strong> {project.date}
      </p>
      <p className="mb-2">
        <strong>Contexte:</strong> {project.contexte}
      </p>
      <p className="mb-2">
        <strong>Approche:</strong> {project.approche}
      </p>
      <div className="mb-2">
        <strong>Tags:</strong>
        <ul className="list-disc list-inside">
          {project.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projet;
