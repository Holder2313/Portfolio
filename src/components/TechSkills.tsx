import React from 'react'
import Title from './ui/title';
import TechSkillCards from './ui/techSkillCards';

export default function TechSkills() {
  return (
    <section className=" container ">
      <Title
        title="Compétences techniques"
        subTitle="Des technologies modernes pour des projets innovants"
      />

      <TechSkillCards />
      
    </section>
  );
} 
