import React from "react";
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
];

const sampleProjects = [
  {
    id: 1,
    title: "JobPlus",
    description:
      "Lorem ipsum dolor sit amet,  labore et dolore magna aliqua. Amet aliqua id diam maecenas ultricies mi eget mauris.",
    bigScreenImg: jobPlusBig,
    smallSreenImg: jobPlusSmall,
  },
  {
    id: 2,
    title: "bookerBuddy",
    description:
      "Lorem ipsum dolor sit amet,  maecenas ultricies mi eget mauris.",
    bigScreenImg: bookerDashBig,
    smallSreenImg: bookerDashSmall,
  },
  {
    id: 3,
    title: "bookerBuddy",
    description: "The Finance section for for businesses",
    bigScreenImg: bookerFinBig,
    smallSreenImg: bookerFinSmall,
  },
  {
    id: 4,
    title: "bookerBuddy",
    description: "Home section for users on bookerBuddy",
    bigScreenImg: bookerHomeBig,
    smallSreenImg: bookerHomeSmall,
  },
  {
    id: 5,
    title: "bookerBuddy",
    description: "Booking history for businesses",
    bigScreenImg: bookerBookingsBig,
    smallSreenImg: bookerBookingsSmall,
  },
  {
    id: 6,
    title: "Butcher App",
    description:
      "Lorem ipsum dolor sit amet, consectetur  magna aliqua. Amet aliqua id diam maecenas ultricies mi eget mauris.",
    bigScreenImg: butcherBig,
    smallSreenImg: butcherSmall,
  },
];
export default function HomeContent() {
  return (
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
          <h3>
            Profession: <span>Software developer</span>
          </h3>
          <h5 className="text-xs">
            Specialization: <span>Front-end development</span>
          </h5>
          <h5 className="text-xs">
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
              How I feel about writing code
            </h1>
            <figure>
              <blockquote className=" text-xs font-normal text-white md:text-lg md:leading-8">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.”
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
          My skills
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
          Sample projects
        </h2>

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
                      src={project.smallSreenImg}
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
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
