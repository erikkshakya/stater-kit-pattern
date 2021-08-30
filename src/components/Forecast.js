import React, { useState } from "react";

const Forecast = () => {
  const [responseObj, setResponseObj] = useState({});

  function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/find?q=london", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "a8b1801ffamsh47d787e78ebfb46p1fe1f7jsn87a0687dde07",
      },
    })
      .then((response) => response.json())
      .then((response) => setResponseObj(response))
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <div>{responseObj && JSON.stringify(responseObj)}</div>
      <button onClick={getForecast}>Get Forecast</button>
    </div>
  );
};

export default Forecast;
