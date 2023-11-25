import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

const downloadTandC = [
  {
    id: 1,
    item: "By downloading my CV, you agree that the details contained in the document shall only be used for legal purposes such as  employment, contracts, referral, gigs, partnership.",
  },
  {
    id: 2,
    item: "If for any reason, my details are used outside the scope mentioned above without informing me, I shall take legal action against such person.",
  },
  {
    id: 3,
    item: "You agree to contact me for consent before sharing my data with any other party.",
  },
];
// CV links

const CV_PDF_LINK = "/Michael-Gbanya-CV.pdf";
const CV_WORD_LINK = "/Michael-Gbanya-CV.docx";

const customNameWord = "Michael-Gbanya-CV.docx";
const customNamePDF = "Michael-Gbanya-CV.pdf";

export default function DownloadCv() {
  const [agreed, setAgreed] = useState(false);
  const [downloadMessage, setDownloadMessage] = useState("");

  const handleDownloaded = (type) => {
    if (type === "word") {
      setDownloadMessage(
        `Word document downloaded successfully. Please check your download folder with file name ${customNameWord}`
      );
    }
    if (type === "pdf") {
      setDownloadMessage(
        `PDF document downloaded successfully. Please check your download folder with file name ${customNamePDF}`
      );
    } else "";
  };
  return (
    <>
      <div className="px-3 py-2 relative text-sm md:text-lg text-gray-500  max-w-2xl mx-auto border-1 border border-violet-500 rounded-lg h-fit pb-10">
        <div className=" ">
          Please read the terms and agree by checking the box below. <br></br> I
          am happy to work with you. Cheers!
        </div>
        <ol className=" list-disc mt-5  ">
          {downloadTandC.map((terms) => (
            <li key={terms.id} className="ml-5 mt-2">
              {terms.item}
            </li>
          ))}
        </ol>
        <div className=" my-8 gap-2 flex h-6 items-center">
          <input
            id="confirmation"
            aria-describedby="download-confirmation"
            name="confirm"
            type="checkbox"
            checked={agreed}
            className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
            onChange={() => setAgreed(!agreed)}
          />
          <p className="text-xs text-gray-900">
            Yes, this download is for the reasons stated above.
          </p>
        </div>
        {agreed && (
          <div className="max-w-md h-fit px-3 rounded-sm absolute z-0 top-30 bottom-100 right-0 left-0">
            {downloadMessage && (
              <div
                className={`absolute z-10 text-gray-500 mb-3 bg-gray-100 p-3 h-fit rounded-md ring-gray-300 ring-1 shadow-2xl`}
              >
                <p className="flex">
                  {downloadMessage}s
                  <XMarkIcon
                    className="w-6 h-6 text-gray-900 cursor-pointer"
                    onClick={() => setDownloadMessage(false)}
                  />
                </p>

                <Link to="/">
                  Return <span className="text-blue-500 ">home</span>
                </Link>
              </div>
            )}
            <div
              className=" max-w-sm  flex justify-between gap-2
            animate__animated animate__backInRight 
            "
            >
              <Link
                onClick={() => handleDownloaded("word")}
                to={CV_WORD_LINK}
                download={customNameWord}
                target="_blank"
                className="text-xs flex gap-1 items-center bg-blue-600 text-white p-2 rounded-lg ring ring-blue-400/10 shadow-md hover:bg-blue-400"
              >
                Downlaod word <ArrowDownIcon className=" w-4 h-4 " />
              </Link>
              <Link
                onClick={() => handleDownloaded("pdf")}
                to={CV_PDF_LINK}
                download={customNamePDF}
                target="_blank"
                className=" text-xs flex gap-1 items-center bg-red-800 text-white p-2 rounded-lg ring ring-red-400/10 shadow-md hover:bg-red-600"
              >
                Download PDF <ArrowDownIcon className=" w-4 h-4 " />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
