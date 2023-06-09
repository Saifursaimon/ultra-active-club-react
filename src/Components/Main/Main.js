import React, { useEffect, useState } from "react";
import "./Main.css";
import Header from "../Header/Header";
import Card from "../Card/Card";
import User from "../User/User";
const Main = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("Exercise.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  return (
    <div className="main">
      <div className="exercise-container">
        <Header></Header>
        <div className="card-container">
          {exercises.map((exercise) => (
            <Card exercise={exercise} key={exercise.id}></Card>
          ))}
        </div>
      </div>
      <div className="user-container">
        <User></User>
      </div>
    </div>
  );
};

export default Main;
