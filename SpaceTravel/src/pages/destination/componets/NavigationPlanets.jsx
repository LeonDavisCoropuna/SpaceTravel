import React from "react";
import { Link } from "react-router-dom";

function NavigationPlanets() {
  return (
    <>
      <ul>
        <li>
          <Link to="mercury">Mercury</Link>
        </li>
        <li>
          <Link to="venus">Venus</Link>
        </li>
      </ul>
    </>
  );
}

export default NavigationPlanets;
