import React from "react";
import SideBar from "../components/SideBar";
import Codehance from "../components/Codehance";
export default function CodehancePage() {
  return (
    <>
      <div>
        <SideBar content={<Codehance />} />
      </div>
    </>
  );
}
