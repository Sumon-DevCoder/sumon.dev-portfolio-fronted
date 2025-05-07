/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// TypeWriter component (replacing TypeText)
const TypeWriter = () => {
  const titles = [
    "Full Stack Developer",
    "React & Next.js Specialist",
    "MERN Stack Developer",
    "Programming Enthusiast",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitleIndex];
    const updateText = () => {
      if (!isDeleting) {
        setDisplayText(title.substring(0, displayText.length + 1));

        if (displayText === title) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(title.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const typingTimeout = setTimeout(updateText, isDeleting ? 50 : 150);

    return () => clearTimeout(typingTimeout);
  }, [displayText, currentTitleIndex, isDeleting, titles]);

  return (
    <span className="inline-block min-h-8">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-green-400 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left content area */}
          <motion.div
            className="w-full md:w-3/5 mt-10 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text px-4 py-1 bg-green-400/10 text-green-400 rounded-full text-sm font-medium mb-4"
            >
              Welcome to my portfolio
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              Hi, I'm <span className="text-green-400">Sumon</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-green-400 mb-6"
            >
              <TypeWriter />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl"
            >
              I'm a full-stack developer & create websites that help businesses
              grow by turning visitors into loyal customers — ideal for anyone
              looking to expand their online presence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href="https://docs.google.com/document/d/13F7QbWT-BGJlKwMMnIY_Byj97lL9Mq-jfOqvnLmTIkI/edit?usp=sharing"
                target="_blank"
              >
                <button className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium rounded-lg flex items-center gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 overflow-hidden">
                  <span className="absolute inset-0 bg-green-700 opacity-0 group-active:opacity-20 transition-all duration-300 rounded-lg"></span>
                  <FaDownload className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative">Download Resume</span>
                </button>
              </Link>

              <button className="relative px-[53px] py-2 border-2 border-gray-700 text-gray-300 font-medium rounded-lg overflow-hidden group hover:text-white transition-all duration-300 hover:border-none hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.5)] active:scale-95">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></span>
                <span className="relative z-10">View Projects</span>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <a
                href="https://github.com/sumon-devCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-green-500 text-gray-300 hover:text-white border border-gray-700 transition-all duration-300 shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sumon-devcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-green-500 text-gray-300 hover:text-white border border-gray-700 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://facebook.com/sumon.devCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-green-500 text-gray-300 hover:text-white border border-gray-700 transition-all duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right image area */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center mt-5 md:mt-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 blur-md opacity-70 animate-pulse"></div>

              {/* Image container */}
              <div className="relative bg-gray-900 p-2 rounded-2xl overflow-hidden">
                {/* Replace with your image */}
                <div className="aspect-square w-full max-w-md overflow-hidden rounded-xl">
                  <Image
                    src="/assets/sumon.jpeg"
                    width={400}
                    height={400}
                    alt="Sumon Developer"
                    className="object-cover  w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
