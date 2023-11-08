import React from "react";
import SideBar from "../components/SideBar";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <div>
        <SideBar content={<About />} />
      </div>
    </>
  );
}
