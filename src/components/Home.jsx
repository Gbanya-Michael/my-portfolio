import React from "react";
import SideBar from "./SideBar";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
    <>
      <SideBar content={<HomeContent />} />
    </>
  );
}
