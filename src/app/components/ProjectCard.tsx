import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TProject } from "@/types/types.project";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const ProjectCard = ({ project }: { project: TProject }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="flex flex-col md:flex-row border-2 rounded-lg shadow-md overflow-hidden my-8">
      {/* Left Side: Live Preview in iframe */}
      <div
        className="md:w-1/2 h-64 md:h-auto overflow-hidden relative"
        data-aos="fade-right" // Add fade-right animation
      >
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="h-full w-full overflow-hidden"
          >
            <iframe
              src={project.liveLink}
              className="h-full w-full border-none"
              title={project.title}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            ></iframe>
          </motion.div>
        </a>
      </div>

      {/* Right Side: Content */}
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div data-aos="fade-left" className="mb-4">
          {" "}
          {/* Fade in left for content */}
          <h3 className="text-2xl font-bold text-green-400 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">
            {project.description?.slice(0, 200)}
          </p>
          {/* Technology Stack */}
          <h4
            className="text-lg font-medium text-white mb-2"
            data-aos="zoom-in"
          >
            {" "}
            {/* Zoom-in for tech stack */}
            Technologies:
          </h4>
          <ul className="list-disc pl-5 text-gray-400 mb-4" data-aos="fade-up">
            {" "}
            {/* Fade up for the list */}
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="space-x-4 mt-4 grid grid-cols-4 justify-items-center">
          <Link
            href={project.clientCode}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in-up" // Zoom-in-up animation for the button
          >
            <motion.button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Client
              <span className="hidden lg:block ml-1">Code</span>
            </motion.button>
          </Link>
          <Link
            href={project.serverCode}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in-up"
          >
            <motion.button
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Server
              <span className="hidden lg:block ml-1">Code</span>
            </motion.button>
          </Link>
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in-up"
          >
            <motion.button
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Live
              <span className="hidden lg:block ml-1">Link</span>
            </motion.button>
          </Link>
          <Link href={`/project/${project?._id}`} data-aos="zoom-in-up">
            <motion.button
              className="px-2 lg:px-6 mr-4 md:mr-0 lg:mr-4 py-2 bg-amber-600 hover:bg-green-700 text-white rounded-lg "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Details
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
