import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "animate.css";

import {
  javaScriptLogo,
  reactLogo,
  typeScriptLogo,
  htmlLogo,
  tailwindCssLogo,
  sassLogo,
  nodeLogo,
  gitLogo,
  figmaLogo,
  cssLogo,
  awsLogo,
  sqLite,
  graphQL,
  databaseSchema,
  profilePic,
  jobPlusHomeBig,
  jobPlusHomeSmall,
  jobPluListingBig,
  jobPlusListingSmall,
  jobPlusRegBig,
  jobPlusRegSmall,
  bookerCheckoutBig,
  bookerCheckoutSmall,
  bookerDashBig,
  bookerDashSmall,
  bookerFinBig,
  bookerFinSmall,
  bookerHomeBig,
  bookerHomeSmall,
  bookerBookingsBig,
  butcherBig,
  butcherSmall,
} from "../components/useImage";

const skills = [
  {
    id: 1,
    img: javaScriptLogo,
    title: "JavaScript",
  },
  {
    id: 2,
    img: reactLogo,
    title: "React",
  },
  {
    id: 3,
    img: typeScriptLogo,
    title: "TypeScript",
  },
  {
    id: 4,
    img: htmlLogo,
    title: "HTML",
  },
  {
    id: 5,
    img: cssLogo,
    title: "CSS",
  },
  {
    id: 6,
    img: tailwindCssLogo,
    title: "TailwindCss",
  },

  {
    id: 7,
    img: sassLogo,
    title: "SASS",
  },
  {
    id: 8,
    img: nodeLogo,
    title: "node",
  },
  {
    id: 9,
    img: graphQL,
    title: "GraphQL",
  },
  {
    id: 10,
    img: sqLite,
    title: "SQLite",
  },
  {
    id: 11,
    img: databaseSchema,
    title: "DB Schema",
  },
  {
    id: 12,
    img: gitLogo,
    title: "Git",
  },
  {
    id: 13,
    img: awsLogo,
    title: "AWS",
  },

  {
    id: 15,
    img: figmaLogo,
    title: "FIGMA",
  },
];

export const MAX_CHAR_LENGTH = 52;

export const sampleProjects = [
 
  {
    id: 2,
    title: "JobPlus",
    description:
      "JobPlus is an online job search engine. The software gathers lists of jobs from job websites and update the data base. The website allows users to register, apply for jobs, save jobs and search for jobs based on preferences and filters. The UI, UX, layouts, database, CMS were created by me from scratch",

    bigScreenImg: jobPlusHomeBig,
    smallScreenImg: jobPlusHomeSmall,
    features:
      "The screen shown here is the home page. The software is responsive to all devices allowing users to easily navigate between user profile, notifcations, favourite jobs, listings, applications, search and job sectors from mobile and desktop devices. Session storage for cookie notification.",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "SASS" },
      { name: "GraphQL" },
      { name: "Node" },
      { name: "SQLite" },
      { name: "Strapi" },
      { name: "Vite" },
      { name: "NPM" },
      { name: "Figma" },
    ],
  },
  {
    id: 3,
    title: "JobPlus Registration",
    description:
      "JobPlus is a password protected platform. The public cannot access the webiste without registration.",
    bigScreenImg: jobPlusRegBig,
    smallScreenImg: jobPlusRegSmall,
    features:
      "I used JWT authentication to lock down the website. Public users can only access the login and registration pages. For a user to access the full functions of the website, the user must register by providing their personal data for JWT authentication.",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "SASS" },
      { name: "GraphQL" },
      { name: "Node" },
      { name: "SQLite" },
      { name: "Strapi" },
      { name: "Vite" },
      { name: "NPM" },
      { name: "Figma" },
    ],
  },
  {
    id: 4,
    title: "JobPlus Listing Page",
    description:
      "JobPlus displays a list of user preferred jobs. Users can easily apply or withdraw applications.",
    bigScreenImg: jobPluListingBig,
    smallScreenImg: jobPlusListingSmall,
    features:
      "This screen displays a list of jobs and important details. Users can see the summary of a job such as, location, the company, the role, job type, and salary. ",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "SASS" },
      { name: "GraphQL" },
      { name: "Node" },
      { name: "SQLite" },
      { name: "Strapi" },
      { name: "Vite" },
      { name: "NPM" },
      { name: "Figma" },
    ],
  },
  {
    id: 5,
    title: "Birabook",
    description:
      " Birabook is an e-commerce platform. I built this software to serve as a market place for the beauty and lifestyle industry. The app allow users to book appointments with resgistered businesses. The app is complex and sophisticated with advance features such as google geolocation api and payment integration. The app consists of two user athentications: the public and business/admin.",
    bigScreenImg: bookerHomeBig,
    smallScreenImg: bookerHomeSmall,
    features:
      'Home screen for users on Birabook. The software authomatically detects user location and display services around the user in diffrent categories, such as "Top rated", "Most visited places" and nearby shops. Easy navigation on all devices. A sophisticated footer with many functions spanning across all pages',
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "CSS" },
      { name: "NPM" },
      { name: "Vite" },
    ],
  },
  {
    id: 6,
    title: "Birabook Checkout Page",
    description:
      "Birabook confirm payments before confirming appointments. This is important to protect our business partners against no-shows and rapid cancellations.",
    bigScreenImg: bookerCheckoutBig,
    smallScreenImg: bookerCheckoutSmall,
    features:
      "On this page, users can verify the appointments they want to book, choose different payment methods, and cornfirm bookings. The system is designed to send automatic booking confirmations.",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "SASS/SCSS" },
      { name: "GraphQL" },
      { name: "Node" },
      { name: "SQLite" },
      { name: "Strapi" },
      { name: "Vite" },
      { name: "NPM" },
      { name: "Figma" },
    ],
  },
  {
    id: 7,
    title: "Birabook",
    description:
      "The software boasts of a market-place that allows different businesses to host individual stores. Each store has their own CMS allowing store owners to manage services, customers and other features.",
    bigScreenImg: bookerDashBig,
    smallScreenImg: bookerDashSmall,
    features:
      "The pages show the dashboard for businesses. A summary of the day's activities, options to switch the store offline or online. View appointment details.",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "CSS" },
      { name: "NPM" },
      { name: "vite" },
    ],
  },
  {
    id: 8,
    title: "Birabook Finance Page",
    description:
      "This is the finance section for stores on Birabook. Businesses can track payments easily from the finance section in the admin. Payment tracking is programmed to update automatically. Invoices are also generated authomatically.",
    bigScreenImg: bookerFinBig,
    smallScreenImg: bookerFinSmall,
    features:
      "This page displays the transaction history between stores and booker. Businesses can edit payment methods and track history of payments and payment methods.",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "CSS" },
      { name: "NPM" },
      { name: "Vite" },
    ],
  },

  {
    id: 9,
    title: "Birabook Booking History",
    description:
      "Birabook maintains a booking history for businesses, this is also applied to the users. Businesses can revisit activities and bookings over time on the history page. It has added features for filters and sort by date, service, status and attendant which promotes a fast and efficient way to navigate activities.",
    bigScreenImg: bookerBookingsBig,
    smallScreenImg: bookerBookingsBig,
    features:
      "This page allows businesses to search for bookings. It also displays previous and advance bookings. I use React State to automatically change the status of appointments. Details are displayed or hidden depending on device size.",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "CSS" },
      { name: "NPM" },
      { name: "Vite" },
    ],
  },
  {
    id: 10,
    title: "Butcher App",
    description:
      "Meat Fresh is a software created for a meat delivery business. The software allows the owner to manage products, data, and content. Users can go to the website and search for products, order for products, pay for products and rate products. This was a practice project to keep me busy.",
    bigScreenImg: butcherBig,
    smallScreenImg: butcherSmall,

    features: "The website is responsive to all devices.",
    technology: [{ name: "JavaScript" }, { name: "React" }, { name: "SASS" }],
  },
];

