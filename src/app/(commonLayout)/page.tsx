"use client";

import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TechnicalSkills from "../components/TechnicalSkills";
import ProjectSection from "../components/ProjectSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import BlogSection from "../components/BlogSection";
import StatisticsSection from "../components/StatisticsSection";
import EducationalDescription from "../components/EducationalDescription";

const HomePage = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <Navbar />
      <HeroSection />
      <TechnicalSkills />
      <ProjectSection />
      <Testimonials />
      <ContactSection />
      <BlogSection />
      <StatisticsSection />
      <EducationalDescription />
    </div>
  );
};

export default HomePage;
