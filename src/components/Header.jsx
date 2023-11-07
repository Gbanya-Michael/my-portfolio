import React from "react";

export default function Header() {
  return (
    <>
      <div className="text-xs  p-3 ring-1 ring-violet-200 bg-gray-400/10 my-5 shadow-md shadow-black rounded-md">
        <p>
          <span className="mr-1 text-violet-500">Disclaimer:</span>This website
          and it's content were hard coded by me. AI was not used to generate
          code. But as a developer, I utilize AI as a reference or research
          tool.
        </p>
        <div className="mt-3">
          <span className="text-violet-500 mr-1">Technologies used:</span>
          <span>I used </span>

          <span className="inline-flex gap-1 mr-1 text-md font-semibold">
            <span>JavaSript,</span>
            <span>React,</span>
            <span>TailwindCSS,</span>
            <span>Flex-box,</span>
            <span>Git,</span>
            <span>AWS</span>
          </span>
          <span>to build, manage and host this website.</span>
        </div>
      </div>
    </>
  );
}
