import React from "react";
import {
  persuade1,
  persuade2,
  persuade3,
  tsunamipic,
  signs1,
  signs2,
  signs3,
  tsunamiWarning,
  prepareTsunami,
  tsunami,
} from "../../assets";
import {
  BookOpenIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  ExclamationCircleIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
const TsunamiContents = () => {
  return (
    <section>
      <div className=" py-10 p-5">
        <div className="max-w-[85rem] mx-auto w-full   ">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl text-darkblue  font-inter  ">
                Tsunami
              </h1>
              <p className="mt-3 text-lg font-poppins ">
                {" "}
                A tsunami is a series of large ocean waves, commonly referred to
                as tidal waves, primarily caused by underwater disturbances such
                as earthquakes, volcanic eruptions, landslides, or meteorite
                impacts. These powerful waves can travel across entire ocean
                basins, reaching speeds of up to 700 kilometers per hour (500
                miles per hour) in the open ocean.
              </p>
            </div>
            <div className="lg:col-span-4 mt-10 lg:mt-0 mx-auto">
              <img
                className="w-full max-w-lg  rounded-xl"
                src={tsunamipic}
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-darkblue /80 ">
              What are the natural warning signs of an impending tsunami?
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-6 lg:gap-8 xl:gap-10">
            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img src={signs1} alt="Icon" className=" w-56 mx-auto " />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  Earthquake
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Strong, prolonged shaking, above 7.0, signals a possible
                  tsunami from a major undersea quake.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img src={signs2} alt="Icon" className="w-56  mx-auto  " />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  {" "}
                  Unusual Sea Behavior
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Rapid and unusual changes in coastal water levels signal an
                  approaching tsunami.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img src={signs3} alt="Icon" className="w-56   mx-auto  " />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  Receding Water
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  If the ocean pulls back, exposing the seafloor, it's a tsunami
                  warning. Move to higher ground right away.
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
            src={tsunamiWarning}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className=" sm:text-4xl text-3xl mb-4 font-semibold  font-inter text-darkblue ">
              {" "}
              What should residents do when they receive a tsunami warning?
            </h1>
            <p className="mb-8 leading-relaxed font-poppins text-lg">
              Treat all tsunami warnings as real threats. Even if the warning is
              a precaution, it's better to be on the side of caution. Listen to
              local news broadcasts, emergency radio stations, or weather apps
              for updates and instructions from local authorities. Official
              sources provide the most accurate and timely information.
            </p>
          </div>
        </div>
      </section>
      <section className="font-inter ">
        <div className="container px-5 py-24 mx-auto  flex flex-wrap">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-darkblue /80 mx-auto text-center">
            How should residents prepare their homes for a possible tsunami?
          </h2>
          <div className="flex lg:flex-row  md:flex-col sm:flex-col flex-col lg:gap-10 gap-0 w-full justify-center items-center">
            <div className="lg:w-1/2 md:w-full ">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkblue   inline-flex items-center justify-center text-white relative z-0">
                  <BookOpenIcon className="h-5 w-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-darkblue  ">
                    Educate Family Members.
                  </h2>
                  <p className="leading-relaxed text-base font-poppins">
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkblue   inline-flex items-center justify-center text-white relative z-0">
                  <ShieldCheckIcon className="h-5 w-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-darkblue  ">
                    {" "}
                    Secure Important Documents.
                  </h2>
                  <p className="leading-relaxed text-base font-poppins">
                    {" "}
                    Keep important documents such as identification, insurance
                    papers, medical records, and deeds in a waterproof and
                    easily accessible container.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkblue   inline-flex items-center justify-center text-white relative z-0">
                  <ExclamationCircleIcon className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-darkblue  ">
                    {" "}
                    Know Safe Zones.
                  </h2>
                  <p className="leading-relaxed text-base font-poppins">
                    {" "}
                    Identify safe zones within your home, such as upper floors
                    or reinforced rooms, where you can retreat if you cannot
                    evacuate in time.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-darkblue   inline-flex items-center justify-center text-white relative z-0">
                  <DevicePhoneMobileIcon className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-darkblue  ">
                    {" "}
                    Emergency Contacts.
                  </h2>
                  <p className="leading-relaxed text-base font-poppins">
                    {" "}
                    Keep a list of emergency contacts, including local
                    authorities, utility companies, and family members, in your
                    emergency kit.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="w-full max-w-lg  rounded-xl"
                src={prepareTsunami}
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </section>
  );
};

export default TsunamiContents;
