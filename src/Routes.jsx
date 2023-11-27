import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, EmergencyResources, About } from "./components/User";
import ContactUs from "./components/User/ContactUs";
import ResponderDashboard from "./components/Responder/Dashboard";
import ResponderRecords from "./components/Responder/Records";
import ResponderReports from "./components/Responder/Reports";
import ResponderUserSettings from "./components/Responder/UserSettings";
import AdminDashboard from "./components/Admin/Dashboard";
import AdminRecords from "./components/Admin/Records";
import CreateAccount from "./components/Admin/CreateAccount";
import CreateAlert from "./components/Admin/CreateAlert";
import CreateAnnouncement from "./components/Admin/CreateAnnouncement";
import SafetyGuidelines from "./components/User/SafetyGuidelines";
import UserDetails from "./components/User/UserDetails";
import ErrorPage from "./components/ErrorPage";
import ErrorBoundary from "./components/ErrorBoundary";
import AdminLogin from "./components/Admin/AdminLogin";
import PrivacyPolicy from "./components/User/PrivacyPolicy";
import TermsConditions from "./components/User/TermsConditions";
import VideoToImagesConverter from "./components/User/aa";
import AdminUserSettings from "./components/Admin/AdminUserSettings";
import AdminReports from "./components/Admin/AdminReports";
// import ProtectedRoutes from "./components/ProtectedRoutes";
const AppRoutes = ({ status, userType, username, contactNum, userId }) => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              status={status}
              userType={userType}
              username={username}
              contactNum={contactNum}
              userId={userId}
            />
          }
        />
        <Route path="/user/accountdetails" element={<UserDetails />} />
        <Route path="/nearby-services" element={<EmergencyResources />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsConditions />} />


        <Route path="/responder" element={<ResponderDashboard />} />
        <Route path="/responder/records" element={<ResponderRecords />} />
        <Route path="/responder/reports" element={<ResponderReports />} />
        <Route
          path="/responder/usersettings"
          element={<ResponderUserSettings />}
        />

        <Route path="/aa" element={<VideoToImagesConverter />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/records" element={<AdminRecords />} />
        <Route path="/admin/createaccount" element={<CreateAccount />} />
        <Route path="/admin/createalert" element={<CreateAlert />} />
        <Route path="/admin/usersettings" element={<AdminUserSettings />} />

        <Route
          path="/admin/createannouncement"
          element={<CreateAnnouncement />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRoutes;
