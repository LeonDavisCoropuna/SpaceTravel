import React from "react";
import { destinations } from "../../data";
import Image from "../../components/Image";
import { Link } from "react-router-dom";
//import NavigationPlanets from "./componets/NavigationPlanets";
function Destination() {
  return (
    <div className="destinations">
      {Object.entries(destinations).map(([key, value], index) => (
        <div key={index}>
          <Link to={value.src}>
            {console.log(value.src)}
            <h2> {value.title}</h2>
            <Image url={value.img}/>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Destination;
