
import React from "react";
import BlogDetails from "../components/blog/BlogDetails/BlogDetails"; 
import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/footer";

export default function BlogDetailsPage() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
      <BlogDetails /> 
      <Footer />
    </div>
  );
}
