import HandButton from "./HandButton.js";
import { useState } from "react";
import { compareHand, generateRandomHand } from "./utils.js";
import HandIcon from "./HandIcon.js";
import Button from "./Button.js";
function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패비";
  return "무승부 ";
}
function App() {
  const [hand, setHand] = useState("rock");
  const [otherHand, setOtherHand] = useState("rock");

  const handleButtonClick = (nextHand) => {
    setHand(nextHand);
    setOtherHand(generateRandomHand());
  };

  const handleClearClick = () => {
    setHand("rock");
    setOtherHand("rock");
  };
  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand}></HandIcon>
        VS
        <HandIcon value={otherHand}></HandIcon>
      </div>
      <HandButton value="rock" onClick={handleButtonClick}></HandButton>
      <HandButton value="scissor" onClick={handleButtonClick}></HandButton>
      <HandButton value="paper" onClick={handleButtonClick}></HandButton>
    </div>
  );
}

export default App;
