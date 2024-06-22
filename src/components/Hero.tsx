import {Inter } from "next/font/google";
import LinkButtons from "./ui/linkButtons";
import HeroImages from "./ui/HeroImages";


const interFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  return (
    <section className="  h-screen flex md:items-center overflow-hidden">
      <div className="container mx-auto mt-24 px-4 flex lg:justify-between lg:flex-row flex-col">
        <div className="text-left">
          {/* <h1 className=" text-xl sm:text-2xl text-cyan-600 font-semibold mb-2">
            Sébastien Perrot
          </h1> */}
          <h2
            className={`sm:text-5xl text-4xl font-semibold mb-4 ${interFont.className} `}
          >
            Développeur front-end
          </h2>
          <p className="sm:text-lg max-w-lg dark:text-cyan-600 text-cyan-800 mb-10">
            Spécialisé en <span className="dark:text-cyan-500 text-cyan-900 mb-10 font-semibold">React</span> et <span className="dark:text-cyan-500 text-cyan-900 mb-10 font-semibold"> Next.js, </span>
            je conçois des expériences web uniques et fonctionnelles, adaptées
            aux exigences spécifiques de chaque projet.
          </p>
          <LinkButtons />
        </div>

        <HeroImages />
      </div>
    </section>
  );
};

export default Hero;
