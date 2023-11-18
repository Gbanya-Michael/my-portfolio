import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { sampleProjects } from "./HomeContent";

export default function ProjectDetails() {
  const projects = sampleProjects;
  const { id } = useParams();
  const selectedProject = projects.find(
    (project) => project.id === parseInt(id)
  );

  if (!selectedProject) {
    return <div>Project not found</div>;
  }
  return (
    <div className=" bg-gray-900 px-3 md:px-20 py-10 grid justify-center md:content-center">
      <Link
        to="/"
        className=" text-white flex gap-2 items-center h-fit w-fit px-3 rounded-md bg-violet-900/100"
      >
        <ArrowLeftIcon className="w-4 h-4" /> Back
      </Link>
      <div className=" md:text-lg text-center text-white leading-3">
        <div className=" mt-10 mb-8  pb-10 md:flex  gap-10 border-b-8">
          <div className=" w-full">
            <h1 className="md:text-xl mb-5 mb:my-16 text-start">
              Project name: {selectedProject?.title}
            </h1>
            <p className="text-start text-sm md:text-md text-white/80 mb-5 ">
              {selectedProject?.description}
            </p>
            <div>
              <p className="text-start">Technologies used:</p>
              <ul className="flex flex-wrap gap-3 my-5">
                {selectedProject?.technology.map((tech) => (
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
  );
}
