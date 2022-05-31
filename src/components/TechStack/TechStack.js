import SectionHeader from "../UI/SectionHeader";

import "./TechStack.css";

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="color-overlay">
        <SectionHeader title="TECH STACK" color="white" />
        <div className="techs">
          <div className="tech-group">
            <i className="devicon-html5-plain"></i>
            <span>HTML</span>
          </div>
          <div className="tech-group">
            <i className="devicon-css3-plain"></i>
            <span>CSS</span>
          </div>
          <div className="tech-group">
            <i className="devicon-javascript-plain"></i>
            <span>JAVASCRIPT</span>
          </div>
          <div className="tech-group">
            <i className="devicon-bootstrap-plain"></i>
            <span>BOOTSTRAP</span>
          </div>
          <div className="tech-group">
            <i className="devicon-git-plain"></i>
            <span>GIT</span>
          </div>
          <div className="tech-group">
            <i className="devicon-react-original"></i>
            <span>REACT</span>
          </div>
          <div className="tech-group">
            <i className="devicon-nodejs-plain"></i>
            <span>NODEJS</span>
          </div>
          <div className="tech-group">
            <i className="devicon-mongodb-plain"></i>
            <span>MONGODB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
