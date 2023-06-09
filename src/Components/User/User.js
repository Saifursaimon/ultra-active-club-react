import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userImg from "../../utilities/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import "./User.css";
const User = ({ exerciseTime }) => {
  let newExerciseTime = 0;
  for (const time of exerciseTime) {
    newExerciseTime = newExerciseTime + time;
  }
  const addBreakTime = (time, id) => {
    const timeField = document.getElementById(id);
    timeField.innerText = time;
  };
  const handleComplete = () => {
    toast.info("Congratulations You have completed your activities");
  };
  return (
    <div className="user">
      <div className="user-details">
        <img src={userImg} alt=""></img>
        <div>
          <h3 className="name">Saifur Rahman</h3>
          <p className="location">
            <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>{" "}
            <span> Kishoreganj,Bangladesh</span>
          </p>
        </div>
      </div>
      <div className="health-info">
        <div className="weight">
          <h3>
            65.7<sub>kg</sub>
          </h3>
          <p>Weight</p>
        </div>
        <div className="height">
          <h3>5.6</h3>
          <p>Height</p>
        </div>
        <div className="age">
          <h3>
            18<sub>yrs</sub>
          </h3>
          <p>Age</p>
        </div>
      </div>
      <div className="break">
        <h2>Add A Break</h2>
        <div className="seconds">
          <button
            href="10s"
            onClick={() => {
              addBreakTime("10 seconds", "B-time");
            }}
          >
            10s
          </button>
          <button
            href="20s"
            onClick={() => {
              addBreakTime("20 seconds", "B-time");
            }}
          >
            20s
          </button>
          <button
            href="30s"
            onClick={() => {
              addBreakTime("30 seconds", "B-time");
            }}
          >
            30s
          </button>
          <button
            href="40s"
            onClick={() => {
              addBreakTime("40 seconds", "B-time");
            }}
          >
            40s
          </button>
        </div>
      </div>
      <div className="exercise-detail">
        <h2>Exercise Details</h2>
        <div className="exercise-time">
          <p>Exercise Time :</p>
          <p>{newExerciseTime} seconds</p>
        </div>
        <div className="break-time">
          <p>Break Time :</p>
          <p id="B-time"></p>
        </div>
      </div>
      <button className="btn-completed" onClick={handleComplete}>
        Activity Completed
      </button>
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default User;
