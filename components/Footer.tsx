import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-blue-400">ApplyNest</h3>
        </div>
        <p className="text-lg text-gray-400 mt-2 mb-8 md:mt-0 md:mb-0">© 2025 ApplyNest All rights reserved. Developed with ❤️‍🔥 By  <b> Rohan Singla</b></p>
        <div className="flex space-x-6">
          <a href="https://x.com/rohanBuilds" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-400 hover:text-white">
            <Twitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rohan-singla100/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-400 hover:text-white">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Rohan-Singla" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-blue-400 hover:text-white">
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
