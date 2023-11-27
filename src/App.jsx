import React, { useEffect, useState } from "react";
import "./index.css";
import { Navbar } from "./components/User";
import AppRoutes from "./Routes";
import SideBarResponder from "./components/Responder/SideBar";
import AdminSideBar from "./components/Admin/AdminSideBar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import LoaderComponent from "./components/LoaderComponent";
const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Check the current pathname
  
  const currentPath = location.pathname;
  const [isLoading, setIsloading] = useState(true);
  const [sessionStatus, setSessionStatus] = useState("loading");
  const [sessionUsertype, setSessionUsertype] = useState("loading");
  const [sessionUsername, setSessionUsername] = useState("loading");
  const [sessionContactNum, setSessionContactNum] = useState("loading");
  const [sessionUserId, setSessionUserId] = useState(null);
  const [isDefault, setDefault] = useState(true);
  // Function to check/review session every minute
  const checkSession = () => {
    axios
      .get("http://localhost/Backend/CheckSession.php", {
        withCredentials: true,
      }) // Replace with your endpoint URL
      .then((response) => {
        // Handle the response data here
        // const { status, message } = response.data;

        // Access the 'status' and 'message' properties
        console.log("Status:", response.data.Status);
        // console.log("Message:", response.data.Message);
        const { Status, UserType, Username, ContactNum, User_id } = response.data;
        setSessionStatus(Status);
        setSessionUsertype(UserType);
        setSessionUsername(Username);
        setSessionContactNum(ContactNum);
        if (Status === "active" && UserType === "User") {
          setSessionUserId(User_id);
          // console.log("User Type:", UserType);
          // console.log("Username:", Username);
        }
      })
      .catch((error) => {
        console.error("Error checking session:", error);
      });
  };
  useEffect(() => {
    checkSession();

    // Set interval to check session every minute (60,000 milliseconds)
    const interval = setInterval(checkSession, 30000);

    // Clear interval when the component is unmounted to prevent memory leaks
    return () => clearInterval(interval);
  }, [sessionStatus, sessionUsertype, sessionUsername]); // Empty dependency array ensures this effect runs once after initial render

  // Function to update the state with data from the children
  const handleIsLoggedInSession = (data) => {
    if (data === true) {
      // alert('gumana');
      checkSession();
    }
  };
  useEffect(() => {
    // Check if the session status is not 'loading' and other necessary conditions
    if (sessionStatus !== "loading") {
      // Data is loaded, set loading to false
      setIsloading(false);
    }
  }, [sessionStatus]);
  useEffect(() => {
    if (currentPath.startsWith("/admin") && sessionStatus === "active" && sessionUsertype === "responder") {
      navigate("/responder");
      setIsloading(true);
      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    }
    if (currentPath.startsWith("/responder") && sessionStatus === "active" && sessionUsertype === "admin") {
      navigate("/admin");
      setIsloading(true);
      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    }

    if (
      (currentPath.startsWith("/admin") ||
        currentPath.startsWith("/responder")) &&
      currentPath !== "/adminlogin" &&
      (sessionStatus === "inactive" || sessionUsertype === "User")
    ) {
      // alert(false);
      // console.log(false);
      setIsloading(true);
      if (sessionStatus === "active" && sessionUsertype === "User") {
        navigate("/");
      } else {
        navigate("/*");
      }
      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    }
  }, [sessionStatus, sessionUsertype]);
  return isLoading ? (
    <LoaderComponent />
  ) : (
    <>
      <AppRoutes
        status={sessionStatus}
        userType={sessionUsertype}
        username={sessionUsername}
        contactNum={sessionContactNum}
        userId={sessionUserId}
      />

      {currentPath.startsWith("/responder") !== true &&
        currentPath.startsWith("/admin") !== true &&
        sessionStatus !== "loading" && 
        sessionStatus !== "loading" && (
          <Navbar
            status={sessionStatus}
            userType={sessionUsertype}
            username={sessionUsername}
            isLoggedInSessionToParent={handleIsLoggedInSession}
          />
        )}

      {currentPath.startsWith("/responder") === true &&
        currentPath !== "/adminlogin" &&
        sessionUsertype === "responder" && (
          <SideBarResponder
            status={sessionStatus}
            userType={sessionUsertype}
            username={sessionUsername}
          />
        )}
      {currentPath.startsWith("/admin") === true &&
        currentPath !== "/adminlogin" &&
        sessionUsertype === "admin" && (
          <AdminSideBar
            status={sessionStatus}
            userType={sessionUsertype}
            username={sessionUsername}
          />
        )}
    </>
  );
};
export default App;