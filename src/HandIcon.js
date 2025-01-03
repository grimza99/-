import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const IMAGES = {
  rock: rockImg,
  paper: paperImg,
  scissor: scissorImg,
};

function HandIcon({ value = "rock", className = "" }) {
  const src = IMAGES[value];
  return <img className={className} src={src} alt={value}></img>;
}

export default HandIcon;
