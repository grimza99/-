import HandIcon from "./HandIcon";

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <>
      <button onClick={handleClick}>
        <HandIcon value={value}></HandIcon>
      </button>
    </>
  );
}

export default HandButton;
