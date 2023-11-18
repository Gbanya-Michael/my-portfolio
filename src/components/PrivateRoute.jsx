import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const [termsAgreed, setTermsAgreed] = useState(false);

  if (!termsAgreed) {
    return <Navigate to="/" />;
  }
  return children;
}
