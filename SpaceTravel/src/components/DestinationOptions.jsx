import React from 'react';
import '/src/DestinationOptions.css'; // Ajusta la ruta según tu estructura de archivos

const DestinationOptions = ({ selectedDestination, onDestinationChange }) => {
  const destinations = ['Earth', 'Mars', 'Venus', 'Jupiter']; // Ajusta la lista según tus necesidades

  return (
    <div className="destination-container">
      <label className="destination-label">Destination:</label>
      <select
        className="destination-select"
        value={selectedDestination}
        onChange={(e) => onDestinationChange(e.target.value)}
      >
        {destinations.map((destination) => (
          <option key={destination} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationOptions;
