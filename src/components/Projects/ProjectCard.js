import "./ProjectCard.css";
import Button from "../UI/Button";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.src} alt="project-image"></img>

      <div className="project-card__text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>

      <div className="project-card__links">
        <Button>
          <i className="fab fa-github"></i>
          <span> Code</span>
        </Button>
        <Button>
          <i className="fa-solid fa-laptop-code"></i>
          <span> Demo</span>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
