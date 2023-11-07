import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PhoneIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { uniformPassport } from "../components/useImage";
import Header from "./Header";
import Footer from "./Footer";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "About me", href: "/about", icon: UserIcon, current: false },
  {
    name: "Community",
    href: "/community",
    icon: UserGroupIcon,
    current: false,
  },

  {
    name: "Contact me",
    href: "/contact",
    icon: PhoneIcon,
    current: false,
  },

  {
    name: "Download my CV",
    href: "/download-cv",
    icon: DocumentTextIcon,
    current: false,
  },

  {
    name: "Around the world",
    href: "/downloadCv",
    icon: GlobeAltIcon,
    current: false,
  },
  {
    name: "About Codehance",
    href: "/codehance",
    icon: ComputerDesktopIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar(props) {
  const { content } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [welcomeNotice, setWelcomeNotice] = useState(true);
  const [agreed, setAgreed] = useState(false);
  return (
    <>
      <div>
        {/* <Transition.Root show={welcomeNotice} as={Fragment}>
          <Dialog as="div" className="relative z-50  " onClose={setSidebarOpen}>
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
                    <div className="overflow-scrool max-w-[22rem] md:max-w-[40rem] mx-auto h-fit rounded-sm absolute bg-violet-200 top-40 bottom-0 right-0 left-0">
                      <p className="sr-only">Welcome notice</p>
                      <h1 className="text-red-700 font-semibold px-5 py-5 text-center text-2xl leading-6">
                        Terms of use
                      </h1>
                      <p className=" text-gray-500 font-thin px-5 pb-5 text-sm md:text-lg leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Vitae tempus quam pellentesque nec.
                        Blandit libero volutpat sed cras. Erat imperdiet sed
                        euismod nisi porta lorem mollis. Nullam eget felis eget
                        nunc lobortis mattis aliquam.
                      </p>
                      <div className="px-5 gap-2 flex h-6 items-center mb-5">
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
                            onClick={() => setWelcomeNotice(false)}
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
        </Transition.Root> */}

        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden "
            onClose={setSidebarOpen}
          >
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
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col w-72 gap-y-5 overflow-y-auto bg-violet-700 px-6 pb-2">
                    <nav className="flex flex-1 flex-col">
                      <div role="list" className="flex flex-1 flex-col ">
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-violet-700 text-white"
                                    : "text-violet-200 hover:text-white hover:bg-violet-700",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-white"
                                      : "text-violet-200 group-hover:text-white",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-violet-600 px-6">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <ul role="list" className="-mx-2 mt-6 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-violet-700 text-white"
                            : "text-violet-200 hover:text-white hover:bg-violet-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "text-violet-200 group-hover:text-white",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <li className="-mx-6 mt-auto">
                  <div className="gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-violet-700">
                    <img
                      className="h-8 w-8 rounded-full bg-violet-700"
                      src={uniformPassport}
                      alt="Avatar"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-violet-600 px-2 py-2 shadow-sm lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-violet-200 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Home
          </div>

          <img
            className="h-8 w-8 rounded-full bg-violet-700"
            src={uniformPassport}
            alt="Avatar"
          />
        </div>

        <main className="lg:pl-72">
          <div className="px-2 max-w-7xl mx-auto ">
            <Header />
            {content}
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
