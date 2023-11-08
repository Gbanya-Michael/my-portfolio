import React from "react";
import { personal1 } from "./useImage";
const sections = [
  {
    id: 1,
    title: "Abount me",
    body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa
            tempor nec feugiat nisl pretium fusce. At tempor commodo ullamcorper
            a lacus. Integer feugiat scelerisque varius morbi enim nunc faucibus
            a pellentesque. Est velit egestas dui id ornare. Vitae auctor eu
            augue ut. Quis viverra nibh cras pulvinar mattis nunc sed blandit
            libero. Nisi porta lorem mollis aliquam. In dictum non consectetur
            a. Ultrices dui sapien eget`,
  },
  {
    id: 2,
    title: "Abount me",
    body: ` Lorem ipsum dolor sit a In massa
            tempor nec feugiat nisl pretium fusce. At tempor commodo ullamcorper
            a lacus.scelerisque varius morbi enim nunc faucibus
            a pellentesque. Est velit egestas dui id ornare. Vitae auctor eu
            augue ut. Quis viverra nibh cras pulvinar mattis nunc sed blandit
            libero. Nisi porta lorem mollis aliquam. In dictum non consectetur
            a. Ultrices dui sapien eget`,
  },
  {
    id: 3,
    title: "Abount me",
    body: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa
            tempor nec feugiat nisl pretium fusce. At tempor commodo ullamcorper
            a lacus. Integer feugiat scelerisque varius morbi enim nunc faucibus
            a pellentesque. Est velit egestas dui id ornare. Vitae auctor eu
            augue ut. Quis viverra nibh cras pulvinar mattis nunc sed blandit
            libero. Nisi porta lorem mollis aliquam. In dictum non consectetur
            a. Ultrices dui sapien eget`,
  },
];

export default function About() {
  return (
    <>
      <div className="my-8 flex gap-3">
        <div className="w-[20rem] h-[25rem]  hidden md:block">
          <img
            src={personal1}
            alt="Image"
            className="w-full h-full object-contain"
          />
        </div>
        <ol className="md:w-4/5">
          {sections.map((section) => (
            <li
              key={section.id}
              className="  ring-1 ring-gray-100 rounded-md bg-gray-200/10"
            >
              <h1 className="mx-3 text-gray-600 mb-2 font-semibold  text-center border-b border-violet-200">
                {section.title}
              </h1>
              <p className="px-3 text-sm md:md text-gray-500 font-normal font-san ">
                {section.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
