// Itinerary.js

import React from "react";
import "/src/Itinerary.css"; // Importa el archivo de estilos
import { destinations } from "../data.js";

function Itinerary({ itinerayPlanet }) {
  // Crear un array de días del itinerario
  const itineraryDays = destinations[itinerayPlanet.destination].days.filter(
    (e, index) => index < itinerayPlanet.duration
  );

  return (
    <div className="itinerary-container">
      <div className="sidebar">
        <div className="sidebar-tittle">
          <h2>Destination</h2>
        </div>
        <div className="sidebar-options">
          <p>
            {itinerayPlanet.destination.charAt(0).toUpperCase() +
              itinerayPlanet.destination.slice(1)}
          </p>
        </div>
        <div>
          <h2>Date: </h2>
          <div className="sidebar-options">
            <p>{JSON.stringify(itinerayPlanet.travelDate)}</p>
          </div>
        </div>
      </div>
      <div className="itinerary-content">
        <div className="itinerary-header">
          <h2>Travel Itinerary </h2>
        </div>
        <ul className="itinerary-days">
          {itineraryDays.map((day, index) => (
            <li key={index} className="itinerary-day">
              <h4>{day.header}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Itinerary;
