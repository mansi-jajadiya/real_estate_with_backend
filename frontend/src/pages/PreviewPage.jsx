import React from "react";
import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";
import Preview from "../components/homepage/previewpage/Preview";
import Footer from "../components/common/footer";
export default function PreviewPage() {
  return (
    <div style={{ overflowX: "clip" }}>
      <Topbar />
      <Navbar />
      <Preview />
      <Footer />
    </div>
  );
}
