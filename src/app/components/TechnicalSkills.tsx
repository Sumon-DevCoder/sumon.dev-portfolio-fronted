/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useGetSkillsQuery } from "@/redux/features/skills/skillsApi";

export type TSkills = {
  name: string;
  level: number;
  img: string;
};

const TechnicalSkills = () => {
  const { data } = useGetSkillsQuery({});

  const skillsData = data?.data?.result;

  console.log(skillsData?.length);

  return (
    <div id="skills">
      <section className="py-16 px-6 md:px-14  text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData?.map((skill: TSkills, index: any) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className="bg-green-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnicalSkills;
