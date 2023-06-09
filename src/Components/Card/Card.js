import React from "react";
import "./Card.css";
const Card = ({ exercise, addExerciseTime }) => {
  const { img, name, age, info, time } = exercise;
  return (
    <div className="card">
      <img src={img} alt=""></img>
      <div className="info">
        <h3>{name}</h3>
        <p>{info}</p>
        <h5>For Age : {age}</h5>
        <p>Time Required : {time}s</p>
      </div>
      <button
        className="btn-card"
        onClick={() => {
          addExerciseTime(time);
        }}
      >
        Add To List
      </button>
    </div>
  );
};

export default Card;
