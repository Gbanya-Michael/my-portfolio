import React, { useState } from "react";
import DownloadCv from "./DowloadCv";

export default function Contact() {
  const [showDownloadSect, setShowDownloadSect] = useState("false");

  const handleShowDownloadSect = () => {
    setShowDownloadSect(!showDownloadSect);
  };

  return (
    <>
      <div className=" mb-72 md:mb-[25rem] text-sm md:text-lg max-w-xl mx-auto">
        <div className="mx-3">
          <p>Thank you for wanting to contact me.</p>
          <p>
            To reduce spam, I have added my contact details in my CV. Please
            download my CV below to access my contact information.
          </p>
        </div>
        <div className="flex flex-shrink-0 justify-center">
          <button
            onClick={handleShowDownloadSect}
            className={`${
              showDownloadSect
                ? "bg-violet-600 hover:bg-violet-400"
                : "bg-red-600 hover:bg-red-400"
            } my-5 ml-3 text-white p-2 md:p-3 rounded-lg w-fit font-bold`}
          >
            {showDownloadSect ? "Download CV" : "Cancel download"}
          </button>
        </div>
        <div className={showDownloadSect ? "hidden" : "block"}>
          <DownloadCv />
        </div>
      </div>
    </>
  );
}
