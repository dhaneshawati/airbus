import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const user = useSelector((state) => state.userInfo.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default ProtectedRoutes;
