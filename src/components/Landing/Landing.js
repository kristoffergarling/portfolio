import SocialLink from "../UI/SocialLink";

import "./Landing.css";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-content">
        <div className="landing-content__info">
          <p>Hello, I'm</p>
          <h1>KRISTOFFER GÄRLING</h1>
          <hr />
          <p>
            Data- and System Science Student at Stockholm University who's
            passionate about developing responsive websites with reusable &
            clean code.
          </p>
          <SocialLink
            url="https://github.com/kristoffergarling"
            media="github"
          />
          <SocialLink
            url="https://www.linkedin.com/in/kristoffer-g%C3%A4rling-bengtsson-4760b1203/"
            media="linkedin"
          />
        </div>
        <div className="landing-content__img">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQEomRtx5a5FhQ/profile-displayphoto-shrink_800_800/0/1633282544018?e=1658966400&v=beta&t=ptfPgY7zZsOLHHuxK_VUVYL6EkllvSln7zN9PTC0IHc"
            alt="profile-pic"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Landing;
