import React, { useEffect } from 'react';
import '/src/DestinationOptions.css'; // Ajusta la ruta según tu estructura de archivos
import { destinations } from "../data.js";



const DestinationOptions = ({ itinerayPlanet, handleChangeItinerary }) => {
  
  const properties  = Object.entries(destinations)
  const planets = []
  for(const [propertie, value] of properties){
    planets.push(value.title)
  }
  
  const handleChange = e => { console.log(e.target.value); handleChangeItinerary({...itinerayPlanet, destination:"Aldo gil"})}

  return (
    <div className="destination-container">
      <label className="destination-label">Destination:</label>
      <select
        className="destination-select"
        value={itinerayPlanet.destination}
        onChange={handleChange}
      >
        {planets.map((destination) => (
          <option key={destination} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationOptions;
