import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const ProtectedRoutes = ({ status }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (status === "inactive") {
      // alert(auth);
      setAuth(true);
    } else {
        setAuth(false);
    }
  }, [status]); // <-- Correct dependency array to watch for changes in 'status'

  const isAuth = auth; // <-- Use the custom hook here

  return isAuth ? <Outlet /> : <AdminLogin />;
};

export default ProtectedRoutes;
