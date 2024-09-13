"use client"

import Hero from './bgellipse'
import TypingAnimation from './TypingAnimation'
import Cards2 from './Cards2'
import Cards3 from './Cards3'
import SearchIcon from './searchicon'
import './globals.css'
import ScrollAnim from './ScrollAnim'
import Page1 from "./page1";
import Brands from './brands'
import Cards from './Cards'
import Concentrics from './Concentrics'
import Benefits from './Benefits'
import Features from './Features'
import Credibility from './Credibility'
import Testimonials from './Testimonials'
import Footer from './Footer'
export default function Home() {
  return (
    
    <div >
      <div className=''>

      </div>
      
     {/* <Page1/>
   <TypingAnimation/> */}
   <Hero/>
    <Brands/>
    <ScrollAnim/>
    <Cards/>
    <Cards2/>
    <Cards3/>
    <Concentrics/>
    <Benefits/>
    <Features/>
    <Credibility/>
    <Testimonials/>
    <Footer/>
    {/* <SearchIcon/> */}
    {/* <Ellipse/> */}
    
    </div>
    
  );
}
