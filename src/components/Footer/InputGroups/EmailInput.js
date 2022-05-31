import { useState, useEffect } from "react";
import ErrorSpan from "../ErrorSpan";

const EmailInput = (props) => {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("start");

  useEffect(() => {
    const input = setTimeout(() => {
      isEmailValid(email) ? setEmailIsValid(true) : setEmailIsValid(false);
    }, 3000);

    return () => {
      clearTimeout(input);
      if (isEmailValid(email)) {
        setEmailIsValid(true);
      }
    };
  }, [email]);

  const isEmailValid = (email) => {
    if (emailIsValid !== "start") {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    return true;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    props.passEmail(e.target.value);
  };

  return (
    <div className="input-group">
      <input
        className={emailIsValid === false ? "invalid-input" : ""}
        onChange={handleEmailChange}
        type="email"
        placeholder="Email"
        value={email}
        name="email"
      />
      {emailIsValid === false && (
        <ErrorSpan>Please, enter a valid email adress</ErrorSpan>
      )}
    </div>
  );
};

export default EmailInput;
