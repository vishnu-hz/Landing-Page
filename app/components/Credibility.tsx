import Image from 'next/image'
import React from 'react'

const Credibility = () => {
  return (
    <div className='mt-[75px] px-4'>
      <div className='card w-full max-w-[779px] h-[37px] mx-auto text-center text-[20px] font-medium text-[#858585]'>
        Zelo is being built by a team who have innovated & built at:
      </div>

      <div className='flex flex-wrap gap-[37px] w-full max-w-[1124px] h-auto mx-auto mt-[12.05px] items-center justify-center'>
        <div className='lg:w-[188.942px] lg:h-[98.683px]'>
         <Image src="/BharatPe_Logo.svg" alt="" width={188} height={99} className="filter grayscale-[100%] opacity-50 object-contain w-[90px] h-[47px] lg:w-full lg:h-full"/>
        </div>

        <div className='flex-shrink-0 w-[264px] h-[97px]'>
         <Image src="/Microsoft_Logo.svg" alt="" width={188} height={99} className="filter grayscale-[100%] opacity-50 object-contain w-[125px] h-[46px] lg:w-full lg:h-full"/>
        </div>

        <div className='w-[173px] h-[97px]'>
          <Image src="/Zomato-logo.svg" alt="" width={188} height={99} className="filter grayscale-[100%] opacity-50 object-contain w-[82px] h-[46px] lg:w-full lg:h-full"/>
        </div>

        <div className='w-[145.627px] h-[50.545px]'>
         <Image src="/Penn_Engg_Logo.svg" alt="" width={188} height={99} className="filter grayscale-[100%] opacity-50 object-contain w-[88px] h-[29px] lg:w-full lg:h-full"/>
        </div>

        <div className='w-[190.942px] h-[107.683px]'>
          <Image src="/Wharton-logo.svg" alt="" width={188} height={99} className="filter grayscale-[100%] opacity-50 object-contain w-[109px] h-[61px] lg:w-full lg:h-full"/>
        </div>
      </div>
    </div>
  )
}

export default Credibility
