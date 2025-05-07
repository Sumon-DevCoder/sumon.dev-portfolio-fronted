// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { motion } from "framer-motion"; // Import Framer Motion
// import { FaSchool, FaUniversity } from "react-icons/fa";

// const EducationTimeline = () => {
//   // Animation Variants
//   const timelineVariant = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//   };

//   return (
//     <section className=" text-white py-10 px-5">
//       {/* Heading Section */}
//       <motion.div
//         className="text-center mb-10"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-green-400">
//           Educational Qualifications
//         </h2>
//         <p className="text-lg text-gray-300">
//           A journey through my academic milestones and learning experiences.
//         </p>
//       </motion.div>

//       {/* Timeline */}
//       <VerticalTimeline lineColor="#4caf50">
//         {/* BSc (Hons) in Zoology */}
//         <motion.div
//           variants={timelineVariant}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education  pb-10"
//             date="2023 - Present"
//             position="right"
//             contentStyle={{
//               background: "linear-gradient(to right, #388e3c,  #4caf50 )",
//               color: "#fff",
//             }}
//             contentArrowStyle={{ borderRight: "7px solid #4caf50" }}
//             iconStyle={{ background: "#4caf50", color: "#fff" }}
//             icon={<FaUniversity />}
//           >
//             <h3 className="vertical-timeline-element-title  text-2xl font-semibold">
//               BSc (Hons) in Zoology
//             </h3>
//             <h4 className="text-xl font-light">
//               Sherpur Govt College, National University
//             </h4>
//             <p className="mt-2 text-sm">
//               Pursuing specialization in Zoology while developing innovative
//               solutions to real-world problems. Dedicated to academic excellence
//               and professional growth.
//             </p>
//           </VerticalTimelineElement>
//         </motion.div>

//         {/* Higher Secondary School */}
//         <motion.div
//           variants={timelineVariant}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education pb-10"
//             date="2020 - 2022"
//             position="left"
//             contentStyle={{
//               background: "linear-gradient(to right, #785B15, #f57f17)",
//               color: "#fff",
//             }}
//             contentArrowStyle={{ borderRight: "7px solid #785B15" }}
//             iconStyle={{ background: "#C89924", color: "#785B15" }}
//             icon={<FaSchool />}
//           >
//             <h3 className="vertical-timeline-element-title text-2xl font-semibold">
//               Higher Secondary School Certificate
//             </h3>
//             <h4 className="text-xl font-light">
//               Nizam Uddin Ahmed Model College
//             </h4>
//             <p className="mt-2 text-sm">
//               Introduced to the fascinating world of web development, starting
//               with HTML & CSS. This was the beginning of my coding journey.
//             </p>
//           </VerticalTimelineElement>
//         </motion.div>

//         {/* Secondary School */}
//         <motion.div
//           variants={timelineVariant}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education"
//             date="2018 - 2020"
//             position="right"
//             contentStyle={{
//               background: "linear-gradient(to right, #092D48, #1976d2)",
//               color: "#fff",
//             }}
//             contentArrowStyle={{ borderRight: "7px solid #092D48" }}
//             iconStyle={{ background: "#2196f3", color: "#fff" }}
//             icon={<FaSchool />}
//           >
//             <h3 className="vertical-timeline-element-title text-2xl font-semibold">
//               Secondary School Certificate
//             </h3>
//             <h4 className="text-xl font-light">Sherpur Govt Victory Academy</h4>
//             <p className="mt-2 text-sm">
//               Started exploring programming and building my passion for
//               technology. A quick learner and eager to experiment with new
//               ideas.
//             </p>
//           </VerticalTimelineElement>
//         </motion.div>
//       </VerticalTimeline>
//     </section>
//   );
// };

// export default EducationTimeline;

import React, { useState } from "react";
import * as d3 from "d3";

// Simple icons using text or emoji
const SchoolIcon = () => <div className="text-2xl">🏫</div>;
const UniversityIcon = () => <div className="text-2xl">🎓</div>;
const GraduationIcon = () => <div className="text-2xl">🎓</div>;
const AwardIcon = () => <div className="text-2xl">🏆</div>;
const MedalIcon = () => <div className="text-2xl">🏅</div>;

