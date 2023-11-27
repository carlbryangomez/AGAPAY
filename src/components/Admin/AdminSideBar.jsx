import React, { useState, useEffect } from "react";
import {
  Bars3BottomLeftIcon,
  HomeIcon,
  MegaphoneIcon,
  ClipboardDocumentListIcon,
  ArrowLeftIcon,
  UserIcon,
  ChatBubbleOvalLeftIcon,
  ChatBubbleLeftIcon,
  UserCircleIcon,
  ChevronDownIcon,
  ArrowLeftCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const AdminSideBar = ({ status, userType, username }) => {
  useEffect(() => {
    // alert(status);
    if (status === "active" && userType === "admin") {
      console.log("Logged In.");
    } else {
      window.location.href = "/*";
    }
    // alert(isLoggedIn);
    // alert(isLoggedIn);
  }, [status, userType]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <>
      <nav className="fixed top-0 z-30 w-full bg-white border-b border-gray/20 ">
        <button
          onClick={toggleSidebar}
          aria-expanded={isSidebarOpen ? "true" : "false"}
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon className="w-6 h-6" />
        </button>
      </nav>
      <aside
        className={`fixed top-0 left-0 z-20 w-64 h-screen transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } bg-white  sm:translate-x-0 `}
        aria-label="Sidebar"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-primary  ">
          {/* <img src={logo} className="w-16 h-16 mx-auto mb-5" alt="Agapay Logo" />   */}
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin"
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === "/admin"
                    ? "bg-primarydark text-opacity-100"
                    : "hover:bg-primarydark text-opacity-80 hover:text-opacity-100"
                }`}
              >
                <HomeIcon className="w-5 h-5 text-white " />
                <span className="ml-3 font-inter text-md font-semibold ">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/reports"
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === "/admin/reports"
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
                to="/admin/records"
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === "/admin/records"
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
                to=""
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === ""
                    ? "bg-primarydark text-opacity-100"
                    : "hover:bg-primarydark text-opacity-80 hover:text-opacity-100"
                }`}
              >
                <ChatBubbleLeftIcon className="w-5 h-5 text-white " />
                <span className="ml-3 font-inter text-md font-semibold">
                  Messages
                </span>
              </Link>
            </li>
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-white/50 ">
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-white font-inter font-semibold hover:bg-primarydark text-opacity-80 hover:text-opacity-100  text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 "
                aria-controls="dropdown-sales"
                onClick={toggleDropdown}
              >
                <UserCircleIcon className="w-5 h-5 text-white " />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Account
                </span>

                <ChevronDownIcon
                  className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <ul className="py-2 space-y-2 font-inter">
                  <li>
                    <Link
                      to="/admin/createaccount"
                      className="flex items-center p-2 pl-11 w-full text-md text-white font-semibold rounded-lg  hover:bg-primarydark text-opacity-80 hover:text-opacity-100 "
                    >
                      Creation of Account
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-md text-white font-semibold rounded-lg  hover:bg-primarydark text-opacity-80 hover:text-opacity-100 "
                    >
                      List of Admin
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-md text-white font-semibold rounded-lg  hover:bg-primarydark text-opacity-80 hover:text-opacity-100 "
                    >
                      List of Responders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center p-2 pl-11 w-full text-md text-white font-semibold rounded-lg  hover:bg-primarydark text-opacity-80 hover:text-opacity-100 "
                    >
                      List of Users
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <ul className="pt-5  space-y-2  border-white/50 ">
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-white font-inter font-semibold hover:bg-primarydark text-opacity-80 hover:text-opacity-100  text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 "
                aria-controls="dropdown-sales"
                onClick={toggleDropdown1}
              >
                <MegaphoneIcon className="w-5 h-5 text-white " />
                {/* Your button content here */}
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Announcement
                </span>

                <ChevronDownIcon
                  className={`w-6 h-6 ${isOpen1 ? "transform rotate-180" : ""}`}
                />
              </button>
              {isOpen1 && (
                <ul className="py-2 space-y-2 font-inter">
                  <li>
                    <Link
                      to="/admin/createannouncement"
                      className="flex items-center p-2 pl-11 w-full text-md text-white font-semibold rounded-lg  hover:bg-primarydark text-opacity-80 hover:text-opacity-100 "
                    >
                      Create an Announcement
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/createalert"
                      className="flex items-center p-2 pl-11 w-full text-md text-white font-semibold rounded-lg  hover:bg-primarydark text-opacity-80 hover:text-opacity-100 "
                    >
                      Create an Alert
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/admin/usersettings"
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === "/admin/usersettings"
                    ? "bg-primarydark text-opacity-100"
                    : "hover:bg-primarydark text-opacity-80 hover:text-opacity-100"
                }`}
              >
                <UserIcon className="w-5 h-5 text-white " />
                <span className="ml-3 font-inter text-md font-semibold">
                  User
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="adminlogin"
                className={`flex items-center text-white font-poppins p-2 rounded-lg ${
                  location.pathname === ""
                    ? "bg-primarydark text-opacity-100"
                    : "hover:bg-primarydark text-opacity-80 hover:text-opacity-100"
                }`}
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5 text-white " />
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

export default AdminSideBar;
