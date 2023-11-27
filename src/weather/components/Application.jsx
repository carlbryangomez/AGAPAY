



import { useState } from 'react';
import Inputs from './Inputs';
import { useEffect } from 'react';
import getFormattedWeatherData from '../services/weatherServices';
import TimeAndLocation from './TimeAndLocation';
import Temperature from './Temperature';
import Forecast from './Forecast';


function Application() {


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
    <div className="mx-auto flex flex-col w-full max-w-5xl  h-fit  sm:rounded-t-lg rounded-t-lg ">
     
     {/* <TopButtons setQuery={setQuery}/> */}
     <Inputs setQuery={setQuery} units={units} setUnits  />


     {weather && (
      <div className='bg-subtlegray/50 shadow-lg border-gray/20 w-full max-w-xl rounded-lg p-3 mx-auto'>
       <TimeAndLocation weather={weather} />
       <Temperature weather={weather} />
      
</div>

     )}

    
    </div>
  );
}


export default Application;
