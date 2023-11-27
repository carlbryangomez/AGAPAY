import React from "react";
import {
  XMarkIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
const AlertPasswordPattern = ({closeAlertPasswordPattern}) => {
  return (
    <>
      {/* For pranks*/}
      <div
        tabindex="-1"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-gray bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <button
              type="button"
              onClick={closeAlertPasswordPattern}
              className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            >
              <XMarkIcon className="w-5 h-5 " />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <ExclamationCircleIcon className="h-12 w-12 mb-5 mx-auto text-red animate-pulse" />
              <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
              Password must contain at least one capital letter, one number, and one special character.
              </h3>
              <button
                data-modal-hide="popup-modal"
                onClick={closeAlertPasswordPattern}
                type="button"
                className="text-white bg-red hover:bg-red/80 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertPasswordPattern;
