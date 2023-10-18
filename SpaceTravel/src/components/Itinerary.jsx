// Itinerary.js

import React from 'react';
import '../App.css';
import { destinations } from "../data.js";

function Itinerary({ destination, duration }) {
  // Función para generar actividades de ejemplo
  
  
  const generateActivities = (day, planet) => {
    // Puedes personalizar esto según las actividades reales que quieras incluir
    
    return (
      <ul>
        <li>{destinations[planet].day[day]}</li>
        
        {/* Agrega más actividades según sea necesario */}
      </ul>
    );
  };

  // Crear un array de días del itinerario
  const itineraryDays = destinations[destination.destination].fillter((e,index)=>index < duration? e: null)
  console.log(itineraryDays)


  return (
    <div className="itinerary-container">
      <div className="sidebar">
        <h2>Destination</h2>
        <div className="sidebar-options">          
          <p>{destination.destination}</p>

        </div>
      </div>
      <div className="itinerary-content">
        <div className="itinerary-header">
          <h2>Travel Itinerary </h2>
          
        </div>
        <div className="itinerary-days">
          {itineraryDays.map((day) => (
            <div key={day} className="itinerary-day">
              <h4>Day {day}</h4>
              <div className="itinerary-activities">{generateActivities(day)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Itinerary;
