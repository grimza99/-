import HandButton from "./HandButton.js";
import { useState } from "react";
import { compareHand, generateRandomHand } from "./utils.js";
import HandIcon from "./HandIcon.js";
import Button from "./Button.js";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부 ";
}
function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand("INITIAL_VALUE");
    setOtherHand("INITIAL_VALUE");
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handelBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10; //나머지 연산
    if (num < 1) num = 1; // 내림 연산
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        {score} : {otherScore}
      </div>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <input
          onChange={handelBetChange}
          type="number"
          value={bet}
          min={1}
          max={9}
        ></input>
      </div>
      <p>승부 기록: {gameHistory.join(", ")}</p>
      <div>
        <HandButton value="rock" onClick={handleButtonClick}></HandButton>
        <HandButton value="scissor" onClick={handleButtonClick}></HandButton>
        <HandButton value="paper" onClick={handleButtonClick}></HandButton>
      </div>
    </div>
  );
}

export default App;
