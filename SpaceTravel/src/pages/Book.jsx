// Book.js

import React, { useState } from "react";
//import DestinationOptions from '../components/DestinationOptions';
import Itinerary from "../components/Itinerary";
import "/src/Book.css"; // Importa el archivo de estilos
import { destinations } from "../data.js";
import "/src/DestinationOptions.css"; // Ajusta la ruta según tu estructura de archivos

function Book() {
  const [showItinerary, setShowItinerary] = useState(false);

  const [itinerayPlanet, setItineraryPlanet] = useState({
    travelDate: new Date(),
    adults: 0,
    children: 0,
    duration: 0,
    destination: "venus",
  });

  const handleChangeItinerary = (e) => {
    setItineraryPlanet({ ...itinerayPlanet, [e.target.name]: e.target.value });
  };

  const handleDestinationChange = (selectedDestination) => {
    setDestination(selectedDestination);
  };

  const handleSubmit = () => {
    console.log(itinerayPlanet);
    setShowItinerary(true);
  };

  const properties = Object.entries(destinations);
  const planets = [];
  for (const [propertie, value] of properties) {
    planets.push(propertie);
  }
  return (
    <div className="container">
      {!showItinerary ? (
        <div className="form-section">
          <div className="destinations-section">
            <div className="destination-container">
              <label className="destination-label">Destination:</label>
              <select
                className="destination-select"
                value={itinerayPlanet.destination}
                onChange={handleChangeItinerary}
                name="destination"
              >
                {planets.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination.charAt(0).toUpperCase() + destination.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="date-section">
            <div>
              <label>Date</label>
            </div>

            <input
              type="date"
              value={itinerayPlanet.travelDate}
              name="travelDate"
              onChange={handleChangeItinerary}
            />
          </div>
          <div className="adult-children-section">
            <div>
              <div>
                <label>Adults:</label>
              </div>
              <input
                type="number"
                value={itinerayPlanet.adults}
                name="adults"
                onChange={handleChangeItinerary}
              />
            </div>
            <div>
              <div>
                <label>Children:</label>
              </div>
              <input
                type="number"
                value={itinerayPlanet.children}
                name="children"
                onChange={handleChangeItinerary}
              />
            </div>
          </div>
          <div className="days-section">
            <div>
              <label>Duration (days):</label>
            </div>
            <input
              type="number"
              value={itinerayPlanet.duration}
              name="duration"
              onChange={handleChangeItinerary}
            />
          </div>
        </div>
      ) : (
        <Itinerary itinerayPlanet={itinerayPlanet} />
      )}
      <div className="button-section">
        <button onClick={handleSubmit}>Book Now</button>
      </div>
    </div>
  );
}

export default Book;
