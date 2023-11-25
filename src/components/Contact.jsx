import React, { useState } from "react";
import DownloadCv from "./DowloadCv";

export default function Contact() {
  const [showDownloadSect, setShowDownloadSect] = useState("false");

  const handleShowDownloadSect = () => {
    setShowDownloadSect(!showDownloadSect);
  };

  return (
    <>
      <div className="px-5 pt-10 pb-20 h-fit text-sm text-gray-500 md:text-lg max-w-xl mx-auto ring-1 ring-violet-500 rounded-lg">
        <div className="mx-3">
          <p>Thank you for visiting my website.</p>
          <p>
            To reduce spam, I have added my contact details in my CV. Please
            download my CV below to access my contact information.
          </p>
        </div>
        <div>
          <button
            onClick={handleShowDownloadSect}
            className={`${
              showDownloadSect
                ? "bg-violet-600/90 hover:bg-violet-400"
                : "bg-red-600/90 hover:bg-red-400"
            } text-xs my-5 ml-3 text-white p-2 rounded-lg w-fit font-semibold`}
          >
            {showDownloadSect ? "Download CV" : "Cancel download"}
          </button>
        </div>
        <div
          className={`animate__animated animate__fadeInRight ${
            showDownloadSect ? "hidden" : "block"
          }`}
        >
          <DownloadCv />
        </div>
      </div>
    </>
  );
}
