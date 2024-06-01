'use client' 

import {
  BarChart,
  UserCheck,
  Settings,
  Heart,
  Globe,
  Shield,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const skills = [
  {
    icon: <BarChart size={30} />,
    title: "Communication",
    description:
      "Je sais m'exprimer clairement et de manière concise. J'écoute et je comprends les besoins de mes interlocuteurs.",
  },
  {
    icon: <UserCheck size={30} />,
    title: "Travail d'équipe",
    description:
      "Je collabore efficacement avec les autres pour atteindre des objectifs communs.",
  },
  {
    icon: <Settings size={30} />,
    title: "Résolution de problèmes",
    description:
      "Je trouve des solutions créatives et efficaces aux défis qui se présentent.",
  },
  {
    icon: <Heart size={30} />,
    title: "Empathie",
    description:
      "Je suis capable de comprendre et de partager les sentiments des autres.",
  },
  {
    icon: <Globe size={30} />,
    title: "Adaptabilité",
    description:
      "Je m'adapte facilement aux nouvelles situations et aux changements.",
  },
  {
    icon: <Shield size={30} />,
    title: "Fiabilité",
    description:
      "Je suis digne de confiance et on peut compter sur moi pour tenir mes engagements.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 1},
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.1, // Delay based on index
    },
  }),
};

export default function SoftSkillCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-secondary dark:hover:bg-primary hover:bg-accent hover:text-primary-foreground p-4 md:p-12 rounded-lg cardShadow md:h-[280px] md:w-[360px] transition"
          custom={index} // Pass the index to the animation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0 }}
          variants={cardVariants}
        >
          {skill.icon}
          <h3 className={`text-xl mt-2 mb-5 ${interFont.className} `}>{skill.title}</h3>
          <p>{skill.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
