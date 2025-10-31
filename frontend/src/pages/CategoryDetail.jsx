import React from 'react';
import Topbar from '../components/common/Topbar';
import Navbar from '../components/common/Navbar';
import Main  from '../components/category/main';
import Footer from '../components/common/footer';
export default function CategoryDetail() {
  return (
    <div style={{overflowX:"clip"}}>
      <Topbar />
      <Navbar />
      <Main />
      <Footer />
       </div>
  );
}