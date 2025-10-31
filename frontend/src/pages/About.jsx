import React from 'react';
import Topbar from '../components/common/Topbar';
import Navbar from '../components/common/Navbar';
import Aboutservice from '../components/aboutpage/AboutServices/Aboutservice';
import Team from '../components/aboutpage/team/Team';
import Fromblog from '../components/aboutpage/fromblog/Fromblog';
import Blogcard from '../components/aboutpage/blogcards/Blogcard';
import Footer from '../components/common/footer';
export default function About() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
      <Aboutservice />
      <Team />
      <Fromblog /> 
      <Blogcard /> 
      <Footer />
       </div>
  );
}