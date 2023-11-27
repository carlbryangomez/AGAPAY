
import React, { useRef, useState, useEffect } from "react";

const VideoToImagesConverter = () => {
  const [isHidden, setIsHidden] = useState(true);
  const videoRef = useRef(null);
  const inputRef = useRef(null);
  const capturedImagesRef = useRef([]);
  const [capturedImages, setCapturedImages] = useState([]);

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
  
    // Update the state with the captured image and its file name
    setCapturedImages((prevImages) => [
      ...prevImages,
      { imageDataUrl, fileName },
    ]);
    capturedImagesRef.current = [
      ...capturedImagesRef.current,
      { imageDataUrl, fileName },
    ];
    setCapturedImages(capturedImagesRef.current);
  };
  
  useEffect(() => {
    if (videoRef !== null) {
      const video = videoRef.current;
  
      console.log("eto yon: "+ video.duration);
      // Event listener for the 'loadedmetadata' event
      const handleLoadedMetadata = () => {
        // Set up an interval to capture frames every second
        const intervalId = setInterval(() => {
          if (video.currentTime < video.duration) {
            captureFrame();
            video.currentTime += 1; // Move forward by 1 second
          } else {
            // Video playback is finished, clear the interval
            clearInterval(intervalId);
            console.log("Captured Images:", capturedImagesRef.current);
          }
        }, 1000);
  
        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
      };
  
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
  
      return () => {
        // Clean up event listener on component unmount
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, [videoRef, capturedImages]);

  const handleFileChange = () => {
    const video = videoRef.current;
    const file = inputRef.current.files[0];

    if (file) {
      const videoURL = URL.createObjectURL(file);
      video.src = videoURL;
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <video ref={videoRef} autoPlay muted style={{ display: "none" }} />

      <div>
        {capturedImages.map(({ imageDataUrl, fileName }, index) => (
          <div key={index}>
            <img
              height="90px"
              width="150px"
              src={imageDataUrl}
              alt={`Frame ${index}`}
            />
            {isHidden ? null : <p>File Name: {fileName}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoToImagesConverter;