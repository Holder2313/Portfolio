import React from 'react'
import Title from './ui/title'
import SoftSkillCards from './ui/softSkillCards'

export default function SoftSkills() {
  return (
    <section className=" container mb-32  ">
      <Title title="Savoir être" subTitle="Mes compétences personnelles" />

      <SoftSkillCards />
    </section>
  );
}
