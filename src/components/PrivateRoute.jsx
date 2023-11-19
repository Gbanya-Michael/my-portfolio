import React from "react";
import { Navigate } from "react-router-dom";
import { useStorage } from "../StorageContext";

export default function PrivateRoute({ children }) {
  const { isAllowed } = useStorage();

  if (!isAllowed) {
    return <Navigate to="/entry-terms" />;
  }
  return children;
}
