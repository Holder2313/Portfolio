"use client";

import ToggleTheme from "@/components/ui/toggle-theme";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  // Variable pour les classes réutilisables
  const linkClasses = "p-3 rounded-lg";
  const activeLinkClasses =
    "hover:bg-accent dark:text-primary text-secondary bg-accent p-3 rounded-lg";

  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize(); // Set initial state based on screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Tableau des liens de navigation
  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact", isActive: true },
  ];

  // Variantes pour l'animation framer-motion
  const variants = {
    open: { clipPath: "circle(100% at 50% 50%)" },
    closed: { clipPath: "circle(1px at 90% 10%)" },
  };

  return (
    <header className="bg-background fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link href="#" className="flex items-center space-x-2 aria-hidden=true ">
            {/* <img src="" alt="" className="h-8 w-8" /> */}
            <span>Sébastien Perrot</span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 block md:hidden focus:outline-none"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <HiX size={40} /> : <HiOutlineMenuAlt3 size={40} />}
        </button>

        {isClient && (
          <motion.nav
            className={`fixed h-screen md:h-6 bg-secondary md:bg-background md:relative inset-0 md:flex w-full md:w-auto  `}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.3 }}
            style={{
              clipPath: isOpen
                ? "circle(100% at 50% 50%)"
                : "circle(30px at 90% 10%)",
            }}
          >
            <div className="absolute -z-10 w-full h-full flex flex-col items-center justify-center md:hidden"></div>
            <ul className="pt-10 md:pt-0 flex flex-col items-center md:flex-row md:space-x-8 text-4xl md:text-xl">
              {navLinks.map((link, index) => (
                <li className="my-5 md:my-0" key={index}>
                  <Link
                    href={link.href}
                    className={link.isActive ? activeLinkClasses : linkClasses}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <ToggleTheme />
              </li>
            </ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
