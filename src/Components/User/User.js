import React from "react";
import userImg from "../../utilities/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import "./User.css";
const User = () => {
  const addBreakTime = (time) => {
    const timeField = document.getElementById("time");
    timeField.innerText = time;
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
              addBreakTime("10 seconds");
            }}
          >
            10s
          </button>
          <button
            href="20s"
            onClick={() => {
              addBreakTime("20 seconds");
            }}
          >
            20s
          </button>
          <button
            href="30s"
            onClick={() => {
              addBreakTime("30 seconds");
            }}
          >
            30s
          </button>
          <button
            href="40s"
            onClick={() => {
              addBreakTime("40 seconds");
            }}
          >
            40s
          </button>
        </div>
      </div>
      <div className="exercise-detail">
        <h2>Exercise Details</h2>
        <div className="break-time">
          <p>Break Time :</p>
          <p id="time"></p>
        </div>
      </div>
      <button className="btn-completed">Activity Completed</button>
    </div>
  );
};

export default User;
