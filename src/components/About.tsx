import React from "react";
import Title from "./ui/title";
import { Kulim_Park } from "next/font/google";
import Image from "next/image";
import profilPicture from "../../public/assets/images/profil.webp";

const kulimPark = Kulim_Park({ subsets: ["latin"], weight: ["400", "600"] });

export default function About() {
  return (
    <section id="about" className="border md:h-[650px]">
      <div className="container">
        <Title
          title="A propos de moi"
          subTitle="Transformer sa passion en métier"
        />

        <div className="flex flex-col-reverse md:flex-row">
          <p className={`text-lg md:text-xl md:w-[60%] ${kulimPark.className}`}>
            Animé par une passion pour le développement web, j'ai effectué une
            reconversion après plus de 10 ans en tant que commercial. Cette
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

          <div className="md:w-[40%] flex justify-center mb-12 relative">
            <div className="absolute w-[200px] h-[220px] transform -translate-y-2 translate-x-4 rotate-12 scale-110 bg-accent rounded -z-10"></div>
            <Image
              src={profilPicture}
              className="rounded-lg w-[200px] h-[260px] object-cover relative "
              alt="photo de profil"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
