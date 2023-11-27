import React from "react";
import {
  earthquakepic,
  immediateAction1,
  immediateAction2,
  immediateAction3,
  precautions,
  shakingstops,
} from "../../assets";
import {
  FaceSmileIcon,
  EyeIcon,
  InboxStackIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
const EarthquakeContents = () => {
  return (
    <section>
      <div className=" py-10 p-5">
        <div className="max-w-[85rem] mx-auto w-full   ">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h1 className="block text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl text-brown font-inter  ">
                Earthquake
              </h1>
              <p className="mt-3 text-lg font-poppins ">
                {" "}
                An earthquake is a natural geological phenomenon characterized
                by the sudden release of energy in the Earth's crust, resulting
                in seismic waves.
              </p>
              <p className="mt-3 text-lg font-poppins ">
                This release of energy is typically caused by the movement of
                tectonic plates beneath the Earth's surface. When these plates
                collide, pull apart, or slide against each other, stress builds
                up in the Earth's crust.{" "}
              </p>
            </div>
            <div className="lg:col-span-4 mt-10 lg:mt-0 mx-auto">
              <img
                className="w-full max-w-lg  rounded-xl"
                src={earthquakepic}
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-brown/80 ">
              What are the immediate actions to take when an earthquake strikes?
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-6 lg:gap-8 xl:gap-10">
            <div className="flex flex-col  p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img
                src={immediateAction1}
                alt="Icon"
                className=" w-56 mx-auto "
              />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  If you are outdoors
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Move to an open area away from buildings, streetlights, and
                  trees during the quake.
                </p>
              </div>
            </div>

            <div className="flex flex-col  p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img
                src={immediateAction2}
                alt="Icon"
                className="w-56  mx-auto  "
              />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  If you are driving
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Pull over to a safe spot away from buildings and bridges. Stay
                  in your vehicle until the shaking stops.
                </p>
              </div>
            </div>

            <div className="flex flex-col  p-12 text-center text-gray-900 bg-white rounded-xl border  border-gray/5 shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <img
                src={immediateAction3}
                alt="Icon"
                className="w-56   mx-auto  "
              />
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-inter">
                  If you are indoors
                </h3>
                <p className="text-md font-poppins text-gray/90">
                  Avoid running outside during the shaking to prevent injuries
                  from falling debris or glass.
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
            src={precautions}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className=" sm:text-4xl text-3xl mb-4 font-semibold  font-inter text-brown">
              {" "}
              What precautions should be taken for people with disabilities or
              special needs?
            </h1>
            <p className="mb-8 leading-relaxed font-poppins text-lg">
              Ensure that individuals with hearing impairments have access to
              emergency alerts through visual or vibrating alerts. For those
              with speech impairments, establish clear communication methods
              such as text messaging or using communication boards.
            </p>
          </div>
        </div>
      </section>
      <section className="font-inter ">
        <div className="container px-5 py-24 mx-auto  flex flex-wrap">
          <h2 className="mb-4 text-4xl tracking-tight font-semibold font-inter text-brown/80 mx-auto text-center">
            What to do after the shaking stops?
          </h2>
          <div className="flex lg:flex-row  md:flex-col sm:flex-col flex-col lg:gap-10 gap-0 w-full justify-center items-center">
            <div className="lg:w-1/2 md:w-full ">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown  inline-flex items-center justify-center text-white relative z-0">
                  <FaceSmileIcon className="h-5 w-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-brown ">
                    {" "}
                    Remain Calm.
                  </h2>
                  <p className="leading-relaxed text-base font-poppins ">
                    {" "}
                    Stay calm and reassure others, especially children and
                    elderly individuals. Take a moment to collect your thoughts
                    before taking action.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown  inline-flex items-center justify-center text-white relative z-0">
                  <EyeIcon className="h-5 w-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-brown ">
                    {" "}
                    Check for Injuries.
                  </h2>
                  <p className="leading-relaxed text-base font-poppins ">
                    {" "}
                    Check yourself and others for injuries. Administer first aid
                    for minor injuries if you are trained to do so. For serious
                    injuries, call for emergency medical assistance immediately.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown  inline-flex items-center justify-center text-white relative z-0">
                  <ExclamationCircleIcon className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-brown ">
                    {" "}
                    Be Aware of Aftershocks.
                  </h2>
                  <p className="leading-relaxed text-base font-poppins ">
                    {" "}
                    Be prepared for aftershocks, which are smaller earthquakes
                    that can follow the main quake. Take cover under a sturdy
                    piece of furniture or against an interior wall if shaking
                    resumes.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown  inline-flex items-center justify-center text-white relative z-0">
                  <InboxStackIcon className="w-5 h-5" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold   text-lg  mb-1 tracking-wider text-brown ">
                    {" "}
                    Conserve Resources.
                  </h2>
                  <p className="leading-relaxed text-base font-poppins ">
                    {" "}
                    Conserve water, food, and other supplies, as you may not
                    know when regular services will be restored.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="w-full max-w-lg  rounded-xl"
                src={shakingstops}
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

export default EarthquakeContents;
