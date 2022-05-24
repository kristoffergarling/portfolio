import SectionHeader from "../UI/SectionHeader";

import "./TechStack.css";

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="color-overlay">
        <SectionHeader title="TECH STACK" color="white" />
        <div className="techs">
          <i class="devicon-html5-plain"></i>
          <i class="devicon-css3-plain"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-bootstrap-plain"></i>
          <i class="devicon-git-plain"></i>
          <i class="devicon-react-original"></i>
          <i class="devicon-nodejs-plain"></i>
          <i class="devicon-mongodb-plain"></i>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
