import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "ffe63745a1e6cbad92e44b2bf6f0ea6a"; // Replace with your API key
const CITY_NAME = "Caloocan,PH";

const TimeAndDate = () => {
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    async function fetchTimestamp() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
        );

        setTimestamp(response.data.dt * 1000); // Convert to milliseconds
      } catch (error) {
        console.error("Error fetching timestamp", error);
      }
    }

    fetchTimestamp();
  }, []);

  return (
    <div>
      <p className="font-inter font-semibold">
        Date and Time:&nbsp;
        <span className="font-normal">
          {timestamp
            ? new Date(timestamp).toLocaleString("en-US", {
                timeZone: "Asia/Manila", // Set the timezone to Caloocan, Philippines
              })
            : "Loading..."}
        </span>
      </p>
    </div>
  );
};

export default TimeAndDate;
