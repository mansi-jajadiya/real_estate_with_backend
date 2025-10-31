import React from 'react';
import Topbar from '../components/common/Topbar';
import Navbar from '../components/common/Navbar';
import Addtocart from '../components/addtocart/Addtocart';
import Footer from '../components/common/footer';

export default function Cart() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
        <Addtocart />
        <Footer />
       </div>
  );
}