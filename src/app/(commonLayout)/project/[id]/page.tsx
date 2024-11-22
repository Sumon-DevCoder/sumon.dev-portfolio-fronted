"use client";
import { motion } from "framer-motion";
import { useGetSingleprojectQuery } from "@/redux/features/project/projectApi";
import { useParams } from "next/navigation";
import React from "react";

const ProjectDetailsCard = () => {
  const { id } = useParams();
  const { data } = useGetSingleprojectQuery(id);

  const {
    title,
    description,
    technologies,
    clientCode,
    serverCode,
    liveLink,
    date,
    category,
    type,
    challenges,
    features,
  } = data?.data || {};

  return (
    <div className="py-10">
      <div className="flex  flex-col border-2 rounded-lg shadow-lg overflow-hidden my-5  max-w-screen-xl m-auto">
        {/* Top Section: Live Preview in iframe */}
        <div className="max-w-full md:h-[500px] overflow-hidden relative">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-full w-full overflow-hidden"
            >
              <iframe
                src={liveLink}
                className="h-full w-full border-none"
                title={title}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              ></iframe>
            </motion.div>
          </a>
        </div>

        {/* Bottom Section: Content */}
        <div className="p-6 flex flex-col justify-between bg-gray-900 text-white">
          <div className="mb-6">
            <h3 className="text-4xl font-bold text-green-600 mb-3">{title}</h3>
            <p className="text-xl text-gray-300 mb-4">{description}</p>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-lg">Date:</span>
                <span>{date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-lg">Category:</span>
                <span>{category}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-lg">Type:</span>
                <span>{type}</span>
              </div>
            </div>
          </div>

          {/* Technologies and Features */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-semibold text-green-400 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-4">
                {technologies?.map(
                  (
                    tech: string | undefined,
                    index: React.Key | null | undefined
                  ) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gray-800 text-white rounded-full text-lg font-medium hover:bg-green-600 transition duration-300"
                      title={tech}
                    >
                      {tech!.trim()}
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-green-400 mb-2">
                Challenges Faced:
              </h4>
              <p className="text-lg text-gray-300">{challenges}</p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-green-400 mb-2">
                Key Features:
              </h4>
              <p className="text-lg text-gray-300">{features}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a href={clientCode} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Client Code
              </motion.button>
            </a>
            <a href={serverCode} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Server Code
              </motion.button>
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Link
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
