import "./SectionHeader.css";

const SectionHeader = (props) => {
  return <h2 className={`section-header ${props.color}`}>{props.title}</h2>;
};

export default SectionHeader;
