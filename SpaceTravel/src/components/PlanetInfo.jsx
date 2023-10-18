import React, { useState } from "react";
import { destinations } from "../data.js";
//import "../../../assets/destination/image-mars.webp";


function PlanetInfo({item}) {
  const [sourse, setSourse] = useState(0);
  const handleClickSource = (e, index) => {
    e.preventDefault();
    setSourse(index);
  };
  return (
    <div>
      <div class="destinations">
        <aside>
          <main class="destinations__main"></main>
          <div class="destinations__img">
            <img
              src={destinations[item].days[sourse].img}
              alt="Image: mercury"
              width="100%"
            />
          </div>
        </aside>
        <section class="destinations__section">
          <ul class="destinations__names">
          {
            destinations[item].days.map((e,index)=>(
              <li
                class={`destination ${sourse === index && "active"}`}
                onClick={(e) => handleClickSource(e, index)}
                >
                <p class="nav-text destination-text">Day {index +1}</p>
              </li>
            ))
          }
          </ul>

          <h2 class="heading-2" id="destinationHeading">
            {destinations[item].days[sourse].header}
          </h2>
          <p class="body-text light-blue" id="destinationDescription">
            {destinations[item].days[sourse].description}
          </p>
          <div class="line"></div>
          <div class="destinations__info">
            <div class="info">
              <h3 class="subheading-2 light-blue"> Avg. distance </h3>
              <p class="subheading-1" id="destinationDistance">
              {destinations[item].distance} (astronomical units)
              </p>
            </div>
            <div class="info">
              <h3 class="subheading-2 light-blue"> Est. travel time </h3>
              <p class="subheading-1" id="destinationTime">
              {destinations[item].time}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PlanetInfo;
