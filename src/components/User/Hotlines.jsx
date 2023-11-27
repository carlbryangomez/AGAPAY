import React, { useState, useEffect } from "react";
import {
  PhoneIcon,
  QuestionMarkCircleIcon,
  MapPinIcon,
  XMarkIcon,
  FireIcon,
  BuildingOffice2Icon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

const Hotlines = () => {
  const phoneNumber = '+63(2)83649060';
  const [showModalphone, setShowModalphone] = useState(false);

  const handleCallClick = () => {
    setShowModalphone(true);
  };

  const handleConfirmCall = () => {
    makePhoneCall();
    setShowModalphone(false);
  };

  const handleCancelCall = () => {
    setShowModalphone(false);
  };

  const makePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

    // end phone number for 4th avenue station
     // phone number for central fire station
  const phoneNumber1 = '324 6527';
  const [showModalphone1, setShowModalphone1] = useState(false);

  const handleCallClick1 = () => {
    setShowModalphone1(true);
  };

  const handleConfirmCall1 = () => {
    makePhoneCall1();
    setShowModalphone1(false);
  };

  const handleCancelCall1 = () => {
    setShowModalphone1(false);
  };

  const makePhoneCall1 = () => {
    window.location.href = `tel:${phoneNumber1}`;
  };

    // end phone number for central fire station

         // phone number for Northern Police - Station 1
  const phoneNumber2 = '+63(2)324 6528';
  const [showModalphone2, setShowModalphone2] = useState(false);

  const handleCallClick2 = () => {
    setShowModalphone2(true);
  };

  const handleConfirmCall2 = () => {
    makePhoneCall2();
    setShowModalphone2(false);
  };

  const handleCancelCall2 = () => {
    setShowModalphone2(false);
  };

  const makePhoneCall2 = () => {
    window.location.href = `tel:${phoneNumber2}`;
  };

    // end phone number for Northern Police - Station 1

            // phone number for Northern Police district
  const phoneNumber3 = '+63(2)9623918';
  const [showModalphone3, setShowModalphone3] = useState(false);

  const handleCallClick3 = () => {
    setShowModalphone3(true);
  };

  const handleConfirmCall3 = () => {
    makePhoneCall3();
    setShowModalphone3(false);
  };

  const handleCancelCall3 = () => {
    setShowModalphone3(false);
  };

  const makePhoneCall3 = () => {
    window.location.href = `tel:${phoneNumber3}`;
  };

    // end phone number for Northern Police district

           // phone number for  North Medical Center
  const phoneNumber4 = '02-8424-1724';
  const [showModalphone4, setShowModalphone4] = useState(false);

  const handleCallClick4 = () => {
    setShowModalphone4(true);
  };

  const handleConfirmCall4 = () => {
    makePhoneCall4();
    setShowModalphone4(false);
  };

  const handleCancelCall4 = () => {
    setShowModalphone4(false);
  };

  const makePhoneCall4 = () => {
    window.location.href = `tel:${phoneNumber4}`;
  };

    // end phone number for  North Medical Center

            // phone number for South Medical Center
  const phoneNumber5 = '+63 (2) 310 7920';
  const [showModalphone5, setShowModalphone5] = useState(false);

  const handleCallClick5 = () => {
    setShowModalphone5(true);
  };

  const handleConfirmCall5 = () => {
    makePhoneCall5();
    setShowModalphone5(false);
  };

  const handleCancelCall5= () => {
    setShowModalphone5(false);
  };

  const makePhoneCall5 = () => {
    window.location.href = `tel:${phoneNumber5}`;
  };

    // end phone number for  South Medical Center

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const openExternalWebsite = () => {
    window.open("https://maps.app.goo.gl/k61F5F3LWuW9d4Xe7", "_blank");
    setShowModal(false);
  };
  
  const [showModal1, setShowModal1] = useState(false);

  const handleShowModal1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };

  const openExternalWebsite1 = () => {
    window.open("https://maps.app.goo.gl/HpmTzJCcbDCzp9Lm6", "_blank");
    setShowModal1(false);
  };
  const [showModal2, setShowModal2] = useState(false);

  const handleShowModal2 = () => {
    setShowModal2(true);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const openExternalWebsite2 = () => {
    window.open("https://maps.app.goo.gl/LbxGKFviLD5sd2Rv9", "_blank");
    setShowModal2(false);
  };
  const [showModal3, setShowModal3] = useState(false);

  const handleShowModal3 = () => {
    setShowModal3(true);
  };

  const handleCloseModal3 = () => {
    setShowModal3(false);
  };

  const openExternalWebsite3 = () => {
    window.open("https://maps.app.goo.gl/sqTPGDfhgupDrbY1A", "_blank");
    setShowModal3(false);
  };
  const [showModal4, setShowModal4] = useState(false);

  const handleShowModal4 = () => {
    setShowModal4(true);
  };

  const handleCloseModal4 = () => {
    setShowModal4(false);
  };

  const openExternalWebsite4 = () => {
    window.open("https://maps.app.goo.gl/wFRLJyPtY8aQekc78", "_blank");
    setShowModal4(false);
  };
  const [showModal5, setShowModal5] = useState(false);

  const handleShowModal5 = () => {
    setShowModal5(true);
  };

  const handleCloseModal5 = () => {
    setShowModal5(false);
  };
  useEffect(() => {
      
    if (showModalphone || showModalphone1 || showModalphone2 || showModalphone3 || showModalphone4 || showModalphone5 || showModal || showModal1 || showModal2 || showModal3 || showModal4 ||showModal5 ) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';  
    }

    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModalphone , showModalphone1 , showModalphone2 , showModalphone3 , showModalphone4 , showModalphone5 ,showModal , showModal1 , showModal2 , showModal3 , showModal4 ,showModal5]);

  const openExternalWebsite5 = () => {
    window.open("https://maps.app.goo.gl/ssfDo5tjYA5fHyoVA", "_blank");
    closeModal(); // Close the modal
  };
  return (
    <>
      <section className="">
        <div className="container px-5 py-9 mx-auto">
          <div className="flex flex-wrap w-full  flex-col items-center text-center">
            <h1 className="text-4xl font-semibold mb-3 font-poppins text-primary">
              General Hotlines
            </h1>
            <p className="lg:w-1/2 w-full text-black leading-relaxed font-poppins text-xl">
            Find emergency contacts and support helplines below.
            </p>
            <p className="lg:w-1/3 w-full text-gray leading-relaxed font-poppins text-lg">
            Click the <MapPinIcon className="w-6 h-6 inline-block text-primary"/> icon to view the Google Map location, or tap the <PhoneIcon className="w-6 h-6 inline-block text-primary"/> icon to make a phone call.
            </p>
          </div>
          <div className="flex flex-wrap -m-4  rounded-xl p-0 sm:p-10">
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6 ">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <FireIcon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    4th Avenue Fire Station
                  </h2>
                </div>

                <div className="flex flex-row">
                  <button className=" mr-2  cursor-pointer      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" onClick={handleCallClick}/>
                  </button>
                  <h3 onClick={handleCallClick} className="text-base cursor-pointer hover:underline text-primarydark/90 font-medium font-poppins mb-2 mt-2">
                    +63(2)83649060
                  </h3>
                </div>
                <div className="flex flex-row">
                  <button onClick={handleShowModal} className="text-primary  mr-2     capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal}
                    className="leading-relaxed text-primarydark hover:underline  font-poppins cursor-pointer "
                  >
                    A. Del Mundo Street corner 4th Avenue & 5th Avenue, Barangay
                    51
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <FireIcon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    Central Fire Station
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-pointer      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" onClick={handleCallClick1}/>
                  </button>
                  <h3 onClick={handleCallClick1} className="text-base cursor-pointer text-primarydark/90 hover:underline font-medium font-poppins mb-2 mt-2">
                    324 6527
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button  onClick={handleShowModal1} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal1}
                    className="leading-relaxed text-primarydark hover:underline  font-poppins cursor-pointer  "
                  >
                    Samson Road, Sangandaan Barangay 1 Caloocan, Metro Manila
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <ShieldExclamationIcon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    Northern Police - Station 1
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-pointer      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" onClick={handleCallClick2}/>
                  </button>
                  <h3 onClick={handleCallClick2} className="text-base cursor-pointer text-primarydark/90 hover:underline font-medium font-poppins mb-2 mt-2">
                    +63(2)324 6528
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button    onClick={handleShowModal2} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal2}
                    className="leading-relaxed  text-primarydark hover:underline font-poppins cursor-pointer "
                  >
                    Samson Road, Sangandaan, Caloocan City 1408 Metro Manila
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <ShieldExclamationIcon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    Northern Police District
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-pointer      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" onClick={handleCallClick3}/>
                  </button>
                  <h3 onClick={handleCallClick3} className="text-base cursor-pointer text-primarydark/90 hover:underline font-medium font-poppins mb-2 mt-2">
                    +63(2)9623918
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button     onClick={handleShowModal3} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal3}
                    className="leading-relaxed text-primarydark hover:underline  font-poppins cursor-pointer "
                  >
                    Cadena De Amor Street, Camarin 1. P.C. 1422 Caloocan City,
                    Metro Manila
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <BuildingOffice2Icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    North Medical Center
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-pointer      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" onClick={handleCallClick4}/>
                  </button>
                  <h3 onClick={handleCallClick4} className="text-base cursor-pointer text-primarydark/90 hover:underline font-medium font-poppins mb-2 mt-2">
                    02-8424-1724
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button   onClick={handleShowModal4} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal4}
                    className="leading-relaxed text-primarydark hover:underline  font-poppins cursor-pointer "
                  >
                    Camarin Road, Barangay 177 Caloocan City, Metro Manila
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
              <div className="border  border-gray/10 bg-white  rounded-xl shadow-md p-6">
                <div className="flex flex-row">
                  <div className="text-primary bg-primary/20  mr-2  w-8 h-8    rounded-full  capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <BuildingOffice2Icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-lg text-primary font-semibold  mb-2 font-inter cursor-default">
                    South Medical Center
                  </h2>
                </div>
                <div className="flex flex-row">
                  <button className=" mr-2  cursor-pointer      capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <PhoneIcon className="h-5 w-5 text-primary font-semibold" onClick={handleCallClick5}/>
                  </button>
                  <h3  onClick={handleCallClick5} className="text-base cursor-pointer text-primarydark/90 hover:underline font-medium font-poppins mb-2 mt-2">
                    +63 (2) 310 7920
                  </h3>
                </div>

                <div className="flex flex-row">
                  <button  onClick={handleShowModal5} className="text-primary  mr-2    capitalize font-inter focus:outline-none font-medium  text-sm inline-flex items-center px-1 py-1 text-center">
                    <MapPinIcon className="h-5 w-5" />
                  </button>
                  <p
                    onClick={handleShowModal5}
                    className="leading-relaxed text-primarydark hover:underline font-poppins cursor-pointer "
                  >
                    450, A. Mabini Street, Poblacion Caloocan City, Metro Manila
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-black bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal1 && (
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-black bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal1}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite1}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal1}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal2 && (
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-black bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal2}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite2}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal2}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal3 && (
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-black bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal3}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite3}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal3}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal4 && (
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-black bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal4}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite4}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal4}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal5 && (
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-black bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={handleCloseModal5}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <QuestionMarkCircleIcon className="h-12 w-12 mb-5 mx-auto text-blue" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                  Would you like to proceed with opening this on Google Maps?
                </h3>
                <button
                  type="button"
                  onClick={openExternalWebsite5}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Open Maps
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal5}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
       {/* // phone number for 4th avenue station */}
       {showModalphone && (
        <div className="fixed top-0 z-50  left-0 w-full  h-full flex items-center justify-center bg-black bg-opacity-50">
             <div className="relative w-full max-w-md max-h-full p-5">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm">
          <PhoneIcon className="h-12 w-12 mb-5 mx-auto text-primary animate-pulse" />
            <p className="mb-4 font-inter text-center leading-loose ">Are you sure you want to call <span className="text-primary">{phoneNumber}</span> ?</p>
           <div className="flex flex-row  justify-center items-center">
            <button
             className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"

              onClick={handleConfirmCall}
            >
              Yes
            </button>
            <button
            className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"

              onClick={handleCancelCall}
            >
              No
            </button>
            </div>
          </div>
          </div>
        </div>
      )}
        {/* // end phone number for 4th avenue station */}
          {/* // phone number for central fire station */}
       {showModalphone1 && (
        <div className="fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
             <div className="relative w-full max-w-md max-h-full p-5">

          <div className="bg-white p-8 rounded-lg shadow-lg">
          <PhoneIcon className="h-12 w-12 mb-5 mx-auto text-primary animate-pulse" />
            <p className="mb-4 font-inter text-center leading-loose">Are you sure you want to call <span className="font-inter text-primary"> {phoneNumber1}</span> ?</p>
            <div className="flex flex-row  justify-center items-center">
            <button
              className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleConfirmCall1}
            >
              Yes
            </button>
            <button
            className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleCancelCall1}
            >
              No
            </button>
            </div>
          </div>
          </div>
        </div>
      )}
        {/* //end phone number for central fire station */}
          {/* // phone number for Northern Police - Station 1 */}
       {showModalphone2 && (
      <div className="fixed top-0 z-50  left-0 w-full  h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-md max-h-full p-5">
          <div className="bg-white p-8 rounded-lg shadow-lg">
          <PhoneIcon className="h-12 w-12 mb-5 mx-auto text-primary animate-pulse" />
            <p className="mb-4 font-inter text-center leading-loose">Are you sure you want to call <span className="text-primary font-inter">{phoneNumber2}</span> ?</p>
            <div className="flex flex-row  justify-center items-center">
            <button
            className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleConfirmCall2}
            >
              Yes
            </button>
            <button
                       className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleCancelCall2}
            >
              No
            </button>
          </div>
          </div>
          </div>
        </div>
      )}
        {/* //  end phone number for Northern Police District */}
        {showModalphone3 && (
             <div className="fixed top-0 z-50  left-0 w-full  h-full flex items-center justify-center bg-black bg-opacity-50">
                           <div className="relative w-full max-w-md max-h-full p-5">
          <div className="bg-white p-8 rounded-lg shadow-lg">
          <PhoneIcon className="h-12 w-12 mb-5 mx-auto text-primary animate-pulse" />
            <p className="mb-4 font-inter text-center leading-loose">Are you sure you want to call <span className="text-primary font-inter"> {phoneNumber3} </span>?</p>
            <div className="flex flex-row  justify-center items-center">
            <button
                 className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"

              onClick={handleConfirmCall3}
            >
              Yes
            </button>
            <button
            className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleCancelCall3}
            >
              No
            </button>
            </div>
          </div>
          </div>
        </div>
      )}
        {/* // end phone number for Northern Police District */}

          {/* // phone number for North Medical Center */}
          {showModalphone4 && (
        <div className="fixed top-0 z-50  left-0 w-full  h-full flex items-center justify-center bg-black bg-opacity-50">
                       <div className="relative w-full max-w-md max-h-full p-5">
          <div className="bg-white p-8 rounded-lg shadow-lg">
          <PhoneIcon className="h-12 w-12 mb-5 mx-auto text-primary animate-pulse" />
            <p className="mb-4 font-inter text-center leading-loose">Are you sure you want to call <span className="text-primary font-inter"> {phoneNumber4}</span>?</p>
            <div className="flex flex-row  justify-center items-center">
            <button
               className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleConfirmCall4}
            >
              Yes
            </button>
            <button
              className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleCancelCall4}
            >
              No
            </button>
         
          </div>
          </div>
          </div>
        </div>
      )}
        {/* // end phone number forNorth Medical Center */}

         {/* // phone number for South Medical Center */}
         {showModalphone5 && (
        <div className="fixed top-0 z-50  left-0 w-full  h-full flex items-center justify-center bg-black bg-opacity-50">
                       <div className="relative w-full max-w-md max-h-full p-5">
          <div className="bg-white p-8 rounded-lg shadow-lg">
          <PhoneIcon className="h-12 w-12 mb-5 mx-auto text-primary animate-pulse" />
            <p className="mb-4 font-inter text-center leading-loose">Are you sure you want to call<span className="text-primary font-inter">{phoneNumber5}</span> ?</p>
            <div className="flex flex-row  justify-center items-center">
            <button
               className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleConfirmCall5}
            >
              Yes
            </button>
            <button
            className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleCancelCall5}
            >
              No
            </button>
          </div>
          </div>
          </div>
        </div>
      )}
        {/* // end phone number for South Medical Center */}
    </>
  );
};

export default Hotlines;
