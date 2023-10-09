import React, { useState } from "react";
import { destinations } from "../../../data";
import "../../../assets/destination/image-mars.webp";
function Venus() {
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
              src={destinations.mercury[sourse].img}
              alt="Image: mercury"
              width="100%"
            />
          </div>
        </aside>
        <section class="destinations__section">
          <ul class="destinations__names">
            <li
              class={`destination ${sourse === 0 && "active"}`}
              onClick={(e) => handleClickSource(e, 0)}
            >
              <p class="nav-text destination-text">Day 1</p>
            </li>
            <li
              class={`destination ${sourse === 1 && "active"}`}
              onClick={(e) => handleClickSource(e, 1)}
            >
              <p class="nav-text destination-text light-blue">Day 2</p>
            </li>
            <li
              class={`destination ${sourse === 2 && "active"}`}
              onClick={(e) => handleClickSource(e, 2)}
            >
              <p class="nav-text destination-text light-blue">Day 3</p>
            </li>
            <li
              class={`destination ${sourse === 3 && "active"}`}
              onClick={(e) => handleClickSource(e, 3)}
            >
              <p class="nav-text destination-text light-blue">Day 4</p>
            </li>
          </ul>

          <h2 class="heading-2" id="destinationHeading">
            {destinations.mercury[sourse].header}
          </h2>
          <p class="body-text light-blue" id="destinationDescription">
            {destinations.mercury[sourse].description}
          </p>
          <div class="line"></div>
          <div class="destinations__info">
            <div class="info">
              <h3 class="subheading-2 light-blue"> Avg. distance </h3>
              <p class="subheading-1" id="destinationDistance">
                0.68 AU (astronomical units)
              </p>
            </div>
            <div class="info">
              <h3 class="subheading-2 light-blue"> Est. travel time </h3>
              <p class="subheading-1" id="destinationTime">
                40 Days
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Venus;
