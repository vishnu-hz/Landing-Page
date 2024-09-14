// import React from 'react'
// import Monster from '../public/Monster.svg'
// const Footer = () => {
//   return (
//     <div className='overflow-hidden'>
//       <div className='flex'>
// <div>
//       <div className='card w-[149px] h-[38px] text-center text-[#414141] text-[22px] font-bold leading-[38px] mt-[97px] ml-[660px]'> Get Started.</div>
//       <div className='w-[634px] h-[59px] ml-[429px] text-center'>
//       <span className='gradient-text-1'>
//         Say Hello,
//       </span>
//       <span>&nbsp;</span>
//       <span className='gradient-text-2'>
//         to Zelo!
//       </span>
//       </div>

// <div className='card mt-[25px] w-[476px] h-[84px] text-center text-[#414141] text-[22px] font-normal leading-[33px] ml-[518px]'>
// Let us show you how our magical platform can help accelerate the work you do
// </div>
// <div className='ml-[672px] mt-[21px]'>
// <button className='flex gap-[15.46px] bg-black border-[1px] border-[#868686] w-[169px] h-[56px] rounded-[54px] justify-center items-center'>
//         <div className='text-white  text-[18px] font-medium leading-normal flex w-[97px] h-[27px]  flex-col  justify-center font-outfit '> 
//         See A Demo
        
//         </div>
//         <div className='w-[5.333px] h-[10px]   '>
//         <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
//   <path d="M1 1L6.33333 6M6.33333 6L1 11M6.33333 6H6.16699" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </div>
//       </button>
//       </div>
//       </div>
//       <div className='mt-[64px] ml-[25px]'>
//         <img src='./Monster.svg'></img>
//       </div>
// </div>

//     <div className='-mt-[42px] w-[1521px] h-[45px] bg-zelo-blue-gradient'>
//         <div className='card absolute flex-shrink-0 card w-[251px] h-[28px] mt-[7px] ml-[28px]'>
//             <div className='text-black leading-[33px] text-[14px] font-normal'>
//         All rights reserved ©Zelo 2024
//         </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default Footer






