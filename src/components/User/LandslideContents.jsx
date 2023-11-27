import React from "react";
import {
  landslidepic,
  causes1,
  causes2,
  causes3,
  hazard,
  landslidewarning,
} from "../../assets";
import {
  FaceSmileIcon,
  ShieldCheckIcon,
  InboxStackIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
const LandslideContents = () => {
  return (
    <section>
      <div className=" py-10 p-5">
        <div className="max-w-[85rem] mx-auto w-full   ">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl text-landslide  font-inter  ">
                Landslide
              </h1>
              <p className="mt-3 text-lg font-poppins ">
                {" "}
                A landslide is a geological phenomenon involving the movement of
                a mass of rock, earth, or debris down a slope. This movement can
                be slow and gradual or sudden and rapid, resulting in
                significant changes in the landscape.
              </p>
              <p className="mt-3 text-lg font-poppins">
                {" "}
                Landslides occur when the force of gravity exceeds the strength
                of the materials holding the slope together, causing them to
                collapse and move downhill.
              </p>
            </div>
            <div className="lg:col-span-4 mt-10 lg:mt-0 mx-auto">
              <img
                className="w-full max-w-lg  rounded-xl"
                src={landslidepic}
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-landslide /80 ">
              What Causes Landslides?
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-6 lg:gap-8 xl:gap-10">
            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img src={causes1} alt="Icon" className=" w-56 mx-auto " />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  {" "}
                  Heavy Rainfall
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Prolonged or intense rainfall can saturate the soil,
                  increasing its weight and reducing its cohesion. This added
                  weight can trigger landslides, especially on steep slopes.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img src={causes2} alt="Icon" className="w-56  mx-auto  " />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  {" "}
                  Steep Slopes
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Slopes with a steep incline are more susceptible to landslides
                  because the force of gravity is stronger, making it easier for
                  materials to slide downhill.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img src={causes3} alt="Icon" className="w-56   mx-auto  " />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  {" "}
                  Human Activities
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Human activities like deforestation, mining, construction,
                  excavation, and poor land-use planning can disrupt slope
                  equilibrium. Removing vegetation, changing drainage, and
                  excavating hillsides raise the risk of landslides.
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
            src={hazard}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className=" sm:text-4xl text-3xl mb-4 font-semibold  font-inter text-landslide ">
              {" "}
              How to Identify Potential Landslide Hazard Areas?
            </h1>
            <p className="mb-8 leading-relaxed font-inter text-lg">
              {" "}
              Healthy, lush vegetation stabilizes slopes. Watch out for bare
              slopes or dying trees and plants, suggesting erosion and
              instability.
            </p>
          </div>
        </div>
      </section>
      <section className="font-inter ">
        <div className="container px-5 py-24 mx-auto  flex flex-wrap">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-landslide /80 mx-auto text-center">
            What to Do During a Landslide Warning?
          </h2>
          <div className="flex lg:flex-row  md:flex-col sm:flex-col flex-col lg:gap-10 gap-0 w-full justify-center items-center">
            <div className="lg:w-1/2 md:w-full ">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-landslide   inline-flex items-center justify-center text-white relative z-0">
                  <FaceSmileIcon className="h-5 w-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-landslide  ">
                    {" "}
                    Stay Calm and Alert.
                  </h2>
                  <p className="leading-relaxed font-poppins">
                    {" "}
                    Ensure everyone in the household is aware of tsunami risks,
                    warning signs, evacuation routes, and emergency procedures.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-landslide   inline-flex items-center justify-center text-white relative z-0">
                  <ShieldCheckIcon className="h-5 w-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-landslide  ">
                    {" "}
                    Secure Important Documents.
                  </h2>
                  <p className="leading-relaxed font-poppins">
                    {" "}
                    Remain calm and attentive to official alerts and warnings
                    broadcasted on radio, TV, or emergency notification systems.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-landslide   inline-flex items-center justify-center text-white relative z-0">
                  <ExclamationCircleIcon className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-landslide  ">
                    {" "}
                    Evacuate if Necessary.
                  </h2>
                  <p className="leading-relaxed font-poppins">
                    {" "}
                    If authorities issue an evacuation order, follow it promptly
                    and move to higher ground or designated safe locations.
                    Avoid riverbanks, steep slopes, and low-lying areas.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-landslide   inline-flex items-center justify-center text-white relative z-0">
                  <InboxStackIcon className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-landslide  ">
                    {" "}
                    Gather Emergency Supplies.
                  </h2>
                  <p className="leading-relaxed font-poppins">
                    {" "}
                    Grab your emergency kit, which should include water,
                    non-perishable food, first aid supplies, flashlight, and
                    essential documents. Take necessary medications and
                    important personal items.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="w-full max-w-lg  rounded-xl"
                src={landslidewarning}
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandslideContents;
