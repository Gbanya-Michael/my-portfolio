import React from "react";
import {
  covid1,
  covid2,
  marikina2,
  marikina3,
  marikina4,
  marikina5,
  saintRita1,
  saintRita2,
  saintRita3,
  saintRita4,
} from "../components/useImage";

const gallery = [
  {
    id: 1,
    title:
      "Community outreach with my team and the Philippines national police during the COVID-19 lockdowns.",
    images: [{ name: covid1 }, { name: covid2 }],
  },
  {
    id: 2,
    title:
      "Outreach program organised by my class in Graduate School of Business, UPHSD for families affected by flood in Marikina City, Philippines.",
    images: [
      { name: marikina2 },
      { name: marikina3 },
      { name: marikina4 },
      { name: marikina5 },
    ],
  },
  {
    id: 3,
    title:
      "A visit with the team to Saint Rita Orphanage, Paranaque City, Philippines where we donate items to the orphanage and spend time with the children. It was a wow experience.",
    images: [
      { name: saintRita1 },
      { name: saintRita2 },
      { name: saintRita3 },
      { name: saintRita4 },
    ],
  },
];

export default function Community() {
  return (
    <>
      <div>
        <h1 className="mt-5 md:mt-10 mb-3 md:mb-5 bg-gray-300 rounded-md text-center text-xs md:text-lg font-semibold leading-8 text-black/60">
          Corporate Social Responsibility & Community Outreach
        </h1>
        <div className="px-3 text-gray-500 text-xs md:text-lg">
          <p>
            Being a developer brings out the best in me, likewise belonging to
            the community brings me closer to the people.
            <br />
            As a person, I actively join teams that engage with the community,
            both on corporate and personal levels.
          </p>
          <p>
            Below are few pictures of me participating in community outreach
            activities.
          </p>
        </div>

        <ul>
          {gallery.map((gal) => (
            <li key={gal.id} className="pl-3">
              <div className="h-[15rem] flex gap-10 overflow-y-auto over-x-hidden">
                {gal.images.map((image) => (
                  <img
                    key={image.name}
                    src={image.name}
                    alt="Screenshot"
                    className="w-[18rem] h-full object-contain "
                  />
                ))}
              </div>
              <p className=" text-start font-light text-sm mb-8">{gal.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
