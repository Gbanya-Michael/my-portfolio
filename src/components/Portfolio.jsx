import React from "react";
import { sampleProjects } from "./HomeContent";

export default function Portfolio() {
  return (
    <>
      <div>
        <div className="px-3">hello</div>
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
