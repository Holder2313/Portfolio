import { Kulim_Park, Comfortaa, Inter } from "next/font/google";
import LinkButtons from "./ui/linkButtons";

const kulimPark = Kulim_Park({ subsets: ["latin"], weight: ["400", "600"] });
const comfortaaFont = Comfortaa({ subsets: ["latin"], weight: ["400", "700"] });
const interFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  return (
    <section className="  h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-left">
          <h1 className="text-2xl text-muted-foreground font-semibold mb-2">Sébastien Perrot</h1>
          <h2 className={`md:text-6xl text-5xl font-semibold mb-4 ${interFont.className} `}>
            Développeur web front-end
          </h2>
          <p className="text-lg max-w-lg text-muted-foreground mb-10">
            Guidé par la passion et l'innovation, je conçois des expériences web
            esthétiques et fonctionnelles, adaptées aux défis spécifiques de
            chaque projet.
          </p>
          <LinkButtons />
        </div>
      </div>
    </section>
  );
};

export default Hero;
