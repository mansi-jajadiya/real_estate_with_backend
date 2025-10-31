import React from 'react';
import Topbar from '../components/common/Topbar';
import Navbar from '../components/common/Navbar';
import Agentmain from '../components/ouragents/mainagentsdetails/Agentmain';
import Footer from '../components/common/footer';
export default function Ouragents() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
     <Agentmain />
     <Footer />
       </div>
  );
}