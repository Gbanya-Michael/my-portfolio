import React from "react";
import SideBar from "../components/SideBar";
import Contact from "../components/Contact";
export default function ContactPage() {
  return (
    <>
      <div>
        <SideBar content={<Contact />} />
      </div>
    </>
  );
}
