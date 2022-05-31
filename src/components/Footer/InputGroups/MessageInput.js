import { useState, useEffect } from "react";
import ErrorSpan from "../ErrorSpan";

import "./MessageInput.css";

const MessageInput = (props) => {
  const [message, setMessage] = useState("");
  const [messageIsValid, setMessageIsValid] = useState("start");

  useEffect(() => {
    const input = setTimeout(() => {
      isMessageValid() ? setMessageIsValid(true) : setMessageIsValid(false);
    }, 100);

    return () => {
      clearTimeout(input);
    };
  }, [message]);

  const isMessageValid = () => {
    if (messageIsValid !== "start") {
      return message.length > 0 ? true : false;
    }
    return true;
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    props.passMessage(e.target.value);
  };

  return (
    <div className="input-group">
      <textarea
        className={
          messageIsValid === false
            ? "message-input invalid-input"
            : "message-input"
        }
        onChange={handleMessageChange}
        rows="5"
        placeholder="Message"
        value={message}
        name="message"
      ></textarea>
      {messageIsValid === false && (
        <ErrorSpan>Please, enter a message</ErrorSpan>
      )}
    </div>
  );
};

export default MessageInput;
