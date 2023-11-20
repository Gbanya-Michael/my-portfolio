import React, { useState } from "react";
import DownloadCv from "./DowloadCv";

export default function Contact() {
  const [showDownloadSect, setShowDownloadSect] = useState("false");

  const handleShowDownloadSect = () => {
    setShowDownloadSect(!showDownloadSect);
  };

  return (
    <>
      <div className=" mb-72 pt-40 md:mb-[25rem] text-sm md:text-lg max-w-xl mx-auto">
        <div className="mx-3">
          <p>Thank you for wanting to contact me.</p>
          <p>
            To reduce spam, I have added my contact details in my CV. Please
            download my CV below to access my contact information.
          </p>
        </div>
        <div className="pt-10">
          <button
            onClick={handleShowDownloadSect}
            className={`${
              showDownloadSect
                ? "bg-violet-600/90 hover:bg-violet-400"
                : "bg-red-600/90 hover:bg-red-400"
            } my-5 ml-3 text-white p-2 md:p-3 rounded-lg w-fit font-semibold`}
          >
            {showDownloadSect ? "Download CV" : "Cancel download"}
          </button>
        </div>
        <div
          className={`animate__animated animate__fadeInTopRight ${
            showDownloadSect ? "hidden" : "block"
          }`}
        >
          <DownloadCv />
        </div>
      </div>
    </>
  );
}
