import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, current }) => {
  return (
    <div className="button-container">
      <Button variant="success" onClick={() => current()}>
        Current Location
      </Button>
      {cities.map((city, index) => (
        <Button variant="success" key={index} onClick={() => setCity(city)}>
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton; 
