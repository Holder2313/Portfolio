'use server'
import prisma from "./db"



// Fonction pour récupérer tous les projets
export async function getAllProjects() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        tags: true,
        images: true,
        altTexts: true,
      },
    });
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}


// Fonction pour récupérer un projet par son id
export async function getProjectById(id: number) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        tags: true,
        images: true,
        altTexts: true,
      },
    });
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}
