import React,{useState} from 'react'
import FireContents from './FireContents';
import EarthquakeContents from './EarthquakeContents';
import TsunamiContents from './TsunamiContents';
import LandslideContents from './LandslideContents';
import FloodContents from './FloodContents';
import TropicalCycloneContents from './TropicalCycloneContents';
import VolcanicEruptionContents from './VolcanicEruptionContents';
import StormSurgeContents from './StormSurgeContents';
const SafetyContents = () => {
  const [activeTab, setActiveTab] = useState("fire");
  const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    // ${activeTab === 'fire' ? 'bg-[#fff0f2]' : ''}
<section className={`sm:my-0 my-10 pt-10 mt-0 `}>
    <div className="p-4 ">
        <div className="flex mx-auto flex-wrap  justify-center sm:gap-5 gap-0 ">
            {[
              "fire",
              "earthquake",
              "tsunami",
              "landslide",
              "flood",
              "tropicalCyclone",
              "volcanicEruption",
              "stormSurge",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`sm:px-6 py-3 w-1/2 sm:w-auto font-inter font-medium mb-2  leading-none tracking-wider ${
                  activeTab === tab
                    ? "  border-primary text-white  rounded-full bg-primary "
                    : " text-gray hover:text-black border border-gray/20 rounded-full hover:bg-subtlegray"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
               
              </button>
            ))}
          </div>
          </div>
          
          {activeTab === "fire" && (
            <FireContents />
        )}
         {activeTab === "earthquake" && (
           <EarthquakeContents />
        )}
           {activeTab === "tsunami" && (
           <TsunamiContents />
        )}
        {activeTab === "landslide" && (
           <LandslideContents />
        )}
                {activeTab === "flood" && (
           <FloodContents />
        )}
                        {activeTab === "tropicalCyclone" && (
           <TropicalCycloneContents />
        )}
                        {activeTab === "volcanicEruption" && (
           <VolcanicEruptionContents />
        )}
        {activeTab === "stormSurge" && (
           <StormSurgeContents />
        )}
        </section>

  )
}

export default SafetyContents