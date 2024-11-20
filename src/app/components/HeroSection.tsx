import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import developerImg from "../../../public/assets/sumon.dev.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <section className="flex items-center justify-center md:justify-between flex-col-reverse md:flex-row py-16 md:px-14 px-4 bg-dark text-white">
        {/* Left side content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Hi, I&apos;m <span className="text-green-400">Sumon</span>
          </h1>
          <h2 className="text-lg md:text-xl font-light text-gray-400 mb-4">
            MERN Stack Developer
          </h2>
          <p className="mb-6 text-lg text-gray-300">
            I specialize in building full-stack web applications with modern
            technologies like React, Node.js, and MongoDB. Let&apos;s create
            something amazing together!
          </p>
          <a href="/cv.pdf" download>
            <button className="px-6 py-3 bg-green-600 hover:bg-green-600 text-slate-200 font-medium rounded-full transition duration-300">
              Download CV
            </button>
          </a>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <a
              href="https://github.com/sumon-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-green-400 transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumon-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-green-400 transition duration-300" />
            </a>
            <a
              href="https://twitter.com/sumon_dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:text-green-400 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={developerImg}
            width={400}
            height={500}
            alt="Sumon Developer"
            className="object-cover -mt-20"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
