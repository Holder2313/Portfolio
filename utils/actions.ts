'use server'
import prisma from "./db"
import { put } from '@vercel/blob';

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

export const uploadFile = async (formData: FormData) => {
    const file = formData.get('file') as File;  
    const filename = file.name;

     const blob = await put(filename, file, {
    access: 'public',
     });
    
   return blob.url;
}

export async function createProject(formData: FormData) {
  try {
    const client = formData.get('client') as string;
    const description = formData.get('description') as string;
    const date = formData.get('date') as string;
    const contexte = formData.get('contexte') as string;
    const approche = formData.get('approche') as string;
    const tags = (formData.get('tags') as string).split(',').map(tag => tag.trim());
    const github = formData.get('github') as string;

    const imageUrls = JSON.parse(formData.get('imageUrls') as string);
    const logo = formData.get('logo') as File | null;

    const altTexts = formData.getAll('altTexts').map(alt => alt.toString());

    const project = await prisma.project.create({
      data: {
        client: client,
        description: description,
        date: date,
        contexte: contexte,
        approche: approche,
        logo: logo ? URL.createObjectURL(logo) : null,
        github: github,
        tags: {
          create: tags.map((tag) => ({ name: tag })),
        },
        images: {
          create: imageUrls.map((url: string) => ({ url })),
        },
        altTexts: {
          create: altTexts.map((text) => ({ text })),
        },
      },
    });

    return project;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}