// 'use client'; // Enable client-side rendering

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const Footer = () => {
//   const [isClicked, setIsClicked] = useState(false); // State to track button click
//   const router = useRouter(); // Use Next.js router for navigation

//   const handleButtonClick = () => {
//     setIsClicked(true); // Apply the background effect
//     router.push('/form'); // Navigate to the form page
//   };

//   return (
//     <div className='overflow-hidden'>
//       <div className='flex'>
//         <div>
//           <div className='card w-[149px] h-[38px] text-center text-[#414141] text-[22px] font-bold leading-[38px] mt-[97px] ml-[660px]'>
//             Get Started.
//           </div>
//           <div className='w-[634px] h-[59px] ml-[429px] text-center'>
//             <span className='gradient-text-1'>Say Hello,</span>
//             <span>&nbsp;</span>
//             <span className='gradient-text-2'>to Zelo!</span>
//           </div>

//           <div className='card mt-[25px] w-[476px] h-[84px] text-center text-[#414141] text-[22px] font-normal leading-[33px] ml-[518px]'>
//             Let us show you how our magical platform can help accelerate the work you do
//           </div>

//           <div className='ml-[672px] mt-[21px]'>
//             <button 
//               onClick={handleButtonClick}
//               className='flex gap-[15.46px] bg-black border-[1px] border-[#868686] w-[169px] h-[56px] rounded-[54px] justify-center items-center'
//             >
//               <div className='text-white text-[18px] font-medium leading-normal flex w-[97px] h-[27px] flex-col justify-center font-outfit'>
//                 See A Demo
//               </div>
//               <div className='w-[5.333px] h-[10px]'>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
//                   <path d="M1 1L6.33333 6M6.33333 6L1 11M6.33333 6H6.16699" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               </div>
//             </button>
//           </div>
//         </div>
//         <div className='mt-[64px] ml-[25px]'>
//           <img src='./Monster.svg' alt="Monster" />
//         </div>
//       </div>

//       <div className='-mt-[42px] w-[1521px] h-[45px] bg-zelo-blue-gradient'>
//         <div className='card absolute flex-shrink-0 w-[251px] h-[28px] mt-[7px] ml-[28px]'>
//           <div className='text-black leading-[33px] text-[14px] font-normal'>
//             All rights reserved ©Zelo 2024
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;






// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Form from './form/page';

// const Footer = () => {
//   const [isClicked, setIsClicked] = useState(false); // State to track button click
//   const router = useRouter();

//   const handleButtonClick = () => {
//     setIsClicked(true); // Apply the background effect
//     setTimeout(() => {
//       // router.push('/form'); // Redirect to the form page
//     }, 500); // Delay the navigation to show the blur effect
//   };

//   return (
//     <div className={`overflow-hidden ${isClicked ? 'blurred' : ''}`}>
//       <div className='flex'>
//         <div>
//           <div className='card w-[149px] h-[38px] text-center text-[#414141] text-[22px] font-bold leading-[38px] mt-[97px] ml-[660px]'>Get Started.</div>
//           <div className='w-[634px] h-[59px] ml-[429px] text-center'>
//             <span className='gradient-text-1'>Say Hello,</span>
//             <span>&nbsp;</span>
//             <span className='gradient-text-2'>to Zelo!</span>
//           </div>
//           <div className='card mt-[25px] w-[476px] h-[84px] text-center text-[#414141] text-[22px] font-normal leading-[33px] ml-[518px]'>
//             Let us show you how our magical platform can help accelerate the work you do
//           </div>
//           <div className='ml-[672px] mt-[21px]'>
//             <button onClick={handleButtonClick} className='flex gap-[15.46px] bg-black border-[1px] border-[#868686] w-[169px] h-[56px] rounded-[54px] justify-center items-center'>
//               <div className='text-white text-[18px] font-medium leading-normal flex w-[97px] h-[27px] flex-col justify-center font-outfit'>See A Demo</div>
//               <div className='w-[5.333px] h-[10px]'>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
//                   <path d="M1 1L6.33333 6M6.33333 6L1 11M6.33333 6H6.16699" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg>
//               </div>
//             </button>
//           </div>
//         </div>
//         <div className='mt-[64px] ml-[25px]'>
//           <img src='./Monster.svg'></img>
//         </div>
//       </div>
//       <div className='-mt-[42px] w-[1521px] h-[45px] bg-zelo-blue-gradient'>
//         <div className='card absolute flex-shrink-0 card w-[251px] h-[28px] mt-[7px] ml-[28px]'>
//           <div className='text-black leading-[33px] text-[14px] font-normal'>
//             All rights reserved ©Zelo 2024
//           </div>
//         </div>
//       </div>
//       {isClicked && (
//         <div className="overlay">
//           <Form/>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Footer;





import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from './form/page'; // Import the form component

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false); // State to track button click
  const router = useRouter();

  const handleButtonClick = () => {
    setIsClicked(true); // Show the overlay
    setTimeout(() => {
      router.push('/form'); // Redirect to the form page after delay
    }, 300); // Adjust the delay to ensure the blur effect is visible
  };

  return (
    <div className={`overflow-hidden ${isClicked ? 'blurred' : ''}`}>
      <div className='flex'>
        <div>
          <div className='card w-[149px] h-[38px] text-center text-[#414141] text-[22px] font-bold leading-[38px] mt-[97px] ml-[660px]'>
            Get Started.
          </div>
          <div className='w-[634px] h-[59px] ml-[429px] text-center'>
            <span className='gradient-text-1'>Say Hello,</span>
            <span>&nbsp;</span>
            <span className='gradient-text-2'>to Zelo!</span>
          </div>
          <div className='card mt-[25px] w-[476px] h-[84px] text-center text-[#414141] text-[22px] font-normal leading-[33px] ml-[518px]'>
            Let us show you how our magical platform can help accelerate the work you do
          </div>
          <div className='ml-[672px] mt-[21px]'>
            <button onClick={handleButtonClick} className='flex gap-[15.46px] bg-black border-[1px] border-[#868686] w-[169px] h-[56px] rounded-[54px] justify-center items-center'>
              <div className='text-white text-[18px] font-medium leading-normal flex w-[97px] h-[27px] flex-col justify-center font-outfit'>
                See A Demo
              </div>
              <div className='w-[5.333px] h-[10px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <path d="M1 1L6.33333 6M6.33333 6L1 11M6.33333 6H6.16699" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className='mt-[64px] ml-[25px]'>
          <img src='./Monster.svg' alt="Monster"/>
        </div>
      </div>
      <div className='-mt-[42px] w-[1521px] h-[45px] bg-zelo-blue-gradient'>
        <div className='card absolute flex-shrink-0 card w-[251px] h-[28px] mt-[7px] ml-[28px]'>
          <div className='text-black leading-[33px] text-[14px] font-normal'>
            All rights reserved ©Zelo 2024
          </div>
        </div>
      </div>
      {isClicked && (
        <div className="overlay">
          <Form /> {/* Render the form */}
        </div>
      )}
    </div>
  );
};

export default Footer;
