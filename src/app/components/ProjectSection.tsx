"use client";

import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      title: "Animal Bazaar",
      description:
        "A full-stack e-commerce application for buying and selling animals, with admin and user roles, real-time filtering, and secure payment integration.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
      clientCode: "https://github.com/sumon-dev/animal-bazaar-client",
      serverCode: "https://github.com/sumon-dev/animal-bazaar-server",
      liveLink: "https://animal-bazzar-client.vercel.app/",
      image: "/assets/animal-bazaar.png",
    },
    {
      title: "Travel Tips & Guides",
      description:
        "A platform for sharing travel tips, guides, and stories with social interaction features like comments, likes, and sharing.",
      technologies: ["React", "Redux", "Cloudinary", "Stripe"],
      clientCode: "https://github.com/sumon-dev/travel-tips-client",
      serverCode: "https://github.com/sumon-dev/travel-tips-server",
      liveLink: "https://travel-tips.com",
      image: "/assets/travel-tips.png",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-14 text-white" id="project">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
        My Projects
      </h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default ProjectSection;
