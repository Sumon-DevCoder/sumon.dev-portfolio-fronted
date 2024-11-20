import React from "react";
import { FaCode, FaLaptopCode, FaTools, FaAward } from "react-icons/fa";
import StatisticsCard from "./StatisticsCard";

const StatisticsSection: React.FC = () => {
  const statistics = [
    {
      title: "Projects Completed",
      value: "15+",
      icon: <FaLaptopCode />,
      color: "blue-500",
    },
    {
      title: "Years of Experience",
      value: "5",
      icon: <FaCode />,
      color: "green-500",
    },
    {
      title: "Technologies Learned",
      value: "10+",
      icon: <FaTools />,
      color: "yellow-500",
    },
    {
      title: "Awards & Recognitions",
      value: "3",
      icon: <FaAward />,
      color: "purple-500",
    },
  ];
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Website Statistics
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 border-b-2 p-5">
          {statistics.map((stat, index) => (
            <StatisticsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
