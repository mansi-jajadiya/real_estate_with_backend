import React from "react";
import BlogPage from "../components/blog/BlogPage/BlogPage";
import Topbar from "../components/common/Topbar";
import Footer from "../components/common/footer";
import Navbar from "../components/common/Navbar";
export default function Contact() {
  return (
<div style={{overflowX:"clip"}}>
<Topbar/>
<Navbar/>
<BlogPage/>
<Footer/>
</div>
  );
}

