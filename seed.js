import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
    const data = JSON.parse(fs.readFileSync('./public/projetsData.json', 'utf-8'));

    for (const project of data.projects) {
        await prisma.project.create({
            data: {
                description: project.description,
                client: project.client,
                date: project.date,
                contexte: project.contexte,
                approche: project.approche,
                tags: {
                    create: project.tags.map(tag => ({ name: tag })),
                },
                images: {
                    create: project.img.map(url => ({ url })),
                },
                altTexts: {
                    create: project.alt.map(text => ({ text })),
                },
                logo: project.logo,
                github: project.github || '',  
            },
        });
    }
}

main()
    .then(() => {
        console.log('Data inserted successfully');
        prisma.$disconnect();
    })
    .catch((e) => {
        console.error(e);
        prisma.$disconnect();
    });
