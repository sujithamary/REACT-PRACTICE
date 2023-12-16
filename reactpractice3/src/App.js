import React from "react"
import StateClassComponent from "./State/StateClassComponent.js";
import StateFunctionalComponent from "./State/StateFunctionalComponent.js";
import StateWirhObj from "./State/StateholdsObj.js";

function App() {
  return(
    <div>
      <StateClassComponent/>
      <StateFunctionalComponent/>
      <StateWirhObj/>
    </div>
  );
}

export default App;