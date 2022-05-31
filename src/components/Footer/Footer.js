import { useState } from "react";

import SectionHeader from "../UI/SectionHeader";
import Button from "../UI/Button";
import SocialLink from "../UI/SocialLink";

import "./Footer.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    window.location = "mailto:kristoffer.g.bengtsson@gmail.com";
  };

  return (
    <section className="footer">
      <form
        className="contact-form"
        action="mailto:kristoffer.g.bengtsson@gmail.com"
        method="get"
      >
        <SectionHeader color="black" title="LET'S GET IN TOUCH" />
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email"></input>
        <textarea rows="5" placeholder="Message"></textarea>
        <Button type="submit">Submit</Button>
      </form>
      <SocialLink media="email" />
      <span>(+46) 73 970 55 88</span>
      <div>
        <SocialLink url="https://github.com/kristoffergarling" media="github" />
        <SocialLink
          url="https://www.linkedin.com/in/kristoffer-g%C3%A4rling-bengtsson-4760b1203/"
          media="linkedin"
        />
      </div>
    </section>
  );
};
export default Footer;
