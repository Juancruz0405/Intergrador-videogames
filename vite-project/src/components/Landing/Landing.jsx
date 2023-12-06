import "../Landing/Landing.modules.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <h1 className="titulo">
        FIND YOUR VIDEOGAME <br /> OR CREATE ONE
      </h1>
      <Link to="/home">
        <button className="botonStart">START</button>
      </Link>
    </div>
  );
}

export default Landing;
