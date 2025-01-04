import React from "react";
import { Link } from "react-router-dom";
import { linkedIn, gitLogo } from "./useImage";

const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;

const navigation = {
  main: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Community", href: "/community" },
  ],
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
    <footer className="bg-gradient-to-t from-gray-900 via-gray-800 to-transparent">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
        <nav className="flex justify-center space-x-6" aria-label="Footer">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm leading-6 text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-8 md:mt-0 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/25 p-2 rounded-full hover:bg-white/40 transition-all duration-300"
            >
              <span className="sr-only">{item.name}</span>
              <img
                src={item.icon}
                alt={`${item.name} Logo`}
                className="h-5 w-5 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 mt-8">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Michael Gbanya. Software Developer based in Sydney, Australia.
          </p>
          <p className="text-center text-xs text-gray-500 mt-2">
            Built with JavaScript, React, TailwindCSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
