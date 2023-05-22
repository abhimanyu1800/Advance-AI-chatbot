import React from "react";
import { Link } from "react-router-dom";
import "./css/Prompt.css";

const Prompt = () => {
  return (
    <div className="loading-container">
      <h3 className="loading-content">
        <Link to={"/login"}> Please Log In to Continue</Link>
      </h3>
    </div>
  );
};

export default Prompt;
