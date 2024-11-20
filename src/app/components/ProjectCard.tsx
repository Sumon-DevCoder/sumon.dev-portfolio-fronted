import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TProject } from "@/types/types.project";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <div className="flex flex-col md:flex-row border-2 rounded-lg shadow-md overflow-hidden my-8">
      {/* Left Side: Image with Live Link */}
      <div className="md:w-1/2">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-full w-full overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="object-cover h-full w-full"
            />
          </motion.div>
        </a>
      </div>

      {/* Right Side: Content */}
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          {/* Technology Stack */}
          <h4 className="text-lg font-medium text-white mb-2">Technologies:</h4>
          <ul className="list-disc pl-5 text-gray-400 mb-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <a
            href={project.clientCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Client Code
            </motion.button>
          </a>
          <a
            href={project.serverCode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Server Code
            </motion.button>
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <motion.button
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Link
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
