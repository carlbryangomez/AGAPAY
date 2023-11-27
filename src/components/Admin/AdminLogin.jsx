import React, {useState} from "react";
import axios from "axios";


const AdminLogin = () => {
  const [formData, setFormData] = useState({
    adminUsername: "",
    adminPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const adminLogin = () => {
    const formDataToSend = new URLSearchParams();
    formDataToSend.append("fileSelector", "Login");
    formDataToSend.append("adminUsername", formData.adminUsername);
    formDataToSend.append("adminPassword", formData.adminPassword);
    const formDataToObject = {};
    formDataToSend.forEach(function (value, key) {
      formDataToObject[key] = value;
    });
    console.log(formDataToObject);
    axios
      .post("http://localhost/Backend/Controller.php", formDataToObject, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the API
        if (response.data.message === "You are logged in") {
          alert(response.data.message);
          const type = response.data.type;
          window.location.href = `/${type}`;
        } else alert(response.data.message);
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };
  return (
    <div className="flex h-full items-center  min-h-screen bg-primary/10">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray/20 rounded-xl shadow-md ">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-4xl font-bold font-inter leading-loose text-primary">
                Login
              </h1>
              <p className="font-poppins leading-relaxed">
                Secure access for respective personnels.
              </p>
            </div>
            <div className="mt-5">
              {/* <form> */}
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="adminUsername"
                      className="block font-semibold text-sm mb-2 font-inter"
                    >
                      Username
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="adminUsername"
                        id="adminUsername"
                        className="py-3 px-4 block w-full border font-inter border-gray/40 rounded-lg text-sm focus:border-primary focus:ring-primary focus:outline-none "
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <label
                        htmlFor="adminPassword"
                        className="block font-semibold text-sm mb-2 font-inter"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        onChange={handleInputChange}
                        name="adminPassword"
                        id="adminPassword"
                        className="py-3 px-4 block w-full border border-gray/40 rounded-lg text-sm focus:border-primary focus:ring-primary focus:outline-none "
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={adminLogin}
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-primarydark font-poppins tracking-wide"
                  >
                    Login
                  </button>
                </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;
