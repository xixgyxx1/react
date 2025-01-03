import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

const API_KEY = "b9c838ba0f09339c60b5dfb0dfaf2e98";
const CITY = ["Paris", "New york", "Tokyo", "Seoul"];

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState("false");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather}></WeatherBox>
          <WeatherButton
            cities={CITY}
            setCity={setCity}
            current={getCurrentLocation}
          />
        </div>
      )}
    </div>
  );
}

export default App;
