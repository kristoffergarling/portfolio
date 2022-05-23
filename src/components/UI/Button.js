import classes from "./Button.module.css";

const STYLES = [classes["btn--primary"], classes["btn--ouline"]];

const SIZES = [classes["btn--medium"], classes["btn--large"]];

const Button = (props) => {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(props.buttonStyle)
    ? props.buttonStyle
    : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
