import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DownloadCvPage from "./pages/DownloadCvPage";
import ContactPage from "./pages/ContactPage";
import CodehancePage from "./pages/CodehancePage";
import AroundTheWorldPage from "./pages/AroundTheWorldPage";
import AboutPage from "./pages/AboutPage";
import CommunityPage from "./pages/CommunityPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import PrivateRoute from "./components/PrivateRoute";
import EntryTerms from "./components/EntryTerms";
import PortfolioPage from "./pages/PortfolioPage";
function App() {
  return (
    <Routes>
      <Route path="/entry-terms" element={<EntryTerms />} />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/download-cv" element={<DownloadCvPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/codehance" element={<CodehancePage />} />
              <Route
                path="/around-the-world"
                element={<AroundTheWorldPage />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route
                path="/project-details/:id"
                element={<ProjectDetailsPage />}
              />
              <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
