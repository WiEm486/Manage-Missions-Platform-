//we do this file.js cause when we logOut the account page should be protected
import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Protected = (children) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="signin"></Navigate>;
  }
  return children;
};

export default Protected;
