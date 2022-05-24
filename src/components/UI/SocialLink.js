import "./SocialLink.css";

const SocialLink = (props) => {
  switch (props.media) {
    case "linkedin":
      return (
        <a target="_blank" className="social-link" href={props.url}>
          <i class="fa-brands fa-linkedin"></i>
        </a>
      );
    case "github":
      return (
        <a target="_blank" className="social-link" href={props.url}>
          <i class="fa-brands fa-github-square"></i>
        </a>
      );
    default:
      return console.log("Couldn't find the Media given in SocialLink");
  }
};

export default SocialLink;
