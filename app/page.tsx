"use client"

import Hero from './components/Hero'
import TypingAnimation from './TypingAnimation'
import Cards2 from './components/Cards2'
import Cards3 from './components/Cards3'
import SearchIcon from './searchicon'
import './globals.css'
import ScrollAnim from './components/ScrollAnim'
import Page1 from "./page1";
import Brands from './components/Brands'
import Cards from './components/Cards'
import Concentrics from './components/Concentrics'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Credibility from './components/Credibility'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Form from '../app/form/page'
export default function Home() {
  return (
    
    <div className='overflow-x-hidden'>
      <div className='overflow-x-hidden'>

      </div>
      
     
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
    
    </div>
    
  );
}
