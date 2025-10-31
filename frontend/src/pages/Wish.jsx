import React from 'react';
import Topbar from '../components/common/Topbar';
import Navbar from '../components/common/Navbar';
import Wishlist from "../components/wishlist/Wishlist";
import Footer from '../components/common/footer';

export default function Wish() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
      <Wishlist />
      <Footer />
       </div>
  );
}