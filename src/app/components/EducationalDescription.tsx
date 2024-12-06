import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaSchool, FaUniversity } from "react-icons/fa";

const EducationTimeline = () => {
  // Animation Variants
  const timelineVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section className=" text-white py-10 px-5">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-green-400">
          Educational Qualifications
        </h2>
        <p className="text-lg text-gray-300">
          A journey through my academic milestones and learning experiences.
        </p>
      </motion.div>

      {/* Timeline */}
      <VerticalTimeline lineColor="#4caf50">
        {/* BSc (Hons) in Zoology */}
        <motion.div
          variants={timelineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--education  pb-10"
            date="2023 - Present"
            position="right"
            contentStyle={{
              background: "linear-gradient(to right, #388e3c,  #4caf50 )",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #4caf50" }}
            iconStyle={{ background: "#4caf50", color: "#fff" }}
            icon={<FaUniversity />}
          >
            <h3 className="vertical-timeline-element-title  text-2xl font-semibold">
              BSc (Hons) in Zoology
            </h3>
            <h4 className="text-xl font-light">
              Sherpur Govt College, National University
            </h4>
            <p className="mt-2 text-sm">
              Pursuing specialization in Zoology while developing innovative
              solutions to real-world problems. Dedicated to academic excellence
              and professional growth.
            </p>
          </VerticalTimelineElement>
        </motion.div>

        {/* Higher Secondary School */}
        <motion.div
          variants={timelineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--education pb-10"
            date="2020 - 2022"
            position="left"
            contentStyle={{
              background: "linear-gradient(to right, #785B15, #f57f17)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #785B15" }}
            iconStyle={{ background: "#C89924", color: "#785B15" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold">
              Higher Secondary School Certificate
            </h3>
            <h4 className="text-xl font-light">
              Nizam Uddin Ahmed Model College
            </h4>
            <p className="mt-2 text-sm">
              Introduced to the fascinating world of web development, starting
              with HTML & CSS. This was the beginning of my coding journey.
            </p>
          </VerticalTimelineElement>
        </motion.div>

        {/* Secondary School */}
        <motion.div
          variants={timelineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2020"
            position="right"
            contentStyle={{
              background: "linear-gradient(to right, #092D48, #1976d2)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #092D48" }}
            iconStyle={{ background: "#2196f3", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title text-2xl font-semibold">
              Secondary School Certificate
            </h3>
            <h4 className="text-xl font-light">Sherpur Govt Victory Academy</h4>
            <p className="mt-2 text-sm">
              Started exploring programming and building my passion for
              technology. A quick learner and eager to experiment with new
              ideas.
            </p>
          </VerticalTimelineElement>
        </motion.div>
      </VerticalTimeline>
    </section>
  );
};

export default EducationTimeline;
