import { useState } from "react";
import emailjs from "emailjs-com";

import SectionHeader from "../UI/SectionHeader";
import Button from "../UI/Button";
import SocialLink from "../UI/SocialLink";
import NameInput from "./InputGroups/NameInput";
import EmailInput from "./InputGroups/EmailInput";
import MessageInput from "./InputGroups/MessageInput";

import "./Footer.css";

const isNameValid = (name) => {
  let regName = /^[ a-zA-Z\-\’]+$/;
  return regName.test(name) ? true : false;
};

const isEmailValid = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNameValid(name)) {
      setName("400");
      return;
    }

    if (!isEmailValid(email)) {
      console.log("error, email bad");
      return;
    }

    if (message.length === 0) {
      console.log("No message");
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, API_KEY).then(
      (result) => {
        alert("WEnt good");
        setIsSent(true);
      },
      (error) => {
        alert("bad");
      }
    );
    setName("start");
    setEmail("start");
    setMessage("start");
  };

  return (
    <section className="footer">
      <form className="contact-form" onSubmit={handleSubmit}>
        <SectionHeader color="black" title="LET'S GET IN TOUCH" />
        <NameInput passName={setName} />
        <EmailInput passEmail={setEmail} />
        <MessageInput passMessage={setMessage} />

        <Button type="submit">Submit</Button>
      </form>

      <SocialLink className="contact-info" media="email" />
      <span className="contact-info">(+46) 73 970 55 88</span>
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
