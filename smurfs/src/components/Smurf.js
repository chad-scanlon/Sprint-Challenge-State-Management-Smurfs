import React, { useContext } from "react";
import smurf from "../assets/smurf.jpg";

const Smurf = (props) => {
  console.log(props);
  return (
    <>
      <div className="smurf-box">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Height: {props.height}</p>
        <div className="smurf-img-box">
          <img className="smurf-img" src={smurf} />
        </div>
      </div>
    </>
  );
};

export default Smurf;
