import React, { useState } from "react";
import { navMenu } from "../assets/asstes";
import { FaArrowRight } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="text-2xl md:text-3xl font-bold cursor-pointer group">
              <span className="text-zinc-800">THE-</span>

              <span className="text-teal-700 font-orbitron relative">
                MOHIT
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 border border-white/30 rounded-full px-10 py-4 bg-white/40 backdrop-blur-xl shadow-lg">
              
              {navMenu.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-zinc-700 font-medium hover:text-teal-700 transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-teal-700 after:transition-all after:duration-300 hover:after:w-full hover:-translate-y-1"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop Resume Button */}
            <div className="hidden md:block">
              
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-3 border border-zinc-800 rounded-full flex items-center gap-3 text-slate-700 font-medium hover:bg-zinc-900 hover:text-white hover:scale-105 transition-all duration-300 shadow-md"
              >
                Resume

                <FaArrowRight className="text-sm group-hover:translate-x-1 transition duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl text-zinc-800 z-50 transition duration-300 hover:scale-110"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75%] bg-white/20 backdrop-blur-2xl border-l border-white/20 shadow-2xl z-40 transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="flex flex-col items-center justify-center h-full gap-10">

          {navMenu.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-zinc-800 hover:text-teal-700 hover:scale-110 transition-all duration-300"
            >
              {item}
            </a>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-4 bg-teal-700 text-white rounded-full flex items-center gap-3 hover:scale-105 hover:bg-teal-800 transition-all duration-300 shadow-xl"
          >
            Resume
            <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Blur Background Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-all duration-300"
        ></div>
      )}
    </>
  );
};

export default Navbar;