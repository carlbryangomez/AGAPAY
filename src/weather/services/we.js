import { DateTime } from "luxon";

// const API_KEY ="ffe63745a1e6cbad92e44b2bf6f0ea6a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=Caloocan&appid=6d055e39ee237af35ca066f35474e9df&units=metric"



const getWeatherData = () => {

  
    return fetch(BASE_URL)
    .then((res) => res.json())

    
};

const formatCurrentWeather = (data) => {
    const {
      coord:{ lat,
        lon},
       main:{temp,
        feels_like,
         temp_min,
          temp_max,
           humidity},
        name,
        dt,
       sys: {country,
        sunrise, 
        sunset},
      weather,
       wind:{speed},
    } = data;
    const { main: details, icon } = weather[0];
    return {
        lat,
        lon,
       temp,
        feels_like,
         temp_min,
          temp_max,
           humidity,
        name,
        dt,
       country,
        sunrise, 
        sunset,
       details,
       icon,
       speed,
    }
};

// const formatForcastWeather = (data) => {
//     let { timezone, daily, hourly } = data;
//     daily = daily.slice(1, 6).map(d => {
//         return {
//             title: formatToLocalTime(d.dt, timezone, 'ccc'),
//             temp: d.temp.day,
//             icon: d.weather[0].icon

//         }
//     });
//     hourly = hourly.slice(1, 6).map(d => {
//         return {
//             title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
//             temp: d.temp,
//             icon: d.weather[0].icon

//         }
//     });

//     return {
//         timezone, daily, hourly
//     };

// };

const getFormattedWeatherData = async () => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
     
     ).then(formatCurrentWeather);
    //  return formattedCurrentWeather
    // }

    
const { lat, lon} = formattedCurrentWeather;

//    const formattedForecastWeather = await getWeatherData('onecall',
//    {
//        lat,
//        lon,
//        exclude: 'current,minutely,alerts',
       
//     }).then(formatForcastWeather);

//   return {...formattedCurrentWeather, ...formattedForecastWeather
// };


};

const formatToLocalTime = (
    secs,
     zone,
      format = "cccc, dd  LLL yyyy' | Local time: 'hh:mm a"
      ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
 const iconUrlFromCode = (code) =>
`http://openweathermap.org/img/wn/${code}01d@2x.png`;

export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode};



