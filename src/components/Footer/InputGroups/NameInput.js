import { useState, useEffect } from "react";
import ErrorSpan from "../ErrorSpan";

const NameInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState("start");

  useEffect(() => {
    const input = setTimeout(() => {
      isNameValid(name) ? setNameIsValid(true) : setNameIsValid(false);
    }, 500);

    return () => {
      clearTimeout(input);
    };
  }, [name]);

  const isNameValid = (name) => {
    if (nameIsValid !== "start") {
      let regName = /^[ a-zA-Z\-\’]+$/;
      return regName.test(name) ? true : false;
    }

    return true;
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    props.passName(e.target.value);
  };

  return (
    <div className="input-group">
      <input
        className={nameIsValid === false ? "invalid-input" : ""}
        onChange={handleNameChange}
        type="text"
        placeholder="Name"
        value={name}
        name="name"
      />
      {nameIsValid === false && (
        <ErrorSpan>Please, enter a valid name</ErrorSpan>
      )}
    </div>
  );
};

export default NameInput;
