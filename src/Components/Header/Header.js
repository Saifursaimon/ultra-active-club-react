import React from "react";
import logo from "../../utilities/exercise.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img src={logo} alt=""></img>
        <h1>Ultra-Active-Club</h1>
      </div>
      <h2>Select Today's Exercise</h2>
    </div>
  );
};

export default Header;
