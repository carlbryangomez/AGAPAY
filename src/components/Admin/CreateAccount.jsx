import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
const CreateAccount = () => {
  const [formData, setFormData] = useState({
    adminFirstName: "",
    adminLastName: ""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const createAccount = () => {
    // console.log('joko')
    const formDataToSend = new URLSearchParams();
    formDataToSend.append("fileSelector", "Register");
    formDataToSend.append("adminFirstName", formData.adminFirstName);
    formDataToSend.append("adminLastName", formData.adminLastName);
    formDataToSend.append("adminDepartment", formData.adminDepartment);
    formDataToSend.append("adminPhoneNumber", formData.adminPhoneNumber);
    formDataToSend.append("adminEmployeeID", formData.adminEmployeeID);
    formDataToSend.append("adminType", formData.adminType);
    formDataToSend.append("adminUsername", formData.adminUsername);
    formDataToSend.append("adminPassword1", formData.adminPassword1);
    formDataToSend.append("adminPassword2", formData.adminPassword2);

    const formDataToObject = {};
    formDataToSend.forEach(function (value, key) {
      formDataToObject[key] = value;
    });
    console.log(formDataToObject);
    axios
      .post("http://localhost/Backend/Controller.php", formDataToObject, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the API
        if (response.data === "Registration successful!") {
          alert("Successfully Registered!");
          // showLoginModal();
        } else alert(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const [inputType, setInputType] = useState("password");
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setInputType(isPasswordVisible ? "password" : "text");
  };
  const togglePasswordVisibility1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
    setInputType(isPasswordVisible1 ? "password" : "text");
  };
  return (
    <>
      <section className="bg-white min-h-screen sm:my-0 my-10">
        <div className="p-4 sm:ml-64">
          <h1 className="font-inter text-3xl mt-3">Account Creation</h1>
          <hr className="border-primary mt-3 mb-3" />
          <form>
            <div className="bg-white p-7 rounded-xl font-inter border-gray/20 border shadow-lg w-full max-w-6xl  mx-auto ">
              <div className="grid gap-6 mb-6 md:grid-cols-2 ">
                <div>
                  <label
                    htmlFor="adminFirstName"
                    className="block mb-2 text-sm   text-black  font-semibold"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="adminFirstName"
                    id="adminFirstName"
                    className=" bg-variantwhite/80 border border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="adminLastName"
                    className="block mb-2 text-sm font-semibold text-black  "
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="adminLastName"
                    id="adminLastName"
                    className=" border bg-variantwhite/80 border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="adminDepartment"
                    className="block mb-2 text-sm font-semibold text-black  "
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    id="adminDepartment"
                    name="adminDepartment"
                    onChange={handleInputChange}
                    className=" border bg-variantwhite/80 border-gray/30 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="adminPhoneNumber"
                    className="block mb-2 text-sm font-semibold text-black  "
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="adminPhoneNumber"
                    name="adminPhoneNumber"
                    onChange={handleInputChange}
                    className=" border border-gray/30 text-black bg-variantwhite/80  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="adminEmployeeID"
                    className="block mb-2 text-sm font-semibold text-black  "
                  >
                    Employee ID
                  </label>
                  <input
                    type="text"
                    id="adminEmployeeID"
                    name="adminEmployeeID"
                    onChange={handleInputChange}
                    className=" border border-gray/30 bg-variantwhite/80 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="adminType"
                    className="block mb-2 text-sm font-semibold text-black "
                  >
                    Account Type
                  </label>
                  <select
                    id="adminType"
                    name="adminType"
                    onChange={handleInputChange}
                    className=" border border-gray/30 bg-variantwhite/80 text-black mb-6 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 focus:outline-none"
                  >
                    <option defaultValue="">Choose an Account</option>
                    <option value="responder">Responder</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <div className="mb-6 ">
                <label
                  htmlFor="adminEmail"
                  className="block mb-2 text-sm font-semibold text-black  "
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="adminUsername"
                  name="adminUsername"
                  onChange={handleInputChange}
                  className=" border border-gray/30 bg-variantwhite/80 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-6 relative">
                <label
                  htmlFor="adminPassword1"
                  className="block mb-2 text-sm font-semibold text-black  "
                >
                  Password
                </label>
                <input
                  type={inputType}
                  id="adminPassword1"
                  name="adminPassword1"
                  onChange={handleInputChange}
                  className=" border border-gray/30 bg-variantwhite/80 text-black  text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  focus:outline-none"
                  placeholder="•••••••••"
                  required
                />
                <i
                  className="bi bi-eye-slash eye-icon absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <EyeIcon className="w-6 h-6 mt-7" />
                  ) : (
                    <EyeSlashIcon className="w-6 h-6 mt-7" />
                  )}
                </i>
              </div>
              <div className="mb-6 relative">
                <label
                  htmlFor="adminPassword2"
                  className="block mb-2 text-sm font-semibold text-black  "
                >
                  Confirm password
                </label>
                <input
                  type={inputType}
                  id="adminPassword2"
                  name="adminPassword2"
                  onChange={handleInputChange}
                  className=" border border-gray/30 bg-variantwhite/80 text-black text-sm rounded-lg focus:ring-primary focus:outline-none
 focus:border-primary block w-full p-2.5  "
                  placeholder="•••••••••"
                  required
                />
                <i
                  className="bi bi-eye-slash eye-icon absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer "
                  onClick={togglePasswordVisibility1}
                >
                  {isPasswordVisible1 ? (
                    <EyeIcon className="w-6 h-6 mt-7" />
                  ) : (
                    <EyeSlashIcon className="w-6 h-6 mt-7" />
                  )}
                </i>
              </div>
              <button
                type="submit"
                onClick={createAccount}
                className="text-white bg-primary hover:bg-primarydark focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateAccount;
