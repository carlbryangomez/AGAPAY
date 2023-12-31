
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from 'react';
import getWeatherData from './services/weatherServices';

function App() {


  const [query, setQuery] = useState({q: 'berlin'})
  const [units, setUnit] = useState('metric')
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    
  const fetchWeather = async () => {
    await getFormattedWeatherData({...query,units}).then(
      (data) => { 
        setWeather(data);
      });
      
    
  
  };
  fetchWeather();


  },[query,units] )

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
     
     {/* <TopButtons setQuery={setQuery}/> */}
     <Inputs setQuery={setQuery} units={units} setUnits />


     {weather && (
      <div>
       <TimeAndLocation weather={weather} />
       <Temperature weather={weather} />
       <Forecast title="Hourly Forecast" items={weather.hourly}/>
       <Forecast title="Daily Forecast"items={weather.daily}/>
</div>

     )}

    
    </div>
  );
}


export default App;
