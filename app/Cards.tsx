import React from 'react';

const Cards = () => {
  return (
    <div className='overflow-hidden'>
      <div className='card flex-shrink-0 w-[134px] h-[38px] text-[20px] mt-[64px] ml-[256px] text-[#858585]'>
        Our Platform
      </div>

      <div className='w-[1512px] mt-[16px]'>
        <div className='flex'>
          {/* Left-Navigation Button */}
          <div className='mt-[179px] ml-[120px]'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className='nav-button' // Add the class here
            >
              <circle cx="20.5" cy="20.5" r="19.5" transform="rotate(-180 20.5 20.5)" fill="white" stroke="#B2B2B2" strokeWidth="1.2"/>
              <path d="M23.2861 26.6287L16.6004 19.9429M16.6004 19.9429L23.2861 13.2572M16.6004 19.9429L16.8089 19.9429" stroke="#B2B2B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            {/* Card element */}
            <div className='w-[1016px] rounded-[40px] h-[398px] ml-[88px]'>
              <div className=''>
                <div className='flex'>
                  <img src="./Card11.svg" alt="Card Image" />
                  <div className='ml-[70px] mt-[87px]'>
                    <img src="./Z-Team.svg" alt="Z Team" />
                    <div className='card mt-[28px] flex-shrink-0 flex items-center ml-[3px] w-[346px] h-[32px] text-[#414141] text-[20px] font-medium leading-[36px]'>
                      Hire Personalized AI Teammates
                    </div>
                    <div className='card w-[366px] h-[102px] text-[#414141] text-[16px] font-normal mt-[6px] leading-[26px]'>
                      Personalized and context aware AI assistants that provide answers ingrained in curated knowledge sources - with granular access controls
                    </div>

                    <div className='mt-[15px] ml-[3px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="9" viewBox="0 0 37 9" fill="none">
                        <circle cx="4.5" cy="4.5" r="4.5" fill="url(#paint0_linear_3923_951)"/>
                        <circle cx="18.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
                        <circle cx="32.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
                        <defs>
                          <linearGradient id="paint0_linear_3923_951" x1="9" y1="4.5" x2="0" y2="4.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2DD5C3"/>
                            <stop offset="1" stopColor="#0076FF"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                  </div>

                </div>
              </div>

            </div>




            

          </div>
          
          <div className='mt-[179px] ml-[88px]'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className='nav-button' // Add the class here
            >
              <circle cx="20.5" cy="20.5" r="19.5" fill="white" stroke="#B2B2B2" strokeWidth="1.2"/>
              <path d="M17.7139 14.3713L24.3996 21.0571M24.3996 21.0571L17.7139 27.7428M24.3996 21.0571H24.1911" stroke="#B2B2B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cards;