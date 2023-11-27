import React,{useState} from 'react'
import { ShieldExclamationIcon,FireIcon } from '@heroicons/react/24/outline';
const CreateAlert = () => {
    const [activeTab, setActiveTab] = useState("fire");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveQuestion(null);
      };
  return (
<>
<section className="bg-white min-h-screen sm:my-0 my-10">
    <div className="p-4 sm:ml-64">
    <h1 className='font-inter text-3xl mt-3'>Alert</h1>

        <hr className='border-primary mt-3 mb-3' />
        <div className="flex mx-auto sm:justify-center flex-wrap mb-10 bg-white">
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
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 font-inter  inline-flex items-center leading-none tracking-wider ${
                  activeTab === tab
                    ? "bg-lightblue border-primary text-primary rounded-t font-bold"
                    : "border-bordergray text-gray hover:text-black font-medium"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
               
              </button>
            ))}
          </div>
          {activeTab === "fire" && (
           <div className="w-full max-w-2xl mx-auto border  border-gray/20 shadow-lg bg-white p-5 rounded-xl ">
           <div className="p-4 w-sm">
            {/* <div className='flex justify-between'>
            <ShieldExclamationIcon className='w-10 h-10 text-red' />
            <FireIcon className='w-10 h-10 text-primary' />
            </div> */}
           <div>
           <h1 className='font-semibold font-inter text-5xl text-primary text-center'>Fire Alert</h1>
           </div>
                <div className="grid gap-2  py-8 first:border-transparent first:pt-0 last:pb-0  sm:grid-cols-12 sm:gap-4">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold font-inter  ">Alert Information</h2>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="" className="mt-2.5 inline-block text-sm font-medium font-poppins "> Level </label>
        </div>
        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input id="" type="text" className="relative  block w-full max-w-sm border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-email" className="mt-2.5 inline-block text-sm font-medium font-poppins "> Location </label>
        </div>
        <div className="sm:col-span-9">
        <input id="" type="text" className="relative  block w-full max-w-sm border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />
        </div>
      </div>
    <div className='mt-3'>
    <label for="message" className="block mb-2 text-sm font-medium  font-poppins ">Description</label>
<textarea id="message" rows="4" className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border font-inter border-gray/30 focus:ring-primary focus:border-primary focus:outline-none " placeholder="Provide a Description"></textarea>
    </div>
    

            </div>
          <div className='flex justify-center'>
            <button className='inline-flex items-center px-5 py-2.5 mt-2  text-sm font-semibold text-center text-white font-inter bg-primary rounded-lg focus:ring-4 focus:ring-primary focus:outline-none hover:bg-primarydark'>Alert the Users</button>
          </div>
            </div>
        )}
         {activeTab === "flood" && (
            <h1 className='mt-32 ml-64'>dd</h1>
        )}
        </div>
        
        </section>
</>
  )
}

export default CreateAlert