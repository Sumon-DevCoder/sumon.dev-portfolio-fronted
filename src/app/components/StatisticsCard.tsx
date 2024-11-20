"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

interface StatisticsCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  color: string; // Tailwind color class for card background
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <motion.div
      className={`bg-${color} p-6 rounded-lg shadow-lg text-white border-2`}
      initial={{ opacity: 0, y: 30 }} // Start offscreen with low opacity
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
      transition={{ duration: 0.5 }} // Transition duration of 0.5s
    >
      <div className="flex items-center mb-4">
        <div className="text-4xl">{icon}</div>
        <h3 className="text-xl ml-4">{title}</h3>
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </motion.div>
  );
};

export default StatisticsCard;
