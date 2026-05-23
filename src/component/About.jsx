import React from "react";
import { profileData } from "../assets/asstes";
import { FaCode } from "react-icons/fa6";
import mohitImg from "../assets/mohit.jpeg"; // apni image ka naam yaha do

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            {/* Heading */}
            <h2 className="text-5xl font-bold mb-8">
              <span className="text-teal-700">About</span>
              <span className="text-black">Me</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-lg leading-10 text-zinc-800 mb-6">
              I’m a frontend developer with a passion for creating immersive
              digital experiences. With over 5 years in the industry, I’ve
              worked with startups and Fortune 500 companies to bring their
              visions to life.
            </p>

            <p className="text-lg leading-10 text-zinc-800 mb-10">
              My approach combines technical expertise with creative design
              thinking to build applications that are not only functional but
              also visually stunning.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {profileData.map((data, index) => (
                <div
                  key={index}
                  className="border border-zinc-300 rounded-xl p-6 bg-white
                    hover:shadow-2xl hover:-translate-y-2
                    active:scale-95 active:rotate-1
                    transition-all duration-300 cursor-pointer"
                >
                  <FaCode className="text-3xl mb-5 text-black" />

                  <h3 className="text-2xl font-bold mb-4">{data.title}</h3>

                  <p className="text-zinc-700 leading-8">
                    {data.technologies.join(", ")}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              download="Mohit_Resume.pdf"
              className="inline-block bg-zinc-800 text-white px-8 py-4 rounded-full text-lg hover:bg-zinc-900 transition duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={mohitImg}
              alt="about"
              className="w-full max-w-md rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
