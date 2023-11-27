import React from "react";
import {
  tropicalCyclonePic,
  cycloneSigns1,
  cycloneSigns2,
  cycloneSigns3,
  cyclonePrepare,
  mitigateRisks,
} from "../../assets";
import {
  FunnelIcon,
  WrenchIcon,
  ExclamationCircleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
const TropicalCycloneContents = () => {
  return (
    <section>
      <div className=" py-10 p-5">
        <div className="max-w-[85rem] mx-auto w-full   ">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl text-black/80  font-inter  ">
                Tropical Cyclone
              </h1>
              <p className="mt-3 text-lg font-poppins ">
                {" "}
                A tropical cyclone is a powerful and organized system of clouds
                and thunderstorms with a defined circulation pattern that forms
                over warm tropical and subtropical oceans.
              </p>
              <p className="mt-3 text-lg font-poppins ">
                {" "}
                This weather phenomenon is characterized by low atmospheric
                pressure at its center, which is surrounded by strong winds and
                heavy rainfall.
              </p>
            </div>
            <div className="lg:col-span-4 mt-10 lg:mt-0 mx-auto">
              <img
                className="w-full max-w-lg  rounded-xl"
                src={tropicalCyclonePic}
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-black/80 ">
              What are the signs of an approaching tropical cyclone?
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-6 lg:gap-8 xl:gap-10">
            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img src={cycloneSigns1} alt="Icon" className=" w-56 mx-auto " />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  {" "}
                  Changes in Sky and Cloud Patterns
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Unusual cloud formations, including the presence of dark,
                  towering clouds. A sudden increase in the number of clouds and
                  their thickness, leading to overcast skies.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img src={cycloneSigns2} alt="Icon" className="w-56  mx-auto  " />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  {" "}
                  Changes in Wind Patterns
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  A noticeable increase in wind speed, which may become gusty.
                  Changes in wind direction, especially if winds begin to blow
                  consistently from a single direction.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img
                src={cycloneSigns3}
                alt="Icon"
                className="w-56   mx-auto  "
              />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  {" "}
                  Changes in Weather Conditions
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Persistent heavy rainfall, often with thunder and lightning.
                  Rapid drop in barometric pressure, indicating a developing
                  low-pressure system. Drastic changes in humidity levels, often
                  leading to muggy or oppressive conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="font-inter ">
        <div className="container mx-auto flex  pt-10 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={cyclonePrepare}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className=" sm:text-4xl text-3xl mb-4 font-semibold  font-inter text-black">
              {" "}
              How can individuals and communities prepare for a tropical
              cyclone?
            </h1>
            <p className="mb-8 leading-relaxed font-poppins text-lg">
              {" "}
              Prepare an emergency kit with essential supplies, including water,
              non-perishable food, medications, first aid items, flashlights,
              batteries, and important documents. Include items for hygiene,
              such as sanitizers, masks, and personal hygiene products.
            </p>
          </div>
        </div>
      </section>
      <section className="font-inter ">
        <div className="container px-5 py-24 mx-auto  flex flex-wrap">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-black/80 mx-auto text-center">
            How Can Communities Work Together to Mitigate Risks?
          </h2>
          <div className="flex lg:flex-row  md:flex-col sm:flex-col flex-col lg:gap-10 gap-0 w-full justify-center items-center">
            <div className="lg:w-1/2 md:w-full ">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black  inline-flex items-center justify-center text-white relative z-0">
                  <FunnelIcon className="h-5 w-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-black ">
                    {" "}
                    Floodplain Management
                  </h2>
                  <p className="leading-relaxed font-poppins">
                    {" "}
                    Develop and enforce land use regulations that restrict
                    construction in flood-prone areas. Preserve and restore
                    natural floodplains, wetlands, and green spaces, which act
                    as natural buffers against flooding.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black  inline-flex items-center justify-center text-white relative z-0">
                  <ExclamationCircleIcon className="h-5 w-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-black ">
                    {" "}
                    Early Warning Systems.
                  </h2>
                  <p className="leading-relaxed font-poppins">
                    {" "}
                    Establish and maintain early warning systems to alert
                    residents about impending floods. Utilize sirens, text
                    alerts, social media, and other communication channels to
                    disseminate timely information.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black  inline-flex items-center justify-center text-white relative z-0">
                  <BookOpenIcon className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-black ">
                    {" "}
                    Community Education.
                  </h2>
                  <p className="leading-relaxed font-poppins">
                    {" "}
                    Conduct public awareness campaigns to educate residents
                    about flood risks, preparedness, and evacuation plans.
                    Provide resources like brochures and workshops to inform
                    residents about flood insurance and safety measures.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black  inline-flex items-center justify-center text-white relative z-0">
                  <WrenchIcon className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-black ">
                    {" "}
                    Ecosystem Restoration.
                  </h2>
                  <p className="leading-relaxed font-poppins">
                    {" "}
                    Invest in ecosystem restoration projects, including
                    reforestation and wetland restoration. Healthy ecosystems
                    absorb rainwater, reduce erosion, and mitigate flooding.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="w-full max-w-lg  rounded-xl"
                src={mitigateRisks}
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TropicalCycloneContents;
