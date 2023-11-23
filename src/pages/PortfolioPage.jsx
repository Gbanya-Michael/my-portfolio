import React from "react";
import SideBar from "../components/SideBar";
import Portfolio from "../components/Portfolio";

export default function PortfolioPage() {
  return (
    <>
      <SideBar content={<Portfolio />} />
    </>
  );
}
