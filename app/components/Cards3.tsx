import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const Card3 = () => {
   return (
    <div className="carousel-container relative">
      <div className="lg:mt-24">
      </div>
      <div className=' mt-4 lg:h-[398px]'>
        <div className="flex justify-center px-6 lg:px-[248px] ">
          <div className="card  rounded-lg flex">
            <Image
              src="/Card_31.svg"
              alt="Feature 1"
              width={1016}
              height={398}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className='flex lg:w-full w-0 h-0 lg:mt-[85px] justify-center items-center'>
  <svg xmlns="http://www.w3.org/2000/svg" width="1105" height="2" viewBox="0 0 1105 2" fill="none">
   <path d="M0 1L1105 1" stroke="#E5E5E5"/>
 </svg>
   </div> 
    </div>
  );
};

export default Card3;
