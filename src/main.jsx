import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import StorageProvider from "./StorageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StorageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StorageProvider>
  </React.StrictMode>
);
