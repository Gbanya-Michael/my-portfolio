import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { code } from "./useImage";
import { useSessionStorage } from "./useSessionStorage";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../StorageContext";
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

export default function EntryTerms() {
  const [welcomeNotice, setWelcomeNotice] = useState(true);
  const [agreed, setAgreed] = useState(false);
  const { getSessionStorage, saveSessionStorage } = useSessionStorage();

  const navigate = useNavigate();
  const { setIsAllowed } = useStorage();

  useEffect(() => {
    const hasAgreed = getSessionStorage();

    setAgreed(hasAgreed);
    setWelcomeNotice(!hasAgreed);
  }, []);

  const handleAgree = () => {
    saveSessionStorage();
    setAgreed(true);
    setWelcomeNotice(false);
    setIsAllowed(true);
    navigate("/");
  };

  return (
    <>
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
                          onClick={handleAgree}
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
      <div className="relative  h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={code} alt="Image" className="w-full h-full object-cover " />
          <div className=" opacity-80 absolute inset-0 rounded-lg"></div>
        </div>
        <div className="grid grid-cols-1 px-10 content-center justify-center items-center text-center z-10"></div>
      </div>
    </>
  );
}
