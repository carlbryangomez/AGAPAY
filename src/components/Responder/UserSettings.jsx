import React from "react";
import {
  InformationCircleIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
const ResponderUserSettings = () => {
  return (
    <>
      <section className="bg-accent min-h-screen">
        <div className="p-4 sm:ml-64 mt-16">
          <h1 className="font-inter text-3xl mt-3">User Information</h1>
          <hr className="border-primary mt-3 mb-3" />
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-white p-8 rounded border border-gray/30 shadow-sm space-y-6 font-inter">
                  <InformationCircleIcon className="w-6 h-6 text-primary" />
                  <p className="border-b border-gray/20 font-semibold">
                    Name: <span className="font-normal">Joko Gadingan</span>
                  </p>
                  <p className="border-b border-gray/20 font-semibold">
                    Email:{" "}
                    <span className="font-normal">jovoiloveyou@gmail.com</span>
                  </p>
                  <p className="border-b border-gray/20 font-semibold">
                    Contact Number:{" "}
                    <span className="font-normal">0951-399-2162</span>
                  </p>
                  <p className="border-b border-gray/20 font-semibold">
                    Password:{" "}
                    <button className="font-normal text-primary underline">
                      Change Password
                    </button>
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-white p-8 rounded border border-gray/30 shadow-sm space-y-6 font-inter">
                  <IdentificationIcon className="w-6 h-6 text-primary" />
                  <p className="border-b border-gray/20 font-semibold">
                    Company: <span className="font-normal">City Fire Eme</span>
                  </p>
                  <p className="border-b border-gray/20 font-semibold">
                    Job Title: <span className="font-normal">Responder</span>
                  </p>
                  <p className="border-b border-gray/20 font-semibold">
                    Department:{" "}
                    <span className="font-normal">Fire Department</span>
                  </p>
                  <p className="border-b border-gray/20 font-semibold">
                    Employee ID: <span className="font-normal">143</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResponderUserSettings;
