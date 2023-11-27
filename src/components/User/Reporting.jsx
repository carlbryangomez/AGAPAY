import React, { useState, useRef, useEffect } from "react";
import { logo, ambulance, report } from "../../assets";
import {
  MapPinIcon,
  ArrowRightCircleIcon,
  XMarkIcon,
  VideoCameraIcon,
  XCircleIcon,
  StopIcon,
} from "@heroicons/react/24/outline";
import LoginFirst from "./LoginFirst";
import TimeAndDateRepoting from "../../weather/components/DateandTimeReporting";
import SuccessReportModal from "./SuccessReportModal";
import axios from "axios";
const Reporting = ({ status, userType, username, contactNum, userId }) => {
  // report datas
  const [selectedDisaster, setSelectedDisaster] = useState(null);
  const [reportMessage, setReportMessage] = useState('');

  // alert(status);
  const [activeUserSession, setActiveUserSession] = useState(false);
  useEffect(() => {
    // alert(userType);
    if (status === "active" && userType === "User") {
      setActiveUserSession(true);
    } else {
      setActiveUserSession(false);
    }
    // alert(isLoggedIn);
    // alert(isLoggedIn);
  }, [status, userType]);
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [isTravelModalVisible, setisTravelModalVisible] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(() => {
    // Add or remove a class to the body element based on modal visibility
    if (isReportModalVisible || isTravelModalVisible || isLogIn) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';  
    }

    // Cleanup by removing the class when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';  
    };
  }, [isReportModalVisible, isTravelModalVisible, isLogIn]);
  const handleCloseModal = () => {
    setIsLogIn(false);
  };
  const handleSelectButtonClickAssistance = () => {
    if (!activeUserSession) {
      setIsLogIn(true);
    } else {
      setisTravelModalVisible(true);
    }
  };
  const handleSelectButtonClickReport = () => {
    if (!activeUserSession) {
      setIsLogIn(true);
    } else {
      setIsReportModalVisible(true);
    }
  };
  const [add, setAdd] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      setLatitude(latitude);
      setLongitude(longitude);
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAdd(data.results[0]));
    });
  }, []);
  // console.log(add);
  const [stream, setStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [videoData, setVideoData] = useState(null);
  const [isValid, setIsValid] = useState(null);
  const videoRef = useRef(null);
  const inputRef = useRef(null);
  const countdownIntervalRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const captureIntervalRef = useRef(null);
  const [capturedFrames, setCapturedFrames] = useState([]);
  const [verify, setVerify] = useState(null);
  const [verifying, setVerifying] = useState(false);
  const [submitReport, setSubmitReport] = useState(false);
  const [successModal, setSuccessModal] = useState(false)
  const closeSuccessModal = () => {
    setSuccessModal();
  }
  // send file to server
  const handleReportBtn = () => {
    setSubmitReport(true);
  }

  useEffect(() => {
    if(submitReport === true){
      if(verify !== null){
        if (videoData !== null) {
          // const formDataToObject = {"fileSelector": "Videos", "video": videoData.blob};
          // console.log(formDataToObject);
          const formData = new FormData();
          formData.append("fileSelector", "Report");
          formData.append("user_id", userId);
          formData.append("disaster", selectedDisaster);
          formData.append("adress", add.formatted_address);
          formData.append("video", videoData.blob);
          formData.append("verify", verify);
          formData.append("description", reportMessage);
          formData.append("latitude", latitude);
          formData.append("longitude", longitude);
          // console.log("user_id", userId);
          // console.log("disaster", selectedDisaster);
          // console.log("adress", verify);
          // console.log("video", videoData.blob);
          // console.log("verify", verify);
          // console.log("description", reportMessage);
          axios
            .post("http://localhost/Backend/Controller.php", formData, {
              withCredentials: true,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              // if (response.data === "") {
              // } else return alert(response.data);
              // // loggedIn(false);
              setSuccessModal(!successModal)
              setIsReportModalVisible();
              console.log(response);
              setSubmitReport(false);
              setVerify(null);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      }
    }
  }, [videoData, submitReport]);

  const sendFrames = async () => {
    console.log("sa baba:");
    console.log(capturedFrames);
    setVerifying(true);
    setVerify(false);
    for (const frame of capturedFrames) {
      try {
        // Create a FormData object to send the image data
        const formData = new FormData();
        formData.append("fileSelector", "Frames");
        formData.append("frame", frame.imageDataUrl);
        formData.append("fileName", frame.fileName);
        formData.append("disaster", selectedDisaster);

        // Make a POST request using Axios
        const response = await axios.post(
          "http://localhost/Backend/Controller.php",
          formData
        );
        if (response.data.matchedWeb.length !== 0) {
          setVerify(true);
        }
        // Handle the response if needed
        console.log(response.data);
      } catch (error) {
        // Handle errors
        console.error("Error sending captured frames:", error);
      }
    }
    console.log("after for");
    setVerifying(false);
  };

  //  start Recording
  const startRecording = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      setStream(videoStream);
      videoRef.current.srcObject = videoStream;

      const recorder = new MediaRecorder(videoStream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      //Get the file after taking the video
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const videoURL = URL.createObjectURL(blob);
        setVideoData({
          blob,
          url: videoURL,
          name: `recorded-video-${new Date().getTime()}.webm`,
        });
      };
      //end Get the file after taking the video

      // if click the camera icon it start to recording and countdown
      recorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      clearInterval(countdownIntervalRef.current);

      countdownIntervalRef.current = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1); // Update every second (1000 milliseconds)
      }, 1000);

      // Capture frames every second
      captureIntervalRef.current = setInterval(() => {
        captureFrame();
      }, 1000);

      setTimeout(() => stopRecording(), 5000); // Stop recording after 10 seconds
      setMediaRecorder(recorder);
    } catch (error) {
      console.error("Error accessing the camera: ", error);
    }
  };
  // end of start Recording

  // stop the recording
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());

        // Check if videoRef.current is not null before setting srcObject
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      }
    }
    // Clear capture interval
    clearInterval(captureIntervalRef.current);
  };
  // end of stop the camera

  //auto save the video after recording
  // const validateVideo = () => {
  //   setIsValid(true);
  // };
  //end auto save the video after recording

  //Discard the video
  const discardVideo = () => {
    if (videoData) {
      URL.revokeObjectURL(videoData.url);
      setVideoData(null);
      setRecordingTime(0);

      clearInterval(countdownIntervalRef.current);
      clearInterval(captureIntervalRef.current);
      setCapturedFrames([]);
    }
  };
  //end of Discard the video
  //limit the recording time in to 10 seconds
  useEffect(() => {
    if (recordingTime === 5) {
      stopRecording();
      sendFrames();
    }
  }, [recordingTime]);
  //end limit the recording time in to 10 seconds

  // const downloadVideo = () => {
  //   if (videoData) {
  //     const a = document.createElement('a');
  //     a.href = videoData.url;
  //     a.download = 'recorded-video.webm';
  //     a.click();
  //   }
  // };
  // Update the state with the captured image and its file name
  const captureFrame = () => {
    const video = videoRef.current;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to base64 data URL
    const imageDataUrl = canvas.toDataURL("image/jpeg");

    // Generate a unique file name using the current timestamp
    const fileName = `frame_${Date.now()}.jpg`;
    console.log(fileName);

    // Update the state with the captured image and its file name
    setCapturedFrames((prevFrames) => [
      ...prevFrames,
      { imageDataUrl, fileName },
    ]);
  };
  // const formatPhoneNumber = (phoneNumber) => {
  //   // Remove non-numeric characters
  //   const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

  //   // Check if the number starts with '63' and remove it
  //   const formattedPhoneNumber =
  //     numericPhoneNumber.startsWith('63') && numericPhoneNumber.length === 12
  //       ? numericPhoneNumber.slice(2)
  //       : numericPhoneNumber;

  //   // Add the desired format
  //   return `${formattedPhoneNumber.slice(0, 4)}-${formattedPhoneNumber.slice(
  //     4,
  //     7
  //   )}-${formattedPhoneNumber.slice(7)}`;
  // };
  
  const handleDisasterButton = (event) => {
    setSelectedDisaster(event.target.value);
    // console.log(selectedDisaster);
  };setReportMessage
  const handleReportMessage = (event) => {
    setReportMessage(event.target.value);
  };
  // useEffect(() => {
  //   console.log(reportMessage);
  // }, [reportMessage]);


  return (
    <>
      <div className="bg-white py-5">
        <section className="p-5 rounded-xl mx-auto sm:w-full md:w-[80%] lg:w-[90%] xl:w-[90%] ">
          <div className=" rounded-xl p-5  bg-gradient-to-b from-subtlegray via-gray/5">
            <div className="p-5 text-center">
              <p className="sm:text-4xl text-3xl font-semibold mb-3 font-poppins text-primary">
                How Can We Assist You Today?
              </p>
              <p className="font-poppins text-lg text-black">
                Feel free to select the option that suits your current needs.
              </p>
              <p className="lg:w-1/2 w-full text-gray leading-relaxed font-poppins text-lg text-center mx-auto">
                Press{" "}
                <ArrowRightCircleIcon className="w-6 h-6 inline-block text-primary" />{" "}
                to Start.
              </p>
            </div>

            <div className="flex sm:flex-row flex-col gap-10 justify-center items-center">
              <div className="sm:max-w-xs max-w-sm  w-full bg-white border  border-gray/5 text-center rounded-xl shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
                <img className="h-52 mx-auto mt-2" src={report} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-xl text-primary capitalize text-center font-semibold tracking-tight  font-inter">
                    Report incidents
                  </h5>
                  <button
                    onClick={handleSelectButtonClickReport}
                    className="mx-auto "
                  >
                    <ArrowRightCircleIcon className="h-10 w-10 text-secondary hover:text-primary rounded-full" />
                  </button>
                </div>
              </div>
              <div className="sm:max-w-xs max-w-sm  w-full bg-white border border-gray/5 text-center rounded-xl shadow-md transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 ">
                <img className=" h-52 mx-auto mt-2" src={ambulance} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-xl capitalize font-semibold tracking-tight text-primary font-inter">
                    Travel assistance
                  </h5>
                  <button
                    onClick={handleSelectButtonClickAssistance}
                    className="mx-auto"
                  >
                    <ArrowRightCircleIcon className="h-10 w-10 text-secondary hover:text-primary rounded-full" />
                  </button>
                  {/* <p className="mb-3 font-normal text-gray font-poppins">
                  In emergencies, we ensure timely and safe hospital transport, prioritizing your well-being with swift and reliable aid.
                   
                  </p> */}
                  {/* <button
                    onClick={handleSelectButtonClickAssistance}
                    className="inline-flex items-center w-full justify-center rounded-full  px-3 py-2 text-md font-poppins font-medium text-center text-white bg-primary  hover:bg-primarydark focus:ring-4 focus:outline-none focus:ring-white  "
                  >
                    Proceed
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          {isLogIn && <LoginFirst onClose={handleCloseModal} />}
        </section>
      </div>
      {isReportModalVisible && (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 p-4 md:inset-0"
        >
          <div className="relative max-h-full w-full max-w-2xl">
            {/* <!-- Modal content --> */}
            <div className="relative rounded-lg bg-white shadow ">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between rounded-t border-b border-gray/30 bg-primary  p-4  ">
                <h3 className="text-xl font-semibold text-white font-inter ">
                  Raise an Alarm
                </h3>
                <button
                  type="button"
                  className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-white  "
                  onClick={() => setIsReportModalVisible(false)}
                >
                  <XMarkIcon className="w-7 h-7 font-bold  rounded-full" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="space-y-2 p-6">
                <div className="flex flex-col">
                  <div className="flex sm:justify-between sm:flex-row flex-col justify-center  ">
                    <div className="space-y-1"> 
                      <p className="font-inter font-semibold">Username: <span className="font-normal ">{username}</span></p>
                      <p className="font-inter font-semibold">Contact Number: <span className="font-normal">{contactNum}</span></p>
                      <p className="font-inter font-semibold">
                        Address: <span className="font-normal">{add.formatted_address}</span>
                      </p>
                      <TimeAndDateRepoting />
                    </div>
                    {/* <div className="flex items-center justify-center mt-3 mb-3">
                      <button
                       
                        className="bg-primary px-2  py-2 font-poppins text-white text-semibold text-sm rounded-full hover:bg-primarydark"
                      >
                        <MapPinIcon className="w-6 h-6 inline-block mr-1" />
                        Use Current Location
                      </button>
                    </div> */}
                  </div>
                </div>
                <p className="flex justify-start font-semibold font-inter">
                  Concern Type
                </p>
                <div className="grid place-items-center">
                  <div className="grid w-full max-w-lg xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 rounded-xl p-2">
                    <div>
                      <input
                        type="radio"
                        name="option"
                        id="Flood"
                        value="Flood"
                        className="peer hidden"
                        onChange={handleDisasterButton}
                      />
                      <label
                        htmlFor="Flood"
                        className="block cursor-pointer select-none rounded-xl font-inter border bg-subtlegray p-2 text-center text-black peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white border-gray/20"
                      >
                        Flood
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="option"
                        id="Fire"
                        value="Fire"
                        className="peer hidden"
                        onChange={handleDisasterButton}
                      />
                      <label
                        htmlFor="Fire"
                        className="block cursor-pointer select-none rounded-xl border font-inter bg-subtlegray p-2 text-center text-black peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white border-gray/20"
                      >
                        Fire
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        name="option"
                        id="Landslide"
                        value="Landslide"
                        className="peer hidden"
                        onChange={handleDisasterButton}
                      />
                      <label
                        htmlFor="Landslide"
                        className="block cursor-pointer select-none rounded-xl border font-inter bg-subtlegray p-2 text-center text-black peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white border-gray/20"
                      >
                        Landslide
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="option"
                        id="Vehicular_Accident"
                        value="Accident"
                        className="peer hidden"
                        onChange={handleDisasterButton}
                      />
                      <label
                        htmlFor="Vehicular_Accident"
                        className="block cursor-pointer select-none rounded-xl border font-inter bg-subtlegray p-2 text-center text-black peer-checked:bg-primary peer-checked:font-bold peer-checked:text-white border-gray/20"
                      >
                        Vehicular Accident
                      </label>
                    </div>
                  </div>
                </div>
                {/* <div className="max-w-xs">
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium font-inter"
                  >
                    Specify if not included in the Option
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className=" border border-gray/20 text-sm rounded-lg focus:ring-primary  block w-full p-2.5   "
                    placeholder="Please put the concern here"
                    required
                  />
                </div> */}
                <div className="sm:block hidden">
                  <label
                    className="block mb-2 text-sm font-medium font-inter"
                    htmlFor="default_size"
                  >
                    Upload a file
                  </label>
                  <input
                    className="block w-full mb-5 text-sm border border-gray/20   cursor-pointer  focus:outline-none "
                    id="default_size"
                    type="file"
                    // accept="video/*"
                    // ref={inputRef}
                    // onChange={handleFileChange}
                  />
                  {/* <video ref={videoRef} autoPlay muted style={{ display: "none" }} /> */}
                </div>
                <div className="sm:hidden block">
                  <p className="font-inter font-semibold">Send a Video </p>
                  <video ref={videoRef} className={`mt-2 ${isRecording ? 'block' : 'hidden'}`} playsInline autoPlay />
                  {isRecording && (
                    <div className="mt-2">
                      Recording time: {5 - recordingTime} seconds left
                    </div>
                  )}
                  <div className="flex items-center justify-center mb-4">
                    {isRecording ? (
                      <div className="flex items-center space-x-4">
                        <StopIcon
                          onClick={stopRecording}
                          className="h-10 w-10 text-red hover:text-primary rounded-full"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-14 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <button className="w-auto">
                          <svg
                            onClick={startRecording}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-10 h-12"
                          >
                            <path
                              strokeLinecap="round"
                              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                {videoData && (
                  <div className="mt-4 flex items-center">
                    <div className="mt-2">
                     <p className="font-inter font-semibold">Recorded Video: <span className="font-normal">{videoData.name}</span></p>  
                      {/* Recorded Video:
                      <video controls>
                        <source src={videoData.url} type="video/webm" />
                        Your browser does not support the video tag.
                      </video> */}
                    </div>

                    {isValid === false && (
                      <div className="text-red-500 ml-4">
                        Video is not valid. Please try again.
                      </div>
                    )}
                    <div>
                      <XCircleIcon
                   
                        onClick={() => {
                          discardVideo();
                          setCapturedFrames([]); // Clear captured frames when discarding
                        }}
                        className="h-10 w-10 text-red "
                      />
                    </div>
                  </div>
                )}
                <div className="font-inter">
                  <label
                    htmlFor="reportMessage"
                    className="block mb-2 text-sm font-medium "
                  >
                    Please provide Additional Information
                  </label>
                  <textarea
                    id="reportMessage"
                    rows="4"
                    className="block p-2.5 w-full text-sm  rounded-lg border border-gray/20 focus:ring-primary focus:border-primary   "
                    placeholder="Give us an insight on what happened."
                    value={reportMessage}
                    onChange={handleReportMessage}
                  ><p>Typed Message: {reportMessage}</p></textarea>
                </div>
                <div>
                  {capturedFrames.map(({ imageDataUrl, fileName }, index) => (
                    <div hidden key={index}>
                      <img
                        height="30px"
                        width="30px"
                        src={imageDataUrl}
                        alt={`Frame ${index}`}
                      />

                      <p>File Name: {fileName}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center justify-center  sm:justify-start p-6 space-x-2 border-t border-gray/30 bg-subtlegray rounded-b font-inter">
                <button
                  type="button"
                  className="text-white bg-primary  hover:bg-primarydark focus:ring-4 ring-subtlegray focus:outline-none    font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                  onClick={handleReportBtn}
                  disabled={verify === null || verifying}
                >
                  {isRecording ? <>
                    <svg aria-hidden="true" className="inline w-5 h-5 mr-2 text-white animate-spin  fill-primarydark" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> Recording
                  </> : verifying ?
                  <>
                     <svg aria-hidden="true" className="inline w-5 h-5 mr-2 text-white animate-spin  fill-primarydark" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>  
    Verifying 
    </>
    : 'Submit'}
                  
                </button>
                <button
                  type="button"
                  className=" bg-white hover:bg-subtlegray focus:ring-4 ring-subtlegray focus:outline-none  rounded-lg border border-gray/25 text-sm font-medium px-5 py-2.5 hover:focus:z-10   "
                  onClick={() => setIsReportModalVisible(false)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isTravelModalVisible && (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 p-4 md:inset-0"
        >
          <div className="relative max-h-full w-full max-w-2xl">
            {/* <!-- Modal content --> */}
            <div className="relative rounded-lg bg-white shadow ">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between rounded-t border-b border-gray/30 bg-primary  p-4  ">
                <h3 className="text-xl font-semibold text-white font-inter ">
                  Travel Assistance
                </h3>
                <button
                  type="button"
                  className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-black hover:bg-gray hover:text-white  "
                  onClick={() => setisTravelModalVisible(false)}
                >
                  <XMarkIcon className="w-7 h-7 font-bold  rounded-full" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="space-y-2 p-6">
                <div className="flex flex-col">
                  <div className="flex sm:justify-between sm:flex-row flex-col justify-center  ">
                    <div>
                      <p className="font-inter">Name: {username}</p>
                      <p className="font-inter">Contact Number: {contactNum}</p>
                      <p className="font-inter">
                        Address: {add.formatted_address}
                      </p>
                    </div>
                    {/* <div className="flex items-center justify-center mt-3 mb-3">
                      <button
                        
                        className="bg-primary px-2  py-2 font-poppins text-white text-semibold text-sm rounded-full hover:bg-primarydark"
                      >
                        <MapPinIcon className="w-6 h-6 inline-block mr-1" />
                        Use Current Location
                      </button>
                    </div> */}
                  </div>
                </div>
                <div className="font-inter">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium "
                  >
                    Please provide Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm  rounded-lg border border-gray/20 focus:ring-primary focus:border-primary   "
                    placeholder="Give us an insight on what happened."
                  ></textarea>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center justify-center  sm:justify-start p-6 space-x-2 border-t border-gray/30 bg-subtlegray rounded-b font-inter">
                <button
                  type="button"
                  className="text-white bg-primary  hover:bg-primarydark focus:ring-4 ring-subtlegray focus:outline-none    font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="text-gray-500 bg-white hover:bg-subtlegray focus:ring-4 ring-subtlegray focus:outline-none  rounded-lg border border-gray/25 text-sm font-medium px-5 py-2.5 hover:focus:z-10   "
                  onClick={() => setisTravelModalVisible(false)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {successModal && <SuccessReportModal closeSuccessModal={closeSuccessModal}/>}
    </>
  );
};

export default Reporting;
