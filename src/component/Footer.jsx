import React from "react";
import socialImg from "../assets/social.png";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Name */}
          <div>
            <h1 className="uppercase text-2xl md:text-3xl font-bold tracking-wide">
              The-<span className="text-teal-700">Mohit</span>
            </h1>
          </div>

          {/* Social Image */}
          <div>
            <img
              src={socialImg}
              alt="Social Links"
              className="w-40 md:w-52 lg:w-60 object-contain hover:scale-105 transition duration-300 cursor-pointer"
            />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 text-sm text-zinc-500">
          © 2026 The-Mohit. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;