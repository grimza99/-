import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const IMAGES = {
  rock: rockImg,
  paper: paperImg,
  scissor: scissorImg,
};

function HandIcon({ value = "rock" }) {
  const src = IMAGES[value];
  return <img src={src} alt={value}></img>;
}

export default HandIcon;
