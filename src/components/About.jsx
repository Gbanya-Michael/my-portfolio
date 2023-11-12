import React from "react";
import { personal1 } from "./useImage";
const sections = [
  {
    id: 1,
    title: "My Software Journey",
    body: `
    The desire to build, be innovative and to create is something
    I cannot sway away from. I have been in other professions but
     the best decision I ever made was to start my software development journey.
     Working onboard ship as a licensed deck officer disciplined me in paying attention to details
     and working with different internal and external teams but it never gave me the opportunity to be innovative
     because we only follow strict regulations and use equipments made readily available.
     I shifted focus and took up management and administrative positions. Still, I was not satisfied although these
     positions allowed me to be innovative and solve problems within the business environment which I did with remarkable achievements.
     Then I decided to find something that will allow me utilize my natural and acquired skills of
     being innovative and creative not just problem solving.
     I realised software development and AI would give me the opportunity
     to be who I want. I picked up software development with the amazing team
     at Codehance and it has been incredible from the first day I printed "Hello world" and now working
     on magnificient projects with advanced code writing skills.
     Although I intend to futher my studies in tech and add Articial Intelligence and Machine Learning
     to my portfolio,
     I am currently happy developing softwares and solving problems within the development environment.
     `,
  },
  {
    id: 2,
    title: "My Code Writing Skills",
    body: ` 
   Over the time, I have mastered the art of writing neat, beautiful and scalable code.
   I use the D.R.Y method to modify code. D.R.Y simply means "Do not Repeat Yourself"
   This method allows to me create components and custom hooks that can be reused in the entire project
  thereby making code easily scalable and development process becomes super efficient.



    `,
  },
  {
    id: 3,
    title: "Education",
    body: ` 
    I started my tertiary education with a Bachelor of Science in marine transportation.
    There after, I proceeded to Masters in Business Administration. After working in these fields for a while,
    I transitioned to software development. This was achieved by attending Codehance classes acquiring knowledge in multiple
    coding languages and project experiences. These classes are project based
    and a one-on-one learning system with senior developers who has played vital roles
    in the software engineering field. Codehance classes use Agile methodology
    and it encompasses of students from all over the world where we work as teams attending Scrums which prepared
    us for real life projects.
    `,
  },

  {
    id: 4,
    title: "Language | Exposure | More",
    body: `My official language for communication is English. I started traveling around the world in my teeanage years. I have lived, studied and worked in the Philippines,
    UK and Australia and have also travelled to many other countries.
    This makes it easy for me to blend in with teams from different cultures.`,
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
        <ol className="md:w-4/5 mt-1">
          {sections.map((section) => (
            <li
              key={section.id}
              className=" mb-10 ring-1 ring-gray-200 rounded-md bg-white shadow-2xl"
            >
              <h1 className="mx-3 py-2 text-gray-600 mb-2 font-semibold  text-center border-b border-violet-200">
                {section.title}
              </h1>
              <p className="px-3 pb-3 text-sm md:md text-gray-500 font-san ">
                {section.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
