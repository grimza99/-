import HandIcon from "./HandIcon";
import "./style/HandButton.css";

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <>
      <button className="HandButton" onClick={handleClick}>
        <HandIcon className="HandButton-icon" value={value}></HandIcon>
      </button>
    </>
  );
}

export default HandButton;
