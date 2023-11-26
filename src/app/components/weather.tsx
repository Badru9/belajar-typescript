"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<any>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://cuaca-gempa-rest-api.vercel.app/weather/jawa-barat/garut"
      );
      const weatherRes = response.data;
      setWeatherData(weatherRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const weatherCels = weatherData.params.find((id: any) => id.id === "tmax");

  const celcius = weatherCels.times.map((celcius: any) => {
    return celcius.celcius;
  });
  console.log(celcius);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-teal-500 w-1/2 mt-10 flex items-center justify-between">
      {/* {weatherData.map((data: any) => {
        return (
          <div key={data.id}>
            <p>{data.description}</p>
          </div>
        );
      })} */}
      <p>
        {weatherData.description}, {weatherData.domain}
      </p>
      <p>{celcius}</p>
    </div>
  );
}
