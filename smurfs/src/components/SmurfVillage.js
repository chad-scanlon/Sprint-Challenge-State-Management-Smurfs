import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Smurf from "./Smurf";

import { InitialContext } from "../contexts/InitialContext";

const SmurfVillage = () => {
  const { smurfs, addSmurf } = useContext(InitialContext);
  console.log(smurfs);
  return (
    <>
      <div className="village">
        <h1>The Village</h1>
        {smurfs.map((smurf) => (
          <Smurf
            key={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        ))}

        <Link to="/">
          <button className="go-home-button">Home</button>
        </Link>
      </div>
    </>
  );
};

export default SmurfVillage;
