import { Link } from "react-router-dom";
import { waterBackground } from "./useImage";
export default function AroundTheWorld() {
  return (
    <>
      <main className="relative isolate min-h-full">
        <img
          src={waterBackground}
          alt="image"
          className="absolute brightness-50 inset-0 -z-10 h-full w-full object-cover object-center"
        />

        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 text-white">
            Thanks for checking!
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Coming soon
          </h1>
          <p className="mt-4 font-bold text-base text-white/70 sm:mt-6">
            On this page, I will be sharing my experience about the countries I
            have visited with photo stories. <br /> Come back later.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/" className="text-sm font-semibold leading-7 text-white">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
