import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const AdminReports = () => {
  const [reportData, setReportData] = useState([]);
  useEffect(() => {
    // console.log(1);
    const formData = new FormData();
    // formData.append("fileSelector", "ReportData");
    axios
      .get(
        "http://localhost/Backend/Controller.php?fileSelector=ReportData",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        // if (response.data === "") {
        // } else return alert(response.data);
        // // loggedIn(false);
        // alert("Response Sent!");
        const newData = response.data.reportData.data;
        console.log(response);
        console.log(newData);

        // Update the state with the fetched data
        setReportData(newData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <section className="bg-white min-h-screen sm:my-0 my-10">
      <div className="p-4 sm:ml-64">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            {reportData.map((report, index) => (
              <div className=" flex flex-col bg-white border border-gray/20  rounded-xl hover:shadow-md transition shadow-lg ">
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-primary font-bold  font-inter text-2xl">
                        {report.disaster} 
                      </h3>
                      <button disabled className={`px-1 py-1 ${report.ai_verify === '1' ? 'bg-secondary/80 hover:bg-secondary/50' : 'bg-red/80 hover:bg-red/50'} rounded-xl font-inter font-medium text-white text-sm`}>
                        {report.ai_verify === '1' ? 'Valid Verification by AI' : 'Invalid Verification by AI'}
                      </button>
                      <p className="text-lg leading-loose font-poppins  font-semibold">
                        {report.user_id} name
                      </p>
                      <p className="text-lg leading-loose font-poppins font-medium">
                        {report.user_id} contact number
                      </p>
                      <p className="text-lg  font-poppins font-medium">
                        {report.disaster_address}
                      </p>
                      <p className="text-base  font-poppins border border-dashed rounded-xl p-1 border-gray/20">
                        {report.description}
                      </p>
                      <p className="text-base  font-poppins text-center mt-3  rounded-xl p-1 text-darkblue font-semibold hover:underline ">
                        {report.video}
                      </p>
                      <div>
                        <video width="800" height="600" controls>
                          {/* Replace 'your_video_url' with the actual URL of your video */}
                          <source src={`http://localhost/Backend/Videos/Upload/${report.video}`} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <label
                        htmlFor="ambulance"
                        className="block mb-2 text-sm font-medium font-poppins "
                      >
                        Ambulance
                      </label>
                      <select
                        id="ambulance"
                        className="bg-subtlegray border border-gray/30 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-inter"
                      >
                        <option selected>Send Ambulance</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <div className="flex flex-row gap-3 justify-center mt-2">
                        <button className="px-2 py-2 bg-primary rounded-xl font-inter font-medium text-white text-sm hover:bg-primarydark">
                          Send Responder
                        </button>
                        <button className="text-[#c94c05] hover:text-white border border-red font-inter bg-none hover:bg-red focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                          Decline Report
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminReports;
