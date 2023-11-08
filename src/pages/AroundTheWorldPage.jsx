import React from "react";
import SideBar from "../components/SideBar";
import AroundTheWorld from "../components/AroundTheWorld";
export default function AroundTheWorldPage() {
  return (
    <>
      <div>
        <SideBar content={<AroundTheWorld />} />
      </div>
    </>
  );
}
