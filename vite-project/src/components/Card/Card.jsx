import React from "react";
import "../Card/card.styles.css";
import { Link } from "react-router-dom";
function Card({ game }) {
  const { name, imagen, id, generos } = game;

  return (
    <Link to={`/home/${id}`} className="link">
      <div className="card">
        <img src={imagen} alt="imagen" className="imagen" />
        <div className="texto">
          <p className="name">{name}</p>
          <p className="gender">{generos && generos.join(", ")} </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
