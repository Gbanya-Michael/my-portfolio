import React from "react";
import SideBar from "../components/SideBar";
import ProjectDetails from "../components/ProjectDetails";

export default function ProjectDetailsPage() {
  return (
    <>
      <div>
        <SideBar content={<ProjectDetails />} />
      </div>
    </>
  );
}
