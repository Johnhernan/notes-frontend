import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const auth = (loggedIn) => {
  return loggedIn;
};

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.user);
  const isLogged = auth(user.values.isLoggedIn);
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
