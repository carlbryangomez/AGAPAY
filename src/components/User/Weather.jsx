import React from "react";
import ForecastComp from "../../weather/components/ForecastComp";
import Application from "../../weather/components/Application";

const Weather = () => {
  return (
    <>
      <section className="py-10 ">
        <div className="p-5 rounded-xl mx-auto sm:w-full md:w-[80%] lg:w-[90%] xl:w-[90%] bg-gradient-to-b from-[#f6e9e2] via-subtlegray  ">
        <div className="">
      <h1 className="text-4xl mb-2 text-primary text-center font-poppins font-semibold">
              Weather Updates
            </h1>
            <p className="mb-8 leading-relaxed text-center font-normal font-inter text-darkblue text-lg">
            Stay prepared with clear daily forecasts.
            </p>
            </div>
            <div className="flex sm:flex-col md:flex-col flex-col p-5 justify-center items-center"> 
         <div className="w-full items-center flex">
         <Application />
         </div>
           <div className="w-full md:mb-0 ">
                  
           <ForecastComp />
            </div>
           {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
   
            </div> */}
            </div>
            </div>
      </section>
    </>
  );
};

export default Weather;
