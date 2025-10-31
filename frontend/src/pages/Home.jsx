import React from 'react';
import '../App.css';
import Topbar from '../components/common/Topbar';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/homepage/herosection/HeroSection';
import FeaturedSection from '../components/homepage/FeaturedSection/FeaturedSection';
import GreenCardSection from '../components/homepage/PromoBanner/GreenCardSection';
import CardSection from '../components/homepage/PropertyCards/CardSection';
import FeaturedSection2 from '../components/homepage/secondfeaturedsection/FeaturedSection2';
import Category from '../components/homepage/CategoriesSection/category';
import Agents from '../components/homepage/agentcards/Agents';
import Services from '../components/homepage/ourservice/Service';
import Updates from '../components/homepage/ourblog/Blogs';
import NewsletterSignup from '../components/homepage/newsletter/News';
import Footer from '../components/common/footer';

function Home() {
  return (
   <div style={{overflowX:"clip"}}>
    <Topbar/>
    <Navbar/>
    <HeroSection/>
    <FeaturedSection/>
    <CardSection/>
    <GreenCardSection />
    <FeaturedSection2 />
    <Category/>
    <Agents />
    <Services />
    <Updates />
    <NewsletterSignup /> 
    <Footer /> 
   </div>
  );
}

export default Home;
