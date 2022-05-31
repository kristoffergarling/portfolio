import { Link } from "react";

import "./SocialLink.css";

const SocialLink = (props) => {
  switch (props.media) {
    case "linkedin":
      return (
        <a target="_blank" className="social-link" href={props.url}>
          <i className="fa-brands fa-linkedin"></i>
        </a>
      );
    case "github":
      return (
        <a target="_blank" className="social-link" href={props.url}>
          <i className="fa-brands fa-github-square"></i>
        </a>
      );
    case "email":
      return (
        <span
          className={`sendEmail ${props.className}`}
          onClick={() =>
            (window.location.href = "mailto:kristoffer.g.bengtsson@gmail.com")
          }
        >
          KRISTOFFER.G.BENGTSSON@GMAIL.COM
        </span>
      );
    default:
      return console.log("Couldn't find the Media given in SocialLink");
  }
};

export default SocialLink;
