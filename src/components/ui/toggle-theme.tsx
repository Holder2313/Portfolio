"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";
import { Button } from "./button";
import { useTheme } from "next-themes";

export default function ToggleTheme() {

  const { theme, setTheme } = useTheme(); 
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  

  return (
    <div>
      <Button
        className={` z-10 flex justify-center items-center hover:bg-transparent`}
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        aria-label="Toggle Theme"

      >
        <Moon className=" h-8 w-6 block dark:hidden" />
        <Sun className=" hidden dark:block h-8 w-6 " />
      </Button>
    </div> 
  );
}
