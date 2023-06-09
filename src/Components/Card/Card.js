import React from "react";
import "./Card.css";
const Card = ({ exercise }) => {
  const { img, name, age, info } = exercise;
  return (
    <div className="card">
      <img src={img} alt=""></img>
      <div className="info">
        <h3>{name}</h3>
        <p>{info}</p>
        <h5>For Age : {age}</h5>
      </div>
      <button className="btn-card">Add To List</button>
    </div>
  );
};

export default Card;
