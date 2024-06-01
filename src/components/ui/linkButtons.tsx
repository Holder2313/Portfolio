import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function LinkButtons() {
  return (
    <div className="flex space-x-4 mt-4">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className=" text-slate-50 bg-accent rounded-lg p-2 hover:bg-secondary hover:text-primary"
        aria-label="Email"
      >
        <CiMail size={24} />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-50 bg-accent rounded-lg p-2 hover:bg-secondary hover:text-primary"
        aria-label="Github"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-50 bg-accent rounded-lg p-2 hover:bg-secondary hover:text-primary"
        aria-label="Linkedin"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}
