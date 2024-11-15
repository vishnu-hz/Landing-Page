import React from 'react';
import Group1425 from './Group 1425.svg';

const Concentrics = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="flex flex-col md:flex-row lg:mt-[20px] mt-5 lg:justify-center sm:items-center">
        <img src="/Spiral.svg" alt="Group 1425" className="w-[250px] lg:w-auto" />

        <div className="flex flex-col items-center lg:items-start">
          <div className="text-[28px] lg:text-[46px] w-full lg:w-[369px] mx-[10px] lg:mx-[68px] mt-[50px] lg:mt-[141px] text-center lg:text-left">
            Across All Your
          </div>
          <div
            className="text-[28px] lg:text-[46px] w-full lg:w-[369px] mx-[10px] lg:mx-[68px] text-center lg:text-left"
            style={{
              background: 'linear-gradient(270deg, #2DD5C3 11.81%, #0076FF 52.78%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Outfit',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '1.2',
            }}
          >
            Enterprise Data
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concentrics;

