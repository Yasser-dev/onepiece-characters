import React from "react";
import "./card.styles.css";
export const Card = (props) => (
  <div className="card-container">
    <img src={props.character.image_url} alt={props.character.name} />
    <h2>{props.character.name}</h2>
    <p>{props.character.role}</p>
  </div>
);
