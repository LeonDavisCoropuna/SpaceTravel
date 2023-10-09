import React from "react";
import NavigationPlanets from "./componets/NavigationPlanets";
function Destination() {
  return (
    <div>
        <h1>Planetas</h1>
        <h2>Deberia ser una lista desplegable</h2>
        <img src="data:image/png;base64,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" alt="perra"/>
      <NavigationPlanets />
    </div>
  );
}

export default Destination;