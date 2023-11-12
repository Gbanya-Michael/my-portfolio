import React, { useState } from "react";
import { Link } from "react-router-dom";
import { linkedIn, gitLogo } from "./useImage";

const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const navigation = {
  social: [
    {
      name: "LinkedIn",
      href: LINKEDIN_URL,
      icon: linkedIn,
    },

    {
      name: "GitHub",
      href: GITHUB_URL,
      icon: gitLogo,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white mt-24">
      <nav
        className="-mb-6 columns-2 gap-10 flex justify-center "
        aria-label="Footer"
      >
        <div className="pb-6">
          <Link
            to="/download-cv"
            className="text-sm px-5 leading-6 text-gray-600 hover:text-gray-900 hover:underline"
          >
            Download my CV
          </Link>
        </div>
      </nav>
      <div className="mt-10 flex justify-center gap-10">
        {navigation.social.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-gray-400 hover:text-gray-500"
          >
            <img
              src={item.icon}
              alt="Logo"
              className="w-6 h-6 object-contain"
            />
          </Link>
        ))}
      </div>
      <p className="py-10 text-center text-xs leading-5 text-gray-500">
        &copy; Michael Gbanya 2023. All rights reserved.
      </p>
    </footer>
  );
}
