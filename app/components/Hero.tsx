import React from "react";
import Zelo from "./Zelo";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      <div className="absolute w-[865px] h-[865px] rotate-[65deg] -left-[30rem] bottom-[9rem] bg-gradient-to-t from-[#0076FF] via-[#1091F5B8] to-[#fff] rounded-full mix-blend-multiply filter blur-3xl opacity-90 -z-10"></div>
 
      <div className="absolute w-[973px] h-[870px] -rotate-[30deg] -right-[24rem] top-[30rem] bg-gradient-to-r from-[#0076FF] via-[#1091F5B8] to-[#fff] rounded-full mix-blend-multiply filter blur-3xl opacity-90 -z-10"></div>

      <Zelo/>
    </div>
  );
};

export default Hero;


