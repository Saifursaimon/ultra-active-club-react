import React, { useEffect, useState } from "react";
import "./Main.css";
import Header from "../Header/Header";
import Card from "../Card/Card";
import User from "../User/User";
const Main = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseTime, setExerciseTime] = useState([]);
  useEffect(() => {
    fetch("Exercise.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  let newTime = [];
  const addExerciseTime = (time) => {
    newTime = [...exerciseTime, time];
    setExerciseTime(newTime);
  };
  return (
    <div className="main">
      <div className="exercise-container">
        <Header></Header>
        <div className="card-container">
          {exercises.map((exercise) => (
            <Card
              addExerciseTime={addExerciseTime}
              exercise={exercise}
              key={exercise.id}
            ></Card>
          ))}
        </div>
      </div>
      <div className="user-container">
        <User exerciseTime={exerciseTime}></User>
      </div>
    </div>
  );
};

export default Main;
