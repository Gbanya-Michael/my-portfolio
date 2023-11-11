import React from "react";
export default function ProjectDetails() {
  return (
    <div className="mx-auto py-5 flex overflow-y-auto over-x-hidden gap-5">
      <div className=" p-5 bg-gray-400/10 w-screen md:w-[30rem] rounded-sm  flex-shrink-0 ">
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
          <p className="text-start font-light text-sm">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
