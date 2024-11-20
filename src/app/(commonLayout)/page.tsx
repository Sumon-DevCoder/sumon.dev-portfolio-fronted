import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TechnicalSkills from "../components/TechnicalSkills";
import ProjectSection from "../components/ProjectSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TechnicalSkills />
      <ProjectSection />
    </div>
  );
};

export default HomePage;
