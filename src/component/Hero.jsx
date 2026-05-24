import React from "react";
import { FaArrowRight } from "react-icons/fa";
import mohitImg from "../assets/mohit.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 overflow-hidden scroll-smooth bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            {/* HEADING */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">

              <span
                className="
                text-zinc-700 block cursor-pointer
                animate-[fadeIn_1s_ease]
                hover:tracking-wider
                hover:scale-105
                active:scale-95
                transition-all duration-500
              "
              >
                FullStack Developer
              </span>

              <span
                className="
                text-cyan-700 block mt-2 cursor-pointer
                animate-[fadeIn_1.5s_ease]
                hover:scale-110
                active:scale-95
                transition-all duration-500
              "
              >
                JavaScript
              </span>
            </h1>

            {/* TEXT */}
            <p
              className="
              text-lg sm:text-xl text-zinc-700 mt-8 mb-10
              max-w-xl leading-relaxed
              animate-[fadeIn_2s_ease]
            "
            >
              I craft immersive web experiences at the intersection of design
              and technology with modern UI, smooth animations, and responsive
              experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-5">

              {/* VIEW WORK */}
              <a
                href="#work"
                className="
                group relative overflow-hidden
                flex gap-3 items-center
                px-10 py-4
                bg-black rounded-full text-white
                shadow-2xl
                hover:scale-105
                active:scale-90
                hover:-translate-y-1
                transition-all duration-300
                animate-[fadeInUp_1.2s_ease]
              "
              >
                <span className="relative z-10">View My Work</span>

                <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition duration-300" />

                <div className="absolute inset-0 bg-cyan-700 translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>
              </a>

              {/* CONTACT */}
              <a
                href="#contact"
                className="
                group flex items-center gap-3
                border border-slate-400
                rounded-full px-10 py-4
                hover:border-black
                hover:bg-black
                hover:text-white
                hover:scale-105
                active:scale-90
                hover:-translate-y-1
                transition-all duration-300
                shadow-lg
                animate-[fadeInUp_1.5s_ease]
              "
              >
                Contact Me

                <FaArrowRight className="group-hover:translate-x-2 transition duration-300" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <div className="relative group">

              {/* MOBILE GLOW ANIMATION */}
              <div
                className="
                absolute -inset-4
                bg-gradient-to-r from-cyan-400 to-teal-500
                rounded-3xl blur-3xl opacity-30
                animate-pulse
              "
              ></div>

              {/* IMAGE */}
              <div
                className="
                relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px]
                rounded-3xl overflow-hidden
                border border-white/20
                shadow-2xl
                backdrop-blur-xl

                animate-[float_4s_ease-in-out_infinite]

                hover:scale-105
                hover:rotate-1

                active:scale-95
                transition-all duration-500
              "
              >
                <img
                  className="
                  w-full h-full object-cover

                  hover:scale-110
                  active:scale-110

                  transition duration-700
                "
                  src={mohitImg}
                  alt="Profile"
                />
              </div>

              {/* FLOATING CARD */}
              <div
                className="
                absolute -bottom-6 -right-4 sm:-right-6
                bg-white/30
                backdrop-blur-xl
                border border-white/40
                shadow-2xl
                rounded-2xl
                px-6 py-5
                cursor-pointer

                animate-[floatCard_3s_ease-in-out_infinite]

                hover:scale-110
                hover:-translate-y-2

                active:scale-95
                transition-all duration-500
              "
              >
                <div className="text-center">

                  <div className="text-sm font-semibold text-black tracking-wide">
                    Student
                  </div>

                  <div className="text-sm text-black">
                    OF
                  </div>

                  <div className="text-sm font-bold text-cyan-800">
                    MSU Baroda
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL BUTTON */}
        <div className="flex justify-center mt-16">

          <a
            href="#about"
            className="
            animate-bounce
            text-zinc-600
            hover:text-cyan-700
            active:scale-90
            transition duration-300
          "
          >
            ↓ Scroll Down
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;