import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TechnicalSkills from "../components/TechnicalSkills";
import ProjectSection from "../components/ProjectSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import BlogSection from "../components/BlogSection";
import StatisticsSection from "../components/StatisticsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TechnicalSkills />
      <ProjectSection />
      <Testimonials />
      <ContactSection />
      <BlogSection />
      <StatisticsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
