import React from "react";

import SideBar from "../components/SideBar";
import DownloadCv from "../components/DowloadCv";

export default function DownloadCvPage() {
  return (
    <>
      <div>
        <SideBar content={<DownloadCv />} />
      </div>
    </>
  );
}
