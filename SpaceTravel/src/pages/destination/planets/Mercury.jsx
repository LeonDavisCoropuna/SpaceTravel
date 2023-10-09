import React from 'react'

export default function Mercury() {
  return (
    <div>
      <div class="destinations">
        <aside>
          <main class="destinations__main">
            <h1 class="heading-5">
              <span class="opacity-5">01</span> Pick your destination
            </h1>
          </main>
          <div class="destinations__img">
            <img src="../assets/destination/image-moon.png" alt="Image: Moon" width="100%" />
          </div>
        </aside>
        <section class="destinations__section">
          <ul class="destinations__names">
            <li class="destination active">
              <p class="nav-text destination-text">Moon</p>
            </li>
            <li class="destination">
              <p class="nav-text destination-text light-blue">Mars</p>
            </li>
            <li class="destination">
              <p class="nav-text destination-text light-blue">Europa</p>
            </li>
            <li class="destination">
              <p class="nav-text destination-text light-blue">Titan</p>
            </li>
          </ul>
          <h2 class="heading-2" id="destinationHeading"> Moon </h2>
          <p class="body-text light-blue" id="destinationDescription"> See our planet as you’ve never seen it before. A
            perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some
            history by visiting the Luna 2 and Apollo 11 landing sites. </p>
          <div class="line"></div>
          <div class="destinations__info">
            <div class="info">
              <h3 class="subheading-2 light-blue"> Avg. distance </h3>
              <p class="subheading-1" id="destinationDistance"> 384,400 km </p>
            </div>
            <div class="info">
              <h3 class="subheading-2 light-blue"> Est. travel time </h3>
              <p class="subheading-1" id="destinationTime"> 3 days </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

 