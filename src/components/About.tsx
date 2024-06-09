import React from "react";
import Title from "./ui/title";
import { Kulim_Park } from "next/font/google";
import AboutProfile from "./AboutProfile";


const kulimPark = Kulim_Park({ subsets: ["latin"], weight: ["400", "600"] });

export default function About() {
  return (
    <section id="about" className="border md:h-[650px]">
      <div className="container">
        <Title
          title="A propos de moi"
          subTitle="Du Commerce au Développement Web"
        />

        <div className="flex flex-col-reverse md:flex-row">
          <p className={`text-lg md:text-xl md:w-[60%] ${kulimPark.className}`}>
            Animé par une passion pour le développement web, j'ai effectué une
            reconversion après plus de 15 ans en tant que commercial. Cette
            transition m'a permis de canaliser ma curiosité et ma créativité
            dans la conception de solutions numériques esthétiques et
            fonctionnelles. <br />
            Grâce à mon expérience en communication, je sais comment collaborer
            efficacement et comprendre les besoins des clients. Je suis
            perpétuellement en quête d'apprentissage, explorant sans cesse de
            nouvelles technologies et méthodes pour améliorer mes compétences.
            Mon approche du développement web est guidée par une volonté de
            créer des expériences utilisateur intuitives et visuellement
            plaisantes, répondant aux besoins spécifiques de chaque projet.
          </p>

          <AboutProfile />
          
        </div>
      </div>
    </section>
  );
}
