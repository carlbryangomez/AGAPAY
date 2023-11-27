import React, { useState, useEffect } from "react";
import { logo, assistance } from "../../assets";
import { handleLogout } from "../User/Navbar";
import {
  Bars3BottomLeftIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  ChatBubbleOvalLeftIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
const SideBarResponder = ({ status, userType, username }) => {
  useEffect(() => {
    // alert(status);
    if (status === "active" && userType === "responder") {
      console.log("Logged In.");
    } else {
      window.location.href = "/*";
    }
    // alert(isLoggedIn);
    // alert(isLoggedIn);
  }, [status, userType]);

  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="fixed top-0 z-30 w-full bg-white border-b border-gray/20 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
                aria-expanded={isSidebarOpen ? "true" : "false"}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="w-6 h-6" />
              </button>
              <a className="flex ml-2 md:mr-24">
                <img src={logo} className="h-12 mr-3" alt="Agapay Logo" />
                <img
                  src={assistance}
                  className="h-8 mt-2 hidden sm:inline-block"
                  alt="Assistance Given Amidst Plight and Yields"
                />
              </a>
            </div>
            {/* ... */}

            {/* Profile button and dropdown */}
            <div className="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex text-md text-primary  focus:ring-4 focus:ring-white font-inter font-semibold "
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open user menu</span>
                  <UserCircleIcon className="w-6 h-5 inline-block mr-1 mt-0.5 text-black/80" />
                  Joko Gadingan
                  <ChevronDownIcon className="ml-1 w-4 h-4 mt-0.5 inline-block text-gray/70" />
                </button>
              </div>
              <div
                className={`z-50 ${
                  isDropdownOpen ? "block" : "hidden"
                } absolute right-5 top-12 mt-2  list-none bg-white divide-gray/20 divide-y  rounded shadow `}
              >
                <div className="px-4 py-3">
                  <p className="text-sm font-inter text-primary ">
                    Joko Gadingan
                  </p>
                  <p className="text-sm font-medium  truncate font-inter ">
                    jokoiloveyou@gmail.com
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <Link
                      to="/responder"
                      onClick={isDropdownOpen}
                      className="block px-4 py-2 text-sm text-gray/80 hover:text-black hover:bg-gray/20 "
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/responder/usersettings"
                      onClick={isDropdownOpen}
                      className="block px-4 py-2 text-sm text-gray/80 hover:text-black hover:bg-gray/20  "
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm  text-gray/80 hover:text-black hover:bg-gray/20 "
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-20 w-64 h-screen pt-[73px] transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } bg-white  sm:translate-x-0 `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto  bg-primary ">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/responder"
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === "/responder"
                    ? "bg-primarydark text-opacity-100"
                    : "hover:bg-primarydark text-opacity-80 hover:text-opacity-100"
                }`}
              >
                <HomeIcon className="w-5 h-5 text-white " />
                <span className="ml-3 font-inter text-md font-semibold">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/responder/records"
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === "/responder/records"
                    ? "bg-primarydark text-opacity-100"
                    : "hover:bg-primarydark text-opacity-80 hover:text-opacity-100"
                }`}
              >
                <ClipboardDocumentListIcon className="w-5 h-5 text-white " />
                <span className="ml-3 font-inter text-md font-semibold">
                  Records
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/responder/reports"
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === "/responder/reports"
                    ? "bg-primarydark text-opacity-100"
                    : "hover:bg-primarydark text-opacity-80 hover:text-opacity-100"
                }`}
              >
                <ChatBubbleOvalLeftIcon className="w-5 h-5 text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap font-inter text-md font-semibold">
                  Reports
                </span>
                <span className="inline-flex items-center font-inter bg-accent text-black justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="adminLogin"
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === ""
                    ? "bg-primarydark text-opacity-100"
                    : "hover:bg-primarydark text-opacity-80 hover:text-opacity-100"
                }`}
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5 text-white" />
                <span className="ml-3 font-inter text-md font-semibold">
                  Sign Out
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-overlay z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default SideBarResponder;
