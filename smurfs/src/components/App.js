import React from "react";
import ReactDOM from "react-dom";

import SmurfVillage from "./SmurfVillage";
import SmurfOnboarding from "./SmurfOnboarding";

export default function App() {
  return (
    <div className="App">
      <h1>SMURFS</h1>
      <SmurfOnboarding />
      <SmurfVillage />
    </div>
  );
}