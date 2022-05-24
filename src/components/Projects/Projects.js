import ProjectCard from "./ProjectCard";
import SectionHeader from "../UI/SectionHeader";

import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <SectionHeader color="black" title="LATEST PROJECTS" />
      <div className="project-cards">
        <ProjectCard
          src="https://cdn-icons-png.flaticon.com/512/711/711284.png"
          title="LOREM PROJECT"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. asd se d"
        ></ProjectCard>
        <ProjectCard
          src="https://cdn-icons-png.flaticon.com/512/711/711284.png"
          title="LOREM PROJECT"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. asd se d"
        ></ProjectCard>
      </div>
    </section>
  );
};

export default Projects;
