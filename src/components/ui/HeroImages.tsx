"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import laptop from "../../../public/assets/images/heroLaptop.webp";
import plant from "../../../public/assets/images/heroPlant.webp";

export default function HeroImages() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // change to false if you want the animation to happen every time it becomes visible
    threshold: 0.1, // adjust this value to control when the animation should start
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="mt-10 relative h-[450px] w-[300px] md:w-[500px] mx-auto flex justify-center"
    >
      <motion.div
        className="absolute top-8 right-0 md:top-14 md:right-5 -z-20 bg-accent/80 w-[280px] h-[180px] md:h-[280px] md:w-[400px] rotate-12 rounded-xl cardShadow"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { rotate: 0, scale: 0},
          visible: { rotate: 12, scale: 1},
        }}
        transition={{ duration: 0.6 }}
      ></motion.div>
      <motion.img
        className="absolute right-24 top-32 w-[200px] md:w-[300px]"
        src={laptop.src}
        alt="laptop"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { x: "-100vw" },
          visible: { x: 0 },
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.img
        className="absolute md:w-[150px] w-[110px] top-8 right-10 -z-10"
        src={plant.src}
        alt="plant"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { x: "100vw" },
          visible: { x: 0 },
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
    </div>
  );
}
