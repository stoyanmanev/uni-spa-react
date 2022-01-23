import React from "react";
import ContactBranch from "../component/contact/ContactBranch";
// import { useSelector } from "react-redux";

export default function Contact() {
  // const notificationView = useSelector((state) => state.notificationView); //todo

  return (
    <div className="section">
      <ContactBranch/>
    </div>
  );
}
