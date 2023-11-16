import React, { Fragment, useState } from "react";
import "animate.css";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
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
  waterHigh,
  uniformPassport,
  jobPlusBig,
  jobPlusSmall,
  bookerDashBig,
  bookerDashSmall,
  bookerFinBig,
  bookerFinSmall,
  bookerHomeBig,
  bookerHomeSmall,
  bookerBookingsBig,
  bookerBookingsSmall,
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
];

const terms = [
  {
    paragraph:
      "Only tech employers, recruiters, contractors, freelancers, software developers and other tech related persons are allowed to access this website. ",
  },
  {
    paragraph:
      "The sole purpose of this website is to familiarise people about me and my craft.",
  },
  {
    paragraph:
      "The contents on this website shall be used for legal purposes only.",
  },

  {
    paragraph:
      "By continuing, you agree that my details, including images and documents will not be used without seeking my consent.",
  },
];

const MAX_CHAR_LENGTH = 80;

export const sampleProjects = [
  {
    id: 1,
    title: "JobPlus",
    description:
      "JobPlus is an online job search engine I created that gathers lists of jobs from job websites and update the data base. The website allows users to register, apply for jobs, save jobs and search for jobs based on preferences and filters. The UI, UX, layouts, database, CMS were created by me. ",
    bigScreenImg: jobPlusBig,
    smallScreenImg: jobPlusSmall,
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
    title: "bookerBuddy",
    description:
      "This is an e-commerce online appointment booking software for the beauty and lifestyle industry. The software boasts of a marketplace that allows different businesses to host individual stores. Each store has their own CMS allowing store owners to manage services, customers and other features. The store is integrated with google geolocation API that automatically display stores and services around a particular user location. The store enables online bookings and payment.",
    bigScreenImg: bookerDashBig,
    smallScreenImg: bookerDashSmall,
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
    id: 3,
    title: "bookerBuddy",
    description:
      "This is the finance section for stores on bookerBuddy. Businesses can track payments easily from the finace section in the admin. Payment tracking is programmed to update authomatically. Receipts are also generated authomatically.",
    bigScreenImg: bookerFinBig,
    smallScreenImg: bookerFinSmall,
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
    id: 4,
    title: "bookerBuddy",
    description: `Home screen for users on bookerBuddy. The software authomatically detects user location and display services around the user in diffrent categories, such as "Top rated stores" and "Most visited places"`,
    bigScreenImg: bookerHomeBig,
    smallScreenImg: bookerHomeSmall,
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
    title: "bookerBuddy",
    description:
      "bookerBuddy maintains a booking history for businesses, this is also applied to the users. Businesses can revisit activities and bookings overtime on the history page. It has added features for filters and sort by date which promotes a fast and efficient way too navigate activities.",
    bigScreenImg: bookerBookingsBig,
    smallScreenImg: bookerBookingsSmall,
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
    id: 6,
    title: "Butcher App",
    description:
      "Meat Fresh is a software created for a meat delivery business. The software allows the owner to manage products, data, and content. Users can go to the website and search for products, order for products, pay for products and give ratings",
    bigScreenImg: butcherBig,
    smallScreenImg: butcherSmall,
    technology: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "SASS/SCSS" },
    ],
  },
];
export default function HomeContent() {
  const [welcomeNotice, setWelcomeNotice] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [bigScreenOpen, setBigScreenOPen] = useState(false);
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

  const handleSelectedProject = (project) => {
    setSelectedProject(project);
    setBigScreenOPen(true);
  };
  const hideSelectedProject = () => {
    setBigScreenOPen(false);
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
        <Transition.Root show={welcomeNotice} as={Fragment}>
          <Dialog as="div" className="relative z-50  " onClose={setAgreed}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed  inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full  ">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className=" px-5 max-w-[22rem] md:max-w-[40rem] mx-auto h-fit rounded-sm absolute bg-violet-200 top-40 bottom-0 right-0 left-0">
                      <p className="sr-only">Welcome notice</p>
                      <h1 className="text-red-700 font-semibold px-5 pt-5 text-center text-2xl leading-6">
                        Terms of use
                      </h1>
                      <ul className=" pl-5 text-gray-900 font-thin pb-5 text-sm md:text-lg leading-4 list-disc list-outside">
                        {terms.map((term) => (
                          <li key={term.paragraph} className="mt-2">
                            {term.paragraph}
                          </li>
                        ))}
                        <p className="text-xs mt-2">
                          Check the box below to continue.
                        </p>
                      </ul>

                      <div className="gap-2 flex h-6 items-center mb-5">
                        <input
                          id="confirmation"
                          aria-describedby="notice-confirmation"
                          name="confirm"
                          type="checkbox"
                          checked={agreed}
                          className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                          onChange={() => setAgreed(!agreed)}
                        />
                        <p className="text-xs">
                          Yes, I have read and agreed to the terms of use.
                        </p>
                      </div>
                      {agreed && (
                        <div className="flex justify-center my-5 md:my-10">
                          <button
                            onClick={() => setWelcomeNotice(false)}
                            type="button"
                            className="mx-auto inline-flex items-center justify-center gap-x-2 rounded-full bg-violet-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 outline-none"
                          >
                            Continue
                            <ArrowRightIcon
                              className="-mr-0.5 h-4 w-4"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      )}
                    </div>
                  </Transition.Child>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

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
              <li
                key={project.id}
                className=" p-5 bg-gray-400/10 w-screen md:w-[30rem] rounded-sm  flex-shrink-0 "
              >
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
                        className="w-full object-contain"
                      />
                      <p className="mt-1 text-xs">Large screen</p>
                    </div>
                  </div>

                  <p className="text-gray-600">Project name: {project.title}</p>
                  <p className="text-start font-light text-sm">
                    {truncate(project.description, project.id)}
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => handleSelectedProject(project)}
                    >
                      See more
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {bigScreenOpen && (
          <div className=" bg-gray-900 absolute px-3 md:px-20 top-0 bottom-10 grid justify-center md:content-center">
            <button
              onClick={hideSelectedProject}
              className=" text-white flex gap-2 items-center h-fit w-fit px-3 rounded-md bg-violet-900/100"
            >
              <ArrowLeftIcon className="w-4 h-4" /> Back
            </button>
            <div className=" md:text-lg text-center text-white leading-3">
              <div className=" mt-10 mb-8  pb-10 md:flex  gap-10 border-b-8">
                <div className=" w-full">
                  <h1 className="md:text-xl mb-5 mb:my-16 text-start">
                    Project name: {selectedProject.title}
                  </h1>
                  <p className="text-start text-sm md:text-md text-white/80 mb-5 ">
                    {selectedProject?.description}
                  </p>
                  <div>
                    <p className="text-start">Technologies used:</p>
                    <ul className="flex flex-wrap gap-3 my-5">
                      {selectedProject.technology.map((tech) => (
                        <li
                          className="w-fit px-3 py-1 rounded-full  bg-violet-900/100"
                          key={tech.name}
                        >
                          {tech.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <img
                    src={selectedProject?.smallScreenImg}
                    alt="Screenshot"
                    className="w-full h-full object-contain"
                  />
                  <p className="mt-1 text-xs">Small screen</p>
                </div>
              </div>
              <div className="h-fit w-fit">
                <img
                  src={selectedProject?.bigScreenImg}
                  alt="Screenshot"
                  className="w-full h-full object-contain"
                />
                <p className="mt-1 text-xs">Large screen</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
