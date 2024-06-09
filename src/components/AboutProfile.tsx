'use client'
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import profilPicture from "../../public/assets/profil.webp";

export default function AboutProfile() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // change to true if you want the animation to happen only once
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
    <div ref={ref} className="md:w-[40%] flex justify-center mb-12 relative">
      <motion.div
        className="absolute w-[200px] h-[260px] transform -translate-y-2 translate-x-4 scale-110 bg-accent rounded-xl -z-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { rotate: 0 },
          visible: { rotate: 12 },
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <Image
        src={profilPicture}
        className="myImageClass w-[200px] h-auto rounded-lg object-cover relative"
        alt="photo de profil"
        height={200}
      />
    </div>
  );
}
