import React from "react";
import { Link } from "react-router-dom";

const SmurfHome = () => {
  return (
    <div className="smurf-home">
      <Link to="/smurf-village">
        <button className="home-button">See The Smurfs!</button>
      </Link>
      <Link to="/smurf-form">
        <button className="home-button">Add a smurf</button>
      </Link>
    </div>
  );
};

export default SmurfHome;
