import React from "react";
import { navMenu } from "../assets/asstes";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-50 backdrop-blur-3xl bg-white/70">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-zinc-800 cursor-pointer">
            <span>THE-</span>
            <span className="text-teal-700 font-orbitron">
              MOHIT
            </span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-8 border border-gray-200 rounded-full px-10 py-4 bg-white">
            {navMenu.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-700 hover:text-teal-700 transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <div>
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zinc-800 rounded-full flex items-center gap-3 text-slate-600 hover:text-slate-900 hover:-translate-y-1 transition duration-300"
            >
              Resume
              <FaArrowRight className="text-sm" />
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;