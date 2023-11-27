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


function Temperature() {
    
    const [data, setData] = useState({
        celcius :"",
        name: '',
        humidity:"",
        speed: "",
        dt:0,
        timezone: "",
        weather: "",
        country:"",
        feels_like: "",
        sunrise: 0,
        sunset: 0,
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
            country: res.data.sys.country,
            feels_like: res.data.main.feels_like,
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset
 
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
        <div className=' flex flex-row items-center justify-center sm:gap-10 gap-3 font-poppins  text-black py-3'>
            {/* <img src="https://openweathermap.org/img/wn/2x.png" alt="" className='w-20' /> */}
            <p className='text-5xl font-poppins '>{Math.round(data.celcius)}°C</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature  size={18} className="mr-1" />
                    Real Fell:
                    <span className='font-medium ml-1'>{Math.round(data.feels_like)}°C</span> 
                        </div>
                        <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear  size={18} className="mr-1" />
                   Humidity:
                    <span className='font-medium ml-1'>{Math.round(data.humidity)}%</span> 
                        </div>
                        <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1" />
                    Wind:
                    <span className='font-medium ml-1'>{Math.round(data.speed)}km/h</span> 
                        </div>
            </div>
        </div>

        {/* <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun />
            <p className='font-light'>Rise:{" "} 
            <span className='font-medium ml-1'>{formatToLocalTime(data.sunrise,data.timezone,'hh:mm a')}</span>
             </p>
             <p className='font-light'>|</p>
             <UilSunset />
            <p className='font-light'>Set:{" "} 
            <span className='font-medium ml-1'>{formatToLocalTime(data.sunset,data.timezone,'hh:mm a')}</span>
             </p>
             <p className='font-light'>|</p>
             <UilArrowUp />
            <p className='font-light'>High:{" "}
             <span className='font-medium ml-1'></span>
             </p>
             <p className='font-light'>|</p>
             <UilArrowDown />
            <p className='font-light'>Low:{" "}
             <span className='font-medium ml-1'></span>
             </p>
          

        </div> */}
      
    </div>
  )
}
const formatToLocalTime = (
    secs,
     zone,
      format = "cccc, dd  LLL yyyy' | Local time: 'hh:mm a"
      ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
      const formatToLocalTime1 = (
        secs,
         zone,
          format = "Local time: 'hh:mm a"
          ) => DateTime.toFormat(format);




export {formatToLocalTime};

export default Temperature
