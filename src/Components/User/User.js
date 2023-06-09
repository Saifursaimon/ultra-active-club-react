import React from "react";
import userImg from "../../utilities/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import "./User.css";
const User = () => {
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
          <a href="">10s</a>
          <a href="">20s</a>
          <a href="">30s</a>
          <a href="">40s</a>
        </div>
      </div>
    </div>
  );
};

export default User;
