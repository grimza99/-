import HandButton from "./HandButton.js";
function App() {
  const handleClick = (value) => console.log(value);
  return (
    <div>
      <HandButton value="rock" onClick={handleClick}></HandButton>
      <HandButton value="scissor" onClick={handleClick}></HandButton>
      <HandButton value="paper" onClick={handleClick}></HandButton>
    </div>
  );
}

export default App;
