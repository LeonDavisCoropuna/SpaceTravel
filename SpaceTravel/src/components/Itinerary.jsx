// Itinerary.js

import React from 'react';
import '../App.css';

function Itinerary({ destination, duration }) {
  // Función para generar actividades de ejemplo
  const generateActivities = (day) => {
    // Puedes personalizar esto según las actividades reales que quieras incluir
    return (
      <ul>
        <li>Exploración del paisaje</li>
        <li>Visita a atracciones locales</li>
        <li>Actividades recreativas</li>
        {/* Agrega más actividades según sea necesario */}
      </ul>
    );
  };

  // Crear un array de días del itinerario
  const itineraryDays = Array.from({ length: duration }, (_, index) => index + 1);

  return (
    <div className="itinerary-container">
      <div className="sidebar">
        <h2>Destination</h2>
        <div className="sidebar-options">
          {/* Aquí puedes colocar opciones relacionadas con el destino */}
          <p>Option 1</p>
          <p>Option 2</p>
          {/* Agrega más opciones según sea necesario */}
        </div>
      </div>
      <div className="itinerary-content">
        <div className="itinerary-header">
          <h2>Itinerary for {destination}</h2>
          <p>Destination: {destination}</p>
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