// Custom Timeline Component
const TimelineElement = ({
  date,
  position,
  children,
  gradientFrom,
  gradientTo,
  iconBackground,
  icon,
  onClick,
  isVisible,
}) => {
  return (
    <div
      className={`mb-12 flex ${
        position === "left" ? "flex-row-reverse" : "flex-row"
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center mx-4">
        <div className="relative">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: iconBackground }}
          >
            {icon}
          </div>
        </div>
        <div className="w-1 bg-green-400 grow my-2"></div>
      </div>

      {/* Content */}
      <div
        className={`w-full ${
          position === "left" ? "text-right pr-4" : "text-left pl-4"
        }`}
      >
        <div
          className="p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
          style={{
            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
            maxWidth: "500px",
            width: "100%",
            margin: position === "left" ? "0 0 0 auto" : "0 auto 0 0",
          }}
          onClick={onClick}
        >
          {children}
        </div>
        <div
          className={`mt-2 text-green-400 font-medium ${
            position === "left" ? "pr-12" : "pl-12"
          }`}
        >
          {date}
        </div>
      </div>
    </div>
  );
};

const EducationTimeline = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [visibleElements, setVisibleElements] = useState([]);

  React.useEffect(() => {
    // Simulate the animation by gradually revealing elements
    const timeout = setTimeout(() => {
      setVisibleElements([1, 2, 3, 4, 5]);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  // Education data
  const educationData = [
    {
      id: 1,
      title: "BSc (Hons) in Zoology",
      institution: "Sherpur Govt College, National University",
      period: "2023 - Present",
      description:
        "Pursuing specialization in Zoology while developing innovative solutions to real-world problems. Dedicated to academic excellence and professional growth.",
      achievements: [
        "Dean's List for academic excellence",
        "Research project on local ecosystem conservation",
        "Member of the Biology Association",
      ],
      color: "#4caf50",
      gradientFrom: "#388e3c",
      gradientTo: "#4caf50",
      icon: <UniversityIcon />,
      position: "right",
    },
    {
      id: 2,
      title: "Higher Secondary School Certificate",
      institution: "Nizam Uddin Ahmed Model College",
      period: "2020 - 2022",
      description:
        "Introduced to the fascinating world of web development, starting with HTML & CSS. This was the beginning of my coding journey.",
      achievements: [
        "Science Club president",
        "Winner of district science competition",
        "Completed programming fundamentals course",
      ],
      color: "#f57f17",
      gradientFrom: "#785B15",
      gradientTo: "#f57f17",
      icon: <SchoolIcon />,
      position: "left",
    },
    {
      id: 3,
      title: "Secondary School Certificate",
      institution: "Sherpur Govt Victory Academy",
      period: "2018 - 2020",
      description:
        "Started exploring programming and building my passion for technology. A quick learner and eager to experiment with new ideas.",
      achievements: [
        "Class representative",
        "Computer Science Club member",
        "Top 5% in final examinations",
      ],
      color: "#1976d2",
      gradientFrom: "#092D48",
      gradientTo: "#1976d2",
      icon: <SchoolIcon />,
      position: "right",
    },
  ];

  // Handle detail view click
  const handleElementClick = (id) => {
    setSelectedElement(selectedElement === id ? null : id);
  };

  return (
    <section className="bg-gray-900 text-white py-10 px-5">
      {/* Heading Section */}
      <div
        className="text-center mb-10"
        style={{
          opacity: visibleElements.includes(1) ? 1 : 0,
          transform: visibleElements.includes(1) ? "scale(1)" : "scale(0.8)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-green-400">
          Educational Journey
        </h2>

        <div className="flex justify-center mt-4">
          <div className="h-1 w-24 bg-green-400 rounded-full"></div>
        </div>
      </div>

      {/* Custom Timeline */}
      <div className="container mx-auto max-w-4xl relative">
        {/* Center line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-400 transform -translate-x-1/2"></div>

        {educationData.map((item, index) => (
          <TimelineElement
            key={item.id}
            date={item.period}
            position={item.position}
            gradientFrom={item.gradientFrom}
            gradientTo={item.gradientTo}
            iconBackground={item.color}
            icon={item.icon}
            onClick={() => handleElementClick(item.id)}
            isVisible={visibleElements.includes(index + 2)}
          >
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            <h4 className="text-xl font-light mb-3 text-white opacity-90">
              {item.institution}
            </h4>
            <p className="text-sm text-white opacity-90">{item.description}</p>

            {/* Achievements that show on click */}
            {selectedElement === item.id && (
              <div className="mt-4 pt-4 border-t border-white border-opacity-30">
                <h5 className="font-medium mb-2 flex items-center text-white">
                  <span className="mr-2">
                    <AwardIcon />
                  </span>
                  Key Achievements
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  {item.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-white">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-3 text-xs text-right text-white opacity-70">
              {selectedElement === item.id
                ? "Click to collapse"
                : "Click to see achievements"}
            </div>
          </TimelineElement>
        ))}

        {/* Final element - Future education */}
        <div
          className="flex justify-center mb-8"
          style={{
            opacity: visibleElements.includes(5) ? 1 : 0,
            transition: "opacity 0.6s ease-in-out",
            transitionDelay: "0.6s",
          }}
        >
          <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
            <GraduationIcon />
          </div>
        </div>
        <div
          className="text-center mb-16"
          style={{
            opacity: visibleElements.includes(5) ? 1 : 0,
            transition: "opacity 0.6s ease-in-out",
            transitionDelay: "0.8s",
          }}
        >
          <h3 className="text-lg font-semibold">Continuing Education</h3>
          <p className="text-sm text-gray-300">
            Looking forward to future learning opportunities
          </p>
        </div>
      </div>

      {/* Skills & Certifications */}
      <div
        className="mt-16 mb-8 text-center"
        style={{
          opacity: visibleElements.includes(5) ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
          transitionDelay: "1s",
        }}
      >
        <h3 className="text-3xl font-bold mb-8 text-green-400">
          Skills & Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <div className="flex justify-center mb-4 text-green-400 text-2xl">
              <MedalIcon />
            </div>
            <h4 className="text-xl font-semibold mb-2">Web Development</h4>
            <p className="text-gray-300 text-sm">
              HTML, CSS, JavaScript, React
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <div className="flex justify-center mb-4 text-yellow-400 text-2xl">
              <MedalIcon />
            </div>
            <h4 className="text-xl font-semibold mb-2">Science & Research</h4>
            <p className="text-gray-300 text-sm">
              Laboratory techniques, data analysis, report writing
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <div className="flex justify-center mb-4 text-blue-400 text-2xl">
              <MedalIcon />
            </div>
            <h4 className="text-xl font-semibold mb-2">Digital Design</h4>
            <p className="text-gray-300 text-sm">
              UI/UX fundamentals, graphic design basics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
