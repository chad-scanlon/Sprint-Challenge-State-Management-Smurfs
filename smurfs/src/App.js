import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SmurfHome from "./components/SmurfHome";
import SmurfForm from "./components/SmurfForm";
import SmurfVillage from "./components/SmurfVillage";
import { VillageContext } from "./contexts/VillageContext";
import { InitialContext } from "./contexts/InitialContext";
import axios from "axios";

import "./App.css";

function App() {
  const [smurfs, setSmurfs] = useState([]);
  const [village, setVillage] = useState([]);
  const addSmurf = (smurf) => {
    setVillage([...village, smurf]);
  };

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs").then((response) => {
      console.log(response);
      setSmurfs(response.data);
    });
  }, []);
  return (
    <>
      <div className="App">
        <InitialContext.Provider value={{ smurfs, addSmurf }}>
          <VillageContext.Provider value={village}>
            <Route exact path="/">
              <SmurfHome />
            </Route>
            <Route exact path="/smurf-form">
              <SmurfForm />
            </Route>
            <Route exact path="/smurf-village">
              <SmurfVillage village={village} />
            </Route>
          </VillageContext.Provider>
        </InitialContext.Provider>
      </div>
    </>
  );
}

export default App;
