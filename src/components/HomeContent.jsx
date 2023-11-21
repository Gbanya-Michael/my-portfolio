import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

import {
  code,
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
  waterHigh,
  uniformPassport,
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
  bookerBookingsSmall,
  plantPeace1,
  plantPeace2,
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
    img: tailwindCssLogo,
    title: "TailwindCss",
  },
  {
    id: 6,
    img: gitLogo,
    title: "Git",
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
    img: awsLogo,
    title: "AWS",
  },

  {
    id: 11,
    img: figmaLogo,
    title: "FIGMA",
  },
  {
    id: 12,
    img: cssLogo,
    title: "CSS",
  },
  {
    id: 13,
    img: graphQL,
    title: "GraphQL",
  },
  {
    id: 15,
    img: sqLite,
    title: "SQLite",
  },
  {
    id: 16,
    img: databaseSchema,
    title: "DB Schema",
  },
];

const MAX_CHAR_LENGTH = 52;

export const sampleProjects = [
  {
    id: 1,
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
      { name: "SASS/SCSS" },
      { name: "GraphQL" },
      { name: "Node" },
      { name: "SQLite" },
      { name: "Strapi" },
      { name: "Vite" },
      { name: "npm" },
      { name: "Figma" },
    ],
  },
  {
    id: 2,
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
      { name: "SASS/SCSS" },
      { name: "GraphQL" },
      { name: "Node" },
      { name: "SQLite" },
      { name: "Strapi" },
      { name: "Vite" },
      { name: "npm" },
      { name: "Figma" },
    ],
  },
  {
    id: 3,
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
      { name: "SASS/SCSS" },
      { name: "GraphQL" },
      { name: "Node" },
      { name: "SQLite" },
      { name: "Strapi" },
      { name: "Vite" },
      { name: "npm" },
      { name: "Figma" },
    ],
  },
  {
    id: 4,
    title: "bookerBuddy",
    description:
      " bookerBuddy is an e-commerce platform. I built this software to serve as a market place for the beauty and lifestyle industry. The app allow users to book appointments with resgistered businesses. The app is complex and sophisticated with advance features such as google geolocation api and payment integration. The app consists of two user athentications: the public and business/admin.",
    bigScreenImg: bookerHomeBig,
    smallScreenImg: bookerHomeSmall,
    features:
      'Home screen for users on bookerBuddy. The software authomatically detects user location and display services around the user in diffrent categories, such as "Top rated", "Most visited places" and nearby shops. Easy navigation on all devices. A sophisticated footer with many functions spanning across all pages',
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "CSS" },
      { name: "npm" },
      { name: "vite" },
    ],
  },
  {
    id: 5,
    title: "bookerBuddy Checkout Page",
    description:
      "bookerBuddy confirm payments before confirming appointments. This is important to protect our business partners against no-shows and rapid cancellations.",
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
      { name: "npm" },
      { name: "Figma" },
    ],
  },
  {
    id: 6,
    title: "bookerBuddy",
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
      { name: "npm" },
      { name: "vite" },
    ],
  },
  {
    id: 7,
    title: "bookerBuddy Finance Page",
    description:
      "This is the finance section for stores on bookerBuddy. Businesses can track payments easily from the finance section in the admin. Payment tracking is programmed to update automatically. Invoices are also generated authomatically.",
    bigScreenImg: bookerFinBig,
    smallScreenImg: bookerFinSmall,
    features:
      "This page displays the transaction history between stores and booker. Businesses can edit payment methods and track history of payments and payment methods.",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "CSS" },
      { name: "npm" },
      { name: "vite" },
    ],
  },

  {
    id: 8,
    title: "bookerBuddy Booking History",
    description:
      "bookerBuddy maintains a booking history for businesses, this is also applied to the users. Businesses can revisit activities and bookings over time on the history page. It has added features for filters and sort by date, service, status and attendant which promotes a fast and efficient way to navigate activities.",
    bigScreenImg: bookerBookingsBig,
    smallScreenImg: bookerBookingsSmall,
    features:
      "This page allows businesses to search for bookings. It also displays previous and advance bookings. I use React State to automatically change the status of appointments. Details are displayed or hidden depending on device size.",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "CSS" },
      { name: "npm" },
      { name: "vite" },
    ],
  },
  {
    id: 9,
    title: "Plant Peace",
    description: `Plant Peace is a one page blog website. This was a side project to practice my react.js, graphQL and sass skills.`,
    bigScreenImg: plantPeace1,
    smallScreenImg: plantPeace2,
    features:
      "The website is connected to a backend. The data is displayed using GraphQL. I used Strapi Headless CMS to create the database.",
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "TailwindCSS" },
      { name: "CSS" },
      { name: "npm" },
      { name: "vite" },
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
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "SASS/SCSS" },
    ],
  },
];
export default function HomeContent() {
  const updatedProjects = sampleProjects.map((project) => ({
    ...project,
    isTruncated: true,
  }));

  const truncate = (description, projectId) => {
    const project = updatedProjects.find((project) => project.id === projectId);
    const shouldTruncate =
      description.length > MAX_CHAR_LENGTH && project?.isTruncated;
    if (!shouldTruncate) return description;
    const truncated = description.slice(0, MAX_CHAR_LENGTH);
    return truncated + "...";
  };

  return (
    <>
      <main className="relative">
        <div className="my-10 w-fit mx-auto">
          <div className="w-52 h-52">
            <img
              src={uniformPassport}
              alt="Profile photo"
              className="object-contain w-full h-full rounded-full bg-gray-300
            ring-1 ring-violet-500
            "
            />
          </div>
          <div className="mt-3 text-center">
            <h1 className="text-gray-900">
              Name: <span>Michael Gbanya</span>
            </h1>
            <h3 className="text-xs text-gray-600">
              Profession: <span>Software developer</span>
            </h3>
            <h5 className="text-xs text-gray-600">
              Specialization: <span>Front-end development</span>
            </h5>
            <h5 className="text-xs text-gray-600">
              Location: <span>Sydney, Australia</span>
            </h5>
          </div>
        </div>

        <div className="relative isolate overflow">
          <div className="relative md:flex justify-between gap-2 overflow-hidden bg-gray-900 px-2 md:px-6 py-3 md:py-6 shadow-xl rounded-xl md:rounded-3xl ">
            <img
              className="absolute inset-0 h-full w-full object-cover brightness-100 saturate-0"
              src={code}
              alt="codeImage"
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div
              className="absolute -left-80 -top-56 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div
              className="hidden md:absolute  md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <h1 className=" text-white mb-3 font-extrabold text-center sm:text-3xl">
                Why I Write Code
              </h1>
              <figure>
                <blockquote className=" text-xs font-normal text-white md:text-lg md:leading-8">
                  <p>
                    I love challenges and writing code challenges me to the
                    core.
                    <br />
                    In all the duties I have performed, the challenges I
                    encounter while writing code brings out the best problem
                    solving and creative skills in me. The most amazing part is
                    when I solve the problem and I could see the outcome
                    instantly, it gives me maximum satisfaction because I am
                    always driven by results. To me, writing code is not just
                    about making income, it is about craftsmanship and a
                    craftman must master his craft as I have mastered the art of
                    creating user friendly and stunning web apps. Coding and
                    water sports gives me the same level of adrenaline rush. And
                    it even feels better because I get paid to write code.
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Michael Gbanya</div>
                  <div className="mb-3 text-xs">Software developer</div>
                </figcaption>
              </figure>
            </div>

            <div className="md:w-[25rem] md:h-[20rem] flex-shrink-0 relative  md:block">
              <img
                src={waterHigh}
                alt="App screenshot"
                className="w-full h-full rounded-xl md:rounded-3xl object-contain bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>

        <div className=" my-20  ">
          <h2 className="bg-violet-500 rounded-3xl text-center text-lg font-semibold leading-8 text-white">
            My Skills and Tools
          </h2>

          <ul className="mx-auto py-5 flex overflow-y-auto over-x-hidden gap-5 flex-shrink-0 ">
            {skills.map((skill) => (
              <li
                key={skill.id}
                className="bg-violet-500/10 w-24 rounded-lg h-18 p-2 flex-col flex-shrink-0 "
              >
                <img
                  className="max-h-12 md:max-h-full w-full object-contain  mb-2"
                  src={skill.img}
                  alt="Logo images"
                />
                <p className=" text-sm text-center ">{skill.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="bg-violet-500 rounded-3xl text-center text-lg font-semibold leading-8 text-white">
            Sample Projects
          </h2>
          <p className="text-center text-xs text-gray-600">
            The projects displayed below are samples only which are extracted
            from the main project and not the complete projects.
          </p>

          <ul className="mx-auto py-5 flex overflow-y-auto over-x-hidden gap-5">
            {sampleProjects.map((project) => (
              <Link to={`/project-details/${project.id}`} key={project.id}>
                <li className=" p-5 bg-gray-400/10 w-screen h-[20rem] md:w-[30rem] rounded-sm  flex-shrink-0 cursor-pointer ">
                  <div className=" md:text-lg text-center text-gray-600 leading-3">
                    <div className="flex justify-between items-baseline gap-1 mb-8">
                      <div className="w-1/3 h-[10rem] flex-shrink-0">
                        <img
                          src={project.smallScreenImg}
                          alt="Screenshot"
                          className="w-full h-full object-contain"
                        />
                        <p className="mt-1 text-xs">Small screen</p>
                      </div>
                      <div className="w-2/3 h-[10rem] flex-shrink-0 ">
                        <img
                          src={project.bigScreenImg}
                          alt="Screenshot"
                          className="w-full h-full object-contain"
                        />
                        <p className="mt-1 text-xs">Large screen</p>
                      </div>
                    </div>

                    <p className="text-gray-600">
                      Project name: {project.title}
                    </p>
                    <p className="text-start font-light text-sm">
                      {truncate(project.description, project.id)}
                      <span className="text-blue-500 cursor-pointer">
                        See more
                      </span>
                    </p>
                  </div>
                  <p className="grid grid-cols-1 justify-center content-center text-center mt-3 text-sm text-white bg-violet-500/80 w-5 h-5 py-2 mx-auto  rounded-full">
                    {project.id}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
