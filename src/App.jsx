import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import DownloadCvPage from "./pages/DownloadCvPage";
import ContactPage from "./pages/ContactPage";
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
            <Layout>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="download-cv" element={<DownloadCvPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="community" element={<CommunityPage />} />
                <Route path="project-details/:id" element={<ProjectDetailsPage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
              </Routes>
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
