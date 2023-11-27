import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import styles from "../../style";
import { menu, assistance } from "../../assets";
import Login from "./Login";
import {
  ArrowRightCircleIcon,
  ArrowDownCircleIcon,
  PhoneIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";

export const handleLogout = (isLoggedIn, isNavbar) => {
  return new Promise((resolve) => {
    const formDataToObject = { fileSelector: "Logout" };
    axios
      .post("http://localhost/Backend/Controller.php", formDataToObject, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the API
        if (response.data === "Session Destroyed.") {
          // Additional logout logic can be added here if needed
          resolve(); // Resolve the promise after successful logout
        } else {
          console.log("error");
          resolve(); // Resolve the promise even in case of an error
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        resolve(); // Resolve the promise in case of an error
      });
  });
};

const Navbar = ({ status, userType, username, isLoggedInSessionToParent }) => {
  const isLoggedInSession = (data) => {
    // Call the function passed from the parent (ParentComponent)
    isLoggedInSessionToParent(data);
  };
  const logout = (data) => {
    // Call the function passed from the parent (ParentComponent)
    isLoggedInSessionToParent(data);
  };
  // let bool;
  // if(status === "active"){
  //   bool = true;
  // }else{
  //   bool = false;
  // }
  // alert(status);
  const [isLoggedIn, setIsLoggedIn] = useState(status);
  useEffect(() => {
    // alert(userType);
    if (status === "active" && userType === "User") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    // alert(isLoggedIn);
    // alert(isLoggedIn);
  }, [status]); // Empty dependency array ensures this effect runs once after initial render

  // const handleLogin = () => {
  //   if (userType === 'User'){
  //     alert('titi');
  //   }
  //   // Here you can implement your login logic.
  //   // For example, you can make an API call to authenticate the user.
  //   // If authentication is successful, update the isLoggedIn state to true.

  //   // For now, I'll just toggle the login status for demonstration purposes.
  //   setIsLoggedIn(!isLoggedIn);
  // };

  // const [sessionStatus, setSessionStatus] = useState('loading');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const handleLoginModalToggle = () => {
    setLoginModalVisible(!isLoginModalVisible);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isPopoverHovered, setIsPopoverHovered] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  //  phone number for Along Hotline
  const phoneNumber11 = "(888) 25664";
  const [showModalphone11, setShowModalphone11] = useState(false);
  useEffect(() => {
      
    if (showModalphone11) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';  
    }

    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModalphone11]);
  const handleCallClick11 = () => {
    setShowModalphone11(true);
  };

  const handleConfirmCall11 = () => {
    makePhoneCall11();
    setShowModalphone11(false);
  };

  const handleCancelCall11 = () => {
    setShowModalphone11(false);
  };

  const makePhoneCall11 = () => {
    window.location.href = `tel:${phoneNumber11}`;
  };

  // end phone number for 4th avenue station

  return (
    <>
      <nav className="fixed top-0 w-full bg-white border-gray-200 z-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img src={logo} className="h-24  flex items-center" alt="Logo" />
            <img
              src={assistance}
              className="h-10  hidden sm:block"
              alt="Logo"
            />
          </a>

          <div
            className={`flex items-center popoverHotline relative ${
              isPopoverHovered ? "z-0" : "z-10"
            }`}
            onMouseEnter={() => setIsPopoverHovered(true)}
            onMouseLeave={() => setIsPopoverHovered(false)}
          >
            <div className="group relative inline-block cursor-pointer">
              <h1
                onClick={handleCallClick11}
                className="mr-6 text-sm  font-poppins hidden sm:block"
              >
                (888) 25664
              </h1>
              <div className="invisible absolute z-10 mt-2  text-center  rounded-lg  right-32 -bottom-5   opacity-0 group-hover:visible group-hover:opacity-100 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300">
                <p className=" py-4 px-2 text-primary relative text-xl font-semibold font-poppins whitespace-nowrap   shadow-md rounded-xl ">
                  Along Malapitan Hotline
                </p>
              </div>
            </div>
            {/* <button
              className="text-md font-poppins font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3 hover:bg-secondary hover:text-white px-2 py-2 rounded-lg"
              onClick={handleLoginModalToggle}
            >
              robinamaganda
              <ChevronDownIcon    className="w-6 h-6 inline-block ml-1" />
            </button> */}
            {isLoggedIn ? (
              <>
                <div className="flex items-center ml-3">
                  <div>
                    <button
                      type="button"
                      onClick={toggleDropdown}
                      className="text-md font-poppins font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3 hover:bg-secondary hover:text-white px-2 py-2 rounded-lg"
                      aria-expanded={isDropdownOpen ? "true" : "false"}
                    >
                      <span className="sr-only">Open user menu</span>
                      <UserCircleIcon className="w-5 h-5 mb-1 inline-block mr-1" />
                      {userType === "User" ? username : "Please Log In."}
                      <ChevronDownIcon className="w-5 h-5 inline-block ml-1" />
                    </button>
                  </div>
                  <div
                    onMouseLeave={toggleDropdown}
                    className={` ${
                      isDropdownOpen ? "block" : "hidden"
                    } absolute right-5 top-12 mt-2 z-[20]  list-none bg-white divide-gray/20 divide-y  rounded shadow `}
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm font-inter text-primary ">
                        {userType === "User" ? username : "Please Log In."}
                      </p>
                      <p className="text-sm font-medium  truncate font-inter ">
                        jokoiloveyou@gmail.com
                      </p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <Link
                          to="/user/accountdetails"
                          onClick={isDropdownOpen}
                          className="block px-4 py-2 text-sm text-gray/80 hover:text-black hover:bg-gray/20   "
                        >
                          Account Details
                        </Link>
                      </li>
                      <li>
                        <a
                         
                         onClick={async () => {
                          await handleLogout(false, true);
                          logout(true);
                          alert('titi');
                          toggleDropdown();
                        }}
                          className="block px-4 py-2 text-sm cursor-pointer  text-gray/80 hover:text-black hover:bg-gray/20 "
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <button
                className="text-md font-poppins font-semibold transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  text-secondary mr-3 hover:bg-secondary hover:text-white px-2 py-2 rounded-lg"
                onClick={handleLoginModalToggle}
              >
                Login
                <ArrowRightCircleIcon className="w-6 h-6 inline-block ml-1" />
              </button>
            )}

            {isLoginModalVisible && (
              <Login
                onClose={handleLoginModalToggle}
                isLoggedInSession={isLoggedInSession}
              />
            )}
            {/* <Link
              className="text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300  font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg "
              to=""
            >
              Download
             <ArrowDownCircleIcon className="w-6 h-6 inline-block ml-1" />
            </Link> */}
          </div>
        </div>
      </nav>
      <nav
        className={`fixed top-0 w-full bg-primary
        ${isDropdownOpen ? "z-[5]" : "z-10"}
        ${isLoginModalVisible || isPopoverHovered ? "z-[5]" : "z-10"}
        ${isLoginModalVisible ? "z-[5]" : "z-10"}
        mt-24`}
      >
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex flex-row gap-2">
            <button
              className="block sm:hidden  text-white bg-primarydark py-2 px-2 rounded-lg"
              onClick={toggleNavbar}
            >
              <img src={menu} alt="" />
            </button>
            <span
              onClick={toggleNavbar}
              className="text-white block sm:hidden font-inter font-semibold text-lg"
            >
              Menu
            </span>
          </div>
          <div className="flex items-center justify-center sm:justify-between flex-wrap">
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } sm:flex flex-col sm:flex-row font-medium mt-0 space-y-3 sm:space-y-0 sm:space-x-10 text-sm text-center`}
            >
              <li>
                <Link
                  className={`${styles.navLinks}`}
                  to="/"
                  onClick={toggleNavbar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks}`}
                  to="/nearby-services"
                  onClick={toggleNavbar}
                >
                  Emergency Resources
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks}`}
                  to="/safety-guidelines"
                  onClick={toggleNavbar}
                >
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link
                  className={`${styles.navLinks}`}
                  to="/about"
                  onClick={toggleNavbar}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* // phone number for 4th avenue station */}
{showModalphone11 && (
  <div className="fixed top-0 z-50  left-0 w-full  h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-md max-h-full p-5">
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <PhoneIcon className="h-12 w-12 mb-5 mx-auto text-primary animate-pulse" />
      <p className="mb-4 font-inter text-center leading-loose">Are you sure you want to call {phoneNumber11}?</p>
      <div className="flex flex-row  justify-center items-center">
      <button
        className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        onClick={handleConfirmCall11}
      >
        Yes
      </button>
      <button
       className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        onClick={handleCancelCall11}
      >
        No
      </button>
</div>
    </div>
</div>
  </div>
)}
    </>
  );
};

export default Navbar;
