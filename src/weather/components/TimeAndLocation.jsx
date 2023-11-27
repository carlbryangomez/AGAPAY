import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilCloudSun,
    UilSunset,
    UilSun


}  from '@iconscout/react-unicons';
import axios from 'axios'



import { useEffect } from 'react'

import { useState } from 'react'


import { DateTime } from "luxon";


function TimeAndLocation() {
  const [data, setData] = useState({
    celcius :"",
    name: '',
    humidity:"",
    speed: "",
    dt:-1,
    timezone: "",
    weather: "",
    country:""
})
useEffect(() =>{
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Caloocan&appid=6d055e39ee237af35ca066f35474e9df&units=metric';
    axios.get(apiUrl)
    .then(res => {
        console.log(res.data);
        setData ({
        ...data, 
        celcius: res.data.main.temp,
         name: res.data.name,
          humidity: res.data.main.humidity, 
        speed: res.data.wind.speed,
        dt: res.data.dt,
        timezone: res.data.timezone,
        weather: res.data.weather[0].main,
        country: res.data.sys.country   
       })
       
      })
      .catch (err => {console.log(err)});


}, []
)


const formatForcastWeather = (data) => {
let { timezone, daily, hourly } = data;
daily = daily.slice(1, 6).map(d => {
return {
    title: formatToLocalTime(d.dt, timezone, 'ccc'),
    temp: d.temp.day,
    icon: d.weather[0].icon

}
});
hourly = hourly.slice(1, 6).map(d => {
return {
    title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
    temp: d.temp,
    icon: d.weather[0].icon

}
});

return {
timezone, daily, hourly
};

};
return (
    <div>
        {/* <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
            {formatToLocalTime(data.dt,data.timezone)}
            </p>

        </div> */}
      <div className=' flex flex-row items-center justify-center my-3'>
        <p className='text-black text-4xl font-medium text-center font-poppins'>
          {data.name}, {data.country}
           </p>
      </div>
    </div>
  )
}
const formatToLocalTime = (
  secs,
   zone,
    format = "cccc, dd  LLL yyyy' | Local time: 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);




export {formatToLocalTime};

export default TimeAndLocation
