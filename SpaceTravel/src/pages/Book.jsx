// Book.js

import React, { useState } from 'react';
import DestinationOptions from '../components/DestinationOptions';
import Itinerary from '../components/Itinerary';
import '/src/Book.css'; // Importa el archivo de estilos

function Book() {
  const [destination, setDestination] = useState('Earth');
  const [travelDate, setTravelDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [duration, setDuration] = useState(1);
  const [showItinerary, setShowItinerary] = useState(false);

  const handleDestinationChange = (selectedDestination) => {
    setDestination(selectedDestination);
  };

  const handleDateChange = (date) => {
    setTravelDate(date);
  };

  const handleAdultsChange = (e) => {
    setAdults(e.target.value);
  };

  const handleChildrenChange = (e) => {
    setChildren(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = () => {
    setShowItinerary(true);
  };

  return (
    <div className="container">
      {!showItinerary ? (
        <div className="form-section">
          <div className="destinations-section">
            <DestinationOptions
              selectedDestination={destination}
              onDestinationChange={handleDestinationChange}
            />
          </div>
          <div className="date-section">
            <div>
              <label>Date</label>
            </div>
            
            <input type="date" value={travelDate} onChange={(e) => handleDateChange(e.target.value)} />
          </div>
          <div className="adult-children-section">
            <div>
              <div>
                <label>Adults:</label>
              </div>
              <input type="number" value={adults} onChange={handleAdultsChange} />
            </div>
            <div>
              <div>
                <label>Children:</label>
              </div>
              <input type="number" value={children} onChange={handleChildrenChange} />
            </div>
          </div>
          <div className="days-section">
            <div>
              <label>Duration (days):</label>

            </div>
            <input type="number" value={duration} onChange={handleDurationChange} />
          </div>
        </div>
      ) : (
        <Itinerary destination={destination} duration={duration} />
      )}
      <div className="button-section">
        <button onClick={handleSubmit}>Book Now</button>
      </div>
    </div>
  );
}

export default Book;
