import React from "react";
import { projectData } from "../assets/asstes";

const Work = () => {
  return (
    <section
      id="work"
      className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="mb-14 text-center">

          <h2
            className="
            text-4xl sm:text-5xl font-bold text-slate-700 mb-6
            animate-[fadeIn_1s_ease]
          "
          >
            Featured{" "}
            <span className="text-teal-600">
              Projects
            </span>
          </h2>

          <p
            className="
            text-lg sm:text-xl max-w-3xl mx-auto text-slate-600
            animate-[fadeIn_1.5s_ease]
          "
          >
            Cutting-edge web applications built with modern technologies and
            beautiful responsive UI.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {projectData.map((project, index) => (
            <div
              key={index}
              className="
              group relative overflow-hidden rounded-3xl
              bg-white border border-gray-200
              shadow-md hover:shadow-2xl

              hover:-translate-y-3
              hover:scale-[1.02]

              active:scale-95

              transition-all duration-500

              animate-[fadeInUp_1s_ease]
            "
            >

              {/* GLOW EFFECT */}
              <div
                className="
                absolute inset-0 bg-gradient-to-r
                from-cyan-400/0 via-teal-400/0 to-cyan-400/0
                group-hover:from-cyan-400/10
                group-hover:via-teal-400/10
                group-hover:to-cyan-400/10
                transition-all duration-700
              "
              ></div>

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  className="
                  w-full h-56 object-cover

                  group-hover:scale-110
                  group-hover:rotate-1

                  active:scale-110

                  transition-all duration-700
                "
                  src={project.image}
                  alt={project.title}
                />

                {/* MOBILE FLOAT ANIMATION */}
                <div
                  className="
                  absolute inset-0
                  bg-black/0
                  group-hover:bg-black/10
                  transition duration-500
                "
                ></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 relative z-10">

                <h3
                  className="
                  text-2xl font-bold mb-3 text-slate-800

                  group-hover:text-teal-700

                  transition duration-300
                "
                >
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((language, index) => (
                    <span
                      key={index}
                      className="
                      px-4 py-2
                      bg-slate-100
                      text-xs font-semibold
                      rounded-full
                      text-slate-700

                      hover:bg-teal-600
                      hover:text-white

                      active:scale-90

                      transition-all duration-300
                      cursor-pointer
                    "
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTTOM LIGHT */}
              <div
                className="
                absolute bottom-0 left-0 w-full h-1
                bg-gradient-to-r from-cyan-500 to-teal-500

                scale-x-0 group-hover:scale-x-100

                transition-transform duration-500 origin-left
              "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;