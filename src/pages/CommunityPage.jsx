import React from "react";
import SideBar from "../components/SideBar";
import Community from "../components/Community";

export default function CommunityPage() {
  return (
    <>
      <div>
        <SideBar content={<Community />} />
      </div>
    </>
  );
}
