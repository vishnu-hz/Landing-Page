// import Image from 'next/image'
// import React from 'react'
// const Features = () => {
//   return (
//     <div className='lg:mt-12'>

// <div className='flex flex-col items-center justify-center lg:items-start gap-[21px]'>

//     <div className='flex lg:flex-row flex-col gap-[20px] mt-[93px] lg:ml-[204px]' >
//       <Image src="/ZeloIntelligence.svg" alt="" width={352} height={228} className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]" />
    
//       <Image src="/FeaturesCard2.svg" alt="" width={352} height={228} className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]"/>
//       <Image src="/FeaturesCard3.svg" alt="" width={352} height={228} className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]"/>
//     </div>

// <div className='flex lg:flex-row flex-col gap-[20px] lg:ml-[204px]' >
//       <Image src="/FeaturesCard4.svg" alt="" width={352} height={228} className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]"/>
//       <Image src="/FeaturesCard5.svg" alt="" width={352} height={228}className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]" />
//       <Image src="/FeaturesCard6.svg" alt="" width={352} height={228} className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]" />
//     </div> 
    

// <div className='flex lg:w-full w-0 h-0 lg:mt-[85px] justify-center items-center'>
//   <svg xmlns="http://www.w3.org/2000/svg" width="1105" height="2" viewBox="0 0 1105 2" fill="none">
//    <path d="M0 1L1105 1" stroke="#E5E5E5"/>
//  </svg>
//    </div> 
// </div>

//     </div>
//   )
// }

// export default Features


import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <div className="lg:mt-12 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-[21px]">
        {/* First Row */}
        <div className="flex lg:flex-row flex-col gap-[20px] mt-[93px] mx-auto">
          <Image
            src="/ZeloIntelligence.svg"
            alt=""
            width={352}
            height={228}
            className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]"
          />
          <Image
            src="/FeaturesCard2.svg"
            alt=""
            width={352}
            height={228}
            className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]"
          />
          <Image
            src="/FeaturesCard3.svg"
            alt=""
            width={352}
            height={228}
            className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]"
          />
        </div>

        {/* Second Row */}
        <div className="flex lg:flex-row flex-col gap-[20px] mx-auto">
          <Image
            src="/FeaturesCard4.svg"
            alt=""
            width={352}
            height={228}
            className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]"
          />
          <Image
            src="/FeaturesCard5.svg"
            alt=""
            width={352}
            height={228}
            className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]"
          />
          <Image
            src="/FeaturesCard6.svg"
            alt=""
            width={352}
            height={228}
            className="lg:w-[352px] lg:h-[228px] sm:w-[350px] sm:h-[145px]"
          />
        </div>

        {/* Divider Line */}
        <div className="flex w-full lg:mt-[85px] justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1105"
            height="2"
            viewBox="0 0 1105 2"
            fill="none"
          >
            <path d="M0 1L1105 1" stroke="#E5E5E5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Features;

