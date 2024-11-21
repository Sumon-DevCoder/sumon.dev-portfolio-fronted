import React from "react";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import developerImg from "../../../public/assets/sumon.dev.png";
import Image from "next/image";
import TypeText from "./sub-components/TypeText";
import Link from "next/link";
import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <div>
      <section className="flex items-center justify-center md:justify-between flex-col-reverse md:flex-row py-16 md:px-8 px-4 bg-dark text-white">
        {/* Left side content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Hi, I&apos;m <span className="text-green-400"></span>
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-green-400 mb-4">
            <TypeText />
          </h2>
          <p className="mb-6 text-lg text-gray-300">
            I specialize in building full-stack web applications with modern
            technologies like React, Node.js, and MongoDB. Let&apos;s create
            something amazing together!
          </p>
          <Link
            href="https://drive.google.com/file/d/1hnEjfiMPov6SBM0LLTamrPKHo1YruYT1/view?usp=sharing"
            target="_blank"
          >
            <button className="group px-3 py-2 text-xl flex items-center justify-center gap-2 border-2 border-green-500 rounded-sm  text-slate-200 font-medium  hover:from-green-600 hover:via-green-700 hover:to-green-800 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 ease-in-out">
              <FaDownload className="text-white group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
              <span className="group-hover:text-white">Download CV</span>
            </button>
          </Link>

          <div className="flex justify-center md:justify-start space-x-3 mt-8">
            <a
              href="https://github.com/sumon-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumon-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://twitter.com/sumon_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://facebook.com/sumon.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 flex justify-center p-2">
          <div className={`${styles["animated-border"]} p-4 rounded-lg`}>
            <Image
              src={developerImg}
              width={400}
              height={800}
              alt="Sumon Developer"
              className="object-cover -mt-20"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
