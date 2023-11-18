import React from "react";
import { Navigate } from "react-router-dom";
import { useSessionStorage } from "./useSessionStorage";

export default function PrivateRoute({ children }) {
  const { getSessionStorage } = useSessionStorage();
  const agreedToTerms = getSessionStorage();
  if (!agreedToTerms) {
    return <Navigate to="/entry-terms" />;
  }
  return children;
}
