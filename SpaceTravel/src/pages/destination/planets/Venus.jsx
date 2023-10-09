import React, { useState } from "react";
import { data } from "../../../data";
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
              src="https://thumbs.dreamstime.com/b/planeta-marte-el-rojo-aislado-en-fondo-negro-126552934.jpg"
              alt="Image: perra"
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
              <p class="nav-text destination-text">Info</p>
            </li>
            <li
              class={`destination ${sourse === 1 && "active"}`}
              onClick={(e) => handleClickSource(e, 1)}
            >
              <p class="nav-text destination-text light-blue">Mars</p>
            </li>
            <li
              class={`destination ${sourse === 2 && "active"}`}
              onClick={(e) => handleClickSource(e, 2)}
            >
              <p class="nav-text destination-text light-blue">Europa</p>
            </li>
            <li
              class={`destination ${sourse === 3 && "active"}`}
              onClick={(e) => handleClickSource(e, 3)}
            >
              <p class="nav-text destination-text light-blue">Titan</p>
            </li>
          </ul>

          <h2 class="heading-2" id="destinationHeading">
            {data.destinations[sourse].header}
          </h2>
          <p class="body-text light-blue" id="destinationDescription">
            {data.destinations[sourse].description}
          </p>
          <div class="line"></div>
          <div class="destinations__info">
            <div class="info">
              <h3 class="subheading-2 light-blue"> Avg. distance </h3>
              <p class="subheading-1" id="destinationDistance">
                {data.destinations[sourse].distance}
              </p>
            </div>
            <div class="info">
              <h3 class="subheading-2 light-blue"> Est. travel time </h3>
              <p class="subheading-1" id="destinationTime">
                {data.destinations[sourse].time}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Venus;
