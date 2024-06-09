'use client'
import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1, DiMysql } from "react-icons/di";
import { FaReact, FaNpm, FaSass } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiJest, SiRedux, SiSwagger } from "react-icons/si";
import { motion } from "framer-motion";
import { TbBrandTypescript } from "react-icons/tb";

const techSkills = [
  {
    icon: <AiOutlineHtml5 size={40} />,
    name: "HTML5",
  },

  {
    icon: <DiJavascript1 size={40} />,
    name: "Javascript",
  },
  {
    icon: <FaReact size={40} />,
    name: "React",
  },
  {
    icon: <RiNextjsLine size={40} />,
    name: "Next.js",
  },
  {
    icon: <SiRedux size={40} />,
    name: "Redux",
  },
  {
    icon: <RiTailwindCssFill size={40} />,
    name: "Tailwind CSS",
  },
  {
    icon: <FaSass size={40} />,
    name: "Sass",
  },
  {
    icon: <FaNpm size={40} />,
    name: "npm",
  },
  {
    icon: <TbBrandTypescript size={40} />,
    name: "TypeScript",
  },
  {
    icon: <SiSwagger size={40} />,
    name: "Swagger",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: index * 0.05, 
    },
  }),
};

export default function TechSkillCards() {
  return (
    <div className="flex flex-wrap gap-7 justify-center items-center">
      {techSkills.map((tech, index) => (
        <motion.div
          key={index}
          className="xl:w-[220px] lg:w-[160px] w-[120px] h-[120px] transition dark:hover:bg-primary hover:bg-accent bg-secondary hover:text-primary-foreground cardShadow flex flex-col justify-center items-center rounded-lg"
          custom={index} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          variants={cardVariants}
        >
          {tech.icon}
          <p className="mt-3">{tech.name}</p>
        </motion.div>
      ))}
    </div>
  );
}
