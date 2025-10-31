import React from "react";

import ContactUs from "../components/contactpage/ContactUs.jsx";
import Topbar from "../components/common/Topbar.jsx";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/footer.jsx";

export default function Contact() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
}
