import "./ErrorSpan.css";

const ErrorSpan = (props) => {
  return <span className="error-span">{props.children}</span>;
};

export default ErrorSpan;