export const updatedProjects = sampleProjects.map((project) => ({
  ...project,
  isTruncated: true,
}));

export const truncate = (description, projectId) => {
  const project = updatedProjects.find((project) => project.id === projectId);
  const shouldTruncate =
    description.length > MAX_CHAR_LENGTH && project?.isTruncated;
  if (!shouldTruncate) return description;
  const truncated = description.slice(0, MAX_CHAR_LENGTH);
  return truncated + "...";
};

const recentProjects = [
  {
    title: "Angia Technologies",
    url: "https://angia.com.au",
    description: "Software Development Company",
  },

  {
    title: "BiraBook",
    url: "https://birabook.com",
    description: "Appointment Booking System",
  },
  {
    title: "JobPlus",
    url: "https://github.com/Gbanya-Michael/Jobplus-Fullstack",
  },
];

export default function HomeContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -inset-[10px] opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, white 1px, transparent 1px)",
              backgroundSize: "50px 10px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <motion.div
                className="relative inline-block mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50" />
                <img
                  src={profilePic}
                  alt="Profile photo"
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-white/10"
                />
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Michael Gbanya
              </motion.h1>

              <motion.div
                className="space-y-3 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-2xl font-light">
                  Full Stack Software Developer
                </p>
                <p className="text-xl text-blue-400">
                  Frontend Focused
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sydney, Australia
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Recent Projects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Recent Projects
                </h2>
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Link
                        to={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 rounded-xl transition-all duration-300
                          bg-gradient-to-r from-gray-800/50 to-gray-900/50
                          hover:from-blue-900/50 hover:to-purple-900/50
                          border border-white/5 hover:border-blue-500/30"
                      >
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mt-1 group-hover:text-gray-300">
                          {project.description}
                        </p>
                        <p className="text-sm text-blue-400/80 mt-2 group-hover:text-blue-300 flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          {project.url}
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why I Write Code Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Why I Write Code</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-600 leading-relaxed">
                I love challenges and writing code challenges me to the core.
                <br />
                In all the duties I have performed, the challenges I encounter
                while writing code brings out the best problem solving and
                creative skills in me. The most amazing part is when I solve the
                problem and I could see the outcome instantly, it gives me
                maximum satisfaction because I am always driven by results. To
                me, writing code is not just about making income, it is about
                craftsmanship and a craftsman must master his craft as I have
                mastered the art of creating user friendly and stunning web
                apps.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Skills & Tools
          </motion.h2>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="h-10 w-10 mx-auto mb-2 object-contain"
                />
                <p className="text-center text-sm font-medium">{skill.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Link to={`/project-details/${project.id}`}>
                  <div className="relative aspect-video">
                    <img
                      src={project.bigScreenImg}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {truncate(project.description, project.id)}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technology.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
