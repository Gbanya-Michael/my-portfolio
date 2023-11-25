import React from "react";
import { sampleProjects } from "./HomeContent";
import { jobplusFrontend1, Admin1Gif, Admin2Gif } from "./useImage";

const gifs = [
  {
    id: 1,
    visual: jobplusFrontend1,
    title: "JobPlus Frontend",
  },
  {
    id: 2,
    visual: Admin1Gif,
    title: "Strapi Backend",
  },
  {
    id: 3,
    visual: Admin2Gif,
    title: "Strapi Backend",
  },
];
const stacks = [
  {
    id: 1,
    title: "Frontend",
    tech: [
      { name: "React: A JavaScript library for building user interfaces." },
      { name: "React Router: For routing in React applications." },
      { name: "Axios: A promise-based HTTP client for making HTTP requests." },
      {
        name: "JS-Cookie: A simple, lightweight JavaScript API for handling cookies.",
      },
      { name: "JWT-Decode: A library to decode JWTs (JSON Web Tokens)." },
      {
        name: "Sass: A preprocessor scripting language that is interpreted or compiled into CSS.",
      },
      { name: "Vite: A modern frontend build tool." },
    ],
  },
  {
    id: 2,
    title: "Backend",

    tech: [
      {
        name: "Strapi: An open-source headless CMS (Content Management System).",
      },
      {
        name: "SQLite: (through better-sqlite3), high-reliability SQL database engine.",
      },
      { name: "i18n: Internationalization plugin for Strapi." },
      { name: "Users-Permissions: Plugin for managing users and permissions." },
      {
        name: "Email-PostMark: Plugin for integrating SendGrid email services with Strapi.",
      },
    ],
  },
];
export default function Portfolio() {
  return (
    <>
      <div>
        <div className="px-3 rounded-sm bg-gray-900 w-full py-8 grid justify-center md:content-center">
          <div className="text-white mb-8">
            <h1 className="text-lg"> JobPlus Full-Stack Application</h1>
            <p className="text-sm text-white/80">
              JobPlus is a comprehensive full-stack web application designed to
              streamline the job search and recruitment process. This platform
              connects job seekers with potential employers, providing an
              efficient and user-friendly interface for browsing job listings,
              submitting applications, and managing recruitment processes.
            </p>

            <ul className="md:flex gap-5">
              {stacks.map((stack) => (
                <li key={stack.id}>
                  <h1 className="text-lg mt-5">{stack?.title}</h1>
                  <ul className="pl-4">
                    {stack.tech.map((tec) => (
                      <li
                        key={tec.name}
                        className="text-sm text-white/80 list-disc list-outside"
                      >
                        {tec.name}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mb-10 text-white text-center text-xs">
            {gifs.map((gif) => (
              <li key={gif.id} className="mb-16 h-fit">
                <img src={gif.visual} alt="" className="w-full h-full mb-2" />
                <p>{gif.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <ul className="w-full py-10 grid justify-center md:content-center">
          {sampleProjects.map((project) => (
            <li
              key={project.id}
              className=" mb-16 rounded-sm bg-gray-900 w-fit py-10 px-3"
            >
              <div className="md:text-2xl text-center text-white leading-3 md:pr-20 md:pl-3 md:text-start ">
                <div className="md:flex items-baseline gap-16  ">
                  <div className="flex-shrink-0 mb-16 md:w-1/4">
                    <img
                      src={project.smallScreenImg}
                      alt="Screenshot"
                      className="w-full h-full object-contain"
                    />
                    <p className="mt-1 text-xs text-center">Small screen</p>
                  </div>
                  <div className=" flex-shrink-0 md:w-3/4">
                    <img
                      src={project.bigScreenImg}
                      alt="Screenshot"
                      className="w-full h-full object-contain"
                    />
                    <p className="mt-1 text-xs text-center">Large screen</p>
                  </div>
                </div>
                <p className="text-white my-3">Project name: {project.title}</p>
                <p className="text-start text-white/80 font-light text-sm md:text-xl">
                  {project.description}
                </p>

                <div>
                  <h1 className="mb-3 mt-5">Features:</h1>
                  <p className="md:text-start text-sm md:text-xl text-white/80 mb-5 ">
                    {project?.features}
                  </p>
                </div>
                <div>
                  <p className="md:text-start">Technologies used:</p>
                  <ul className="flex flex-wrap gap-3 my-3 md:items-start md:justify-start mx-auto md:mx-0 w-fit">
                    {project?.technology.map((tech) => (
                      <li
                        className="w-fit px-3 py-1 rounded-full  bg-violet-900/100 text-white/80"
                        key={tech.name}
                      >
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="grid grid-cols-1 justify-center content-center text-center mt-10 text-sm text-black ring-1 ring-violet-500/80 w-5 h-5 py-2 mx-auto bg-white rounded-full">
                {project.id}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
