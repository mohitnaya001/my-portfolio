import React from "react";
import { profileData } from "../assets/asstes";
import { FaCode } from "react-icons/fa6";
import mohitImg from "../assets/mohit.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#f8f8f8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* HEADING */}
            <h2
              className="
              text-5xl font-bold mb-8
              animate-[fadeIn_1s_ease]
            "
            >
              <span className="text-teal-700">
                About
              </span>

              <span className="text-black">
                Me
              </span>
            </h2>

            {/* PARAGRAPH */}
            <p
              className="
              text-lg leading-10 text-zinc-800 mb-6
              animate-[fadeIn_1.2s_ease]
            "
            >
              Hi, I’m Mohit Nayak, a passionate Full Stack Developer and a student at MSU Baroda. I recently completed my 2nd year and enjoy creating modern, responsive, and user-friendly websites and web applications. I love learning new technologies and improving my skills by building creative and functional projects.
            </p>

            <p
              className="
              text-lg leading-10 text-zinc-800 mb-10
              animate-[fadeIn_1.5s_ease]
            "
            >
              My goal is to combine clean design with powerful functionality to create smooth digital experiences. I’m always exploring new ideas, experimenting with modern web technologies, and working on projects that help me grow as a developer.
            </p>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">

              {profileData.map((data, index) => (
                <div
                  key={index}
                  className="
                  group relative overflow-hidden

                  border border-zinc-300
                  rounded-2xl
                  p-6 bg-white

                  hover:shadow-2xl
                  hover:-translate-y-3
                  hover:rotate-1

                  active:scale-95

                  transition-all duration-500
                  cursor-pointer

                  animate-[fadeInUp_1s_ease]
                "
                >

                  {/* GLOW EFFECT */}
                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-cyan-400/0
                    to-teal-500/0

                    group-hover:from-cyan-400/10
                    group-hover:to-teal-500/10

                    transition-all duration-500
                  "
                  ></div>

                  {/* ICON */}
                  <div
                    className="
                    relative z-10
                    w-16 h-16 rounded-full
                    flex items-center justify-center

                    bg-gray-100 border border-gray-300 mb-5

                    group-hover:scale-110
                    group-hover:rotate-12
                    group-hover:bg-teal-100

                    transition-all duration-500
                  "
                  >
                    <FaCode
                      className="
                      text-3xl text-black

                      group-hover:text-teal-700
                      group-hover:scale-125

                      transition-all duration-500
                    "
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                    relative z-10
                    text-2xl font-bold mb-4

                    group-hover:text-teal-700

                    transition duration-300
                  "
                  >
                    {data.title}
                  </h3>

                  {/* TEXT */}
                  <p
                    className="
                    relative z-10
                    text-zinc-700 leading-8

                    group-hover:text-zinc-900

                    transition duration-300
                  "
                  >
                    {data.technologies.join(", ")}
                  </p>

                  {/* BOTTOM LINE */}
                  <div
                    className="
                    absolute bottom-0 left-0
                    w-full h-1

                    bg-gradient-to-r
                    from-cyan-500 to-teal-600

                    scale-x-0
                    group-hover:scale-x-100

                    transition-transform duration-500 origin-left
                  "
                  ></div>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href="/resume.pdf"
              download="Mohit_Resume.pdf"
              className="
              inline-block bg-zinc-800 text-white
              px-8 py-4 rounded-full text-lg

              hover:bg-zinc-900
              hover:scale-105
              hover:-translate-y-1

              active:scale-95

              transition-all duration-300
              shadow-xl
            "
            >
              Download Resume
            </a>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative group">

              {/* GLOW */}
              <div
                className="
                absolute -inset-4
                bg-gradient-to-r
                from-cyan-400 to-teal-500

                rounded-3xl blur-3xl
                opacity-20

                group-hover:opacity-40

                animate-pulse
                transition duration-500
              "
              ></div>

              {/* IMAGE BOX */}
              <div
                className="
                relative overflow-hidden
                rounded-3xl

                shadow-2xl

                hover:scale-105
                hover:rotate-1

                active:scale-95

                transition-all duration-700

                animate-[float_4s_ease-in-out_infinite]
              "
              >
                <img
                  src={mohitImg}
                  alt="about"
                  className="
                  w-full max-w-md object-cover

                  hover:scale-110

                  transition duration-700
                "
                />
              </div>

              {/* FLOAT CARD */}
              <div
                className="
                absolute -bottom-6 -left-4

                bg-white/70 backdrop-blur-xl
                border border-white/30

                shadow-2xl
                rounded-2xl

                px-6 py-4

                hover:scale-110
                hover:-translate-y-2

                active:scale-95

                transition-all duration-500

                animate-[float_3s_ease-in-out_infinite]
              "
              >
                <p className="font-bold text-teal-700">
                  Creative Developer
                </p>

                <p className="text-sm text-zinc-700">
                  UI / UX & Frontend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;