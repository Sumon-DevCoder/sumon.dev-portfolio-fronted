"use client";

import { useGetprojectQuery } from "@/redux/features/project/projectApi";
import ProjectCard from "./ProjectCard";
import { TProject } from "@/types/types.project";

const ProjectSection = () => {
  const { data } = useGetprojectQuery({});

  const projectData = data?.data?.result || [];

  return (
    <section className="py-16 px-6 md:px-8 text-white" id="project">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
        My Projects
      </h2>
      {projectData.map((project: TProject) => (
        <ProjectCard key={project?._id} project={project} />
      ))}
    </section>
  );
};

export default ProjectSection;
