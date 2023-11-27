import React from "react";
import {
  MapPinIcon,
  UserIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
const ReportDetailsModal = () => {
  return (
    <>
      {/* For report details */}
      <div
        tabindex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 overflow-y-auto p-5 sm:p-0 shadow-xl  w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl rounded-lg sm:max-w-lg w-full">
          <div className="mx-auto max-w-md">
            <div className="flex items-start justify-between ">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl text-primary">
                <span className="underline underline-offset-3 decoration-8 decoration-primary/50">
                  Travel Assistance
                </span>
              </h1>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="divide-y divide-gray/40">
              <div className="space-y-2 py-8 text-base leading-7 text-gray-600">
                <ul className="space-y-4 mb-5">
                  <li className="flex items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-2">
                        <UserIcon className="w-6 h-6" />
                      </div>
                      <p className="font-inter ml-2">Robin A. Reyes</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-2">
                        <DevicePhoneMobileIcon className="w-6 h-6" />
                      </div>
                      <p className="font-inter ml-2">09513992162</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-2">
                        <MapPinIcon className="w-6 h-6" />
                      </div>
                      <p className="font-inter ml-2">1774 Zenia St.</p>
                    </div>
                  </li>
                </ul>
                <p className="font-inter text mt-1 mb-1">
                  Masakit po yung ko need ko po talaga ng aruga sa lalaking
                  nakasalamin na maputi tapos shytype tapos fullstack kuno{" "}
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2  text-sm font-medium text-black font-inter focus:outline-none bg-white rounded-lg border border-gray/20 hover:bg-gray/10  focus:z-10 focus:ring-4 focus:ring-white "
                  >
                    View Attachment
                  </button>
                </div>
              </div>
              <div className="pt-8 t font-semibold leading-7">
                <button
                  type="button"
                  className="text-white bg-primary hover:bg-primarydark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none font-inter "
                >
                  Respond
                </button>
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray/20 focus:outline-none hover:bg-gray/10 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ReportDetailsModal;
