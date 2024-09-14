// import React from 'react';

// const Cards = () => {
//   return (
//     <div className='overflow-hidden'>
//       <div className='card flex-shrink-0 w-[134px] h-[38px] text-[20px] mt-[64px] ml-[256px] text-[#858585]'>
//         Our Platform
//       </div>

//       <div className='w-[1512px] mt-[16px]'>
//         <div className='flex'>
//           {/* Left-Navigation Button */}
//           <div className='mt-[179px] ml-[120px]'>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="41"
//               height="41"
//               viewBox="0 0 41 41"
//               fill="none"
//               className='nav-button' // Add the class here
//             >
//               <circle cx="20.5" cy="20.5" r="19.5" transform="rotate(-180 20.5 20.5)" fill="white" stroke="#B2B2B2" strokeWidth="1.2"/>
//               <path d="M23.2861 26.6287L16.6004 19.9429M16.6004 19.9429L23.2861 13.2572M16.6004 19.9429L16.8089 19.9429" stroke="#B2B2B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//           <div className=''>
//             {/* Card element */}
//             <div className='w-[1016px] rounded-[40px] h-[398px] ml-[88px]'>
//               <div className=''>
//                 <div className='flex'>
//                   <img src="./Card11.svg" alt="Card Image" />
//                   <div className='ml-[70px] mt-[87px]'>
//                     <img src="./Z-Team.svg" alt="Z Team" />
//                     <div className='card mt-[28px] flex-shrink-0 flex items-center ml-[3px] w-[346px] h-[32px] text-[#414141] text-[20px] font-medium leading-[36px]'>
//                       Hire Personalized AI Teammates
//                     </div>
//                     <div className='card w-[366px] h-[102px] text-[#414141] text-[16px] font-normal mt-[6px] leading-[26px]'>
//                       Personalized and context aware AI assistants that provide answers ingrained in curated knowledge sources - with granular access controls
//                     </div>

//                     <div className='mt-[15px] ml-[3px]'>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="37" height="9" viewBox="0 0 37 9" fill="none">
//                         <circle cx="4.5" cy="4.5" r="4.5" fill="url(#paint0_linear_3923_951)"/>
//                         <circle cx="18.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                         <circle cx="32.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                         <defs>
//                           <linearGradient id="paint0_linear_3923_951" x1="9" y1="4.5" x2="0" y2="4.5" gradientUnits="userSpaceOnUse">
//                             <stop stopColor="#2DD5C3"/>
//                             <stop offset="1" stopColor="#0076FF"/>
//                           </linearGradient>
//                         </defs>
//                       </svg>
//                     </div>

//                   </div>

//                 </div>
//               </div>

//             </div>




            




            

//           </div>
//           {/* Right Navigation Button*/ }
//           <div className='mt-[179px] ml-[88px]'>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="41"
//               height="41"
//               viewBox="0 0 41 41"
//               fill="none"
//               className='nav-button' // Add the class here
//             >
//               <circle cx="20.5" cy="20.5" r="19.5" fill="white" stroke="#B2B2B2" strokeWidth="1.2"/>
//               <path d="M17.7139 14.3713L24.3996 21.0571M24.3996 21.0571L17.7139 27.7428M24.3996 21.0571H24.1911" stroke="#B2B2B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;






// import React, { useRef } from 'react';

// const Cards = () => {
//   const cardContainerRef = useRef(null);

//   const scrollLeft = () => {
//     if (cardContainerRef.current) {
//       cardContainerRef.current.scrollBy({
//         left: -300, // Adjust this value to scroll by a desired amount
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (cardContainerRef.current) {
//       cardContainerRef.current.scrollBy({
//         left: 300, // Adjust this value to scroll by a desired amount
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className='overflow-hidden'>
//       <div className='card flex-shrink-0 w-[134px] h-[38px] text-[20px] mt-[64px] ml-[256px] text-[#858585]'>
//         Our Platform
//       </div>

//       <div className='relative mt-[16px]'>
//         <div className='flex'>
//           {/* Left-Navigation Button */}
//           <div className='mt-[179px] ml-[120px]'>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="41"
//               height="41"
//               viewBox="0 0 41 41"
//               fill="none"
//               className='nav-button cursor-pointer'
//               onClick={scrollLeft}
//             >
//               <circle cx="20.5" cy="20.5" r="19.5" transform="rotate(-180 20.5 20.5)" fill="white" stroke="#B2B2B2" strokeWidth="1.2"/>
//               <path d="M23.2861 26.6287L16.6004 19.9429M16.6004 19.9429L23.2861 13.2572M16.6004 19.9429L16.8089 19.9429" stroke="#B2B2B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>

//           <div className='flex overflow-x-hidden'>
//             <div className='flex flex-nowrap' ref={cardContainerRef}>
//               {/* Card elements */}
//               <div className='w-[1016px] rounded-[40px] h-[398px] ml-[88px]'>
//                 <div className='flex'>
//                   <img src="./Card11.svg" alt="Card Image" />
//                   <div className='ml-[70px] mt-[87px]'>
//                     <img src="./Z-Team.svg" alt="Z Team" />
//                     <div className='card mt-[28px] flex-shrink-0 flex items-center ml-[3px] w-[346px] h-[32px] text-[#414141] text-[20px] font-medium leading-[36px]'>
//                       Hire Personalized AI Teammates
//                     </div>
//                     <div className='card w-[366px] h-[102px] text-[#414141] text-[16px] font-normal mt-[6px] leading-[26px]'>
//                       Personalized and context aware AI assistants that provide answers ingrained in curated knowledge sources - with granular access controls
//                     </div>
//                     <div className='mt-[15px] ml-[3px]'>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="37" height="9" viewBox="0 0 37 9" fill="none">
//                         <circle cx="4.5" cy="4.5" r="4.5" fill="url(#paint0_linear_3923_951)"/>
//                         <circle cx="18.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                         <circle cx="32.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                         <defs>
//                           <linearGradient id="paint0_linear_3923_951" x1="9" y1="4.5" x2="0" y2="4.5" gradientUnits="userSpaceOnUse">
//                             <stop stopColor="#2DD5C3"/>
//                             <stop offset="1" stopColor="#0076FF"/>
//                           </linearGradient>
//                         </defs>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Additional cards */}
//               <div className='w-[1016px] rounded-[40px] h-[398px] ml-[88px]'>
//                 {/* Card content */}
// <div className='w-[1016px] rounded-[40px] h-[398px] ml-[88px]'>
//                 <div className='flex'>
//                   <img src="./Card12.svg" alt="Card Image" />
//                   <div className='ml-[70px] mt-[87px]'>
//                     <img src="./Z-Team.svg" alt="Z Team" />
//                     <div className='card mt-[28px] flex-shrink-0 flex items-center ml-[3px] w-[346px] h-[32px] text-[#414141] text-[20px] font-medium leading-[36px]'>
//                       Finetuned For Dozens Of Use Cases
//                     </div>
//                     <div className='card w-[366px] h-[102px] text-[#414141] text-[16px] font-normal mt-[6px] leading-[26px]'>
//                       AI-powered Z-teammates are crafted for specific use cases & functions, while respecting resource & data permissions
//                     </div>
//                     <div className='mt-[15px] ml-[3px]'>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="37" height="9" viewBox="0 0 37 9" fill="none">
//                         <circle cx="4.5" cy="4.5" r="4.5" fill="url(#paint0_linear_3923_951)"/>
//                         <circle cx="18.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                         <circle cx="32.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                         <defs>
//                           <linearGradient id="paint0_linear_3923_951" x1="9" y1="4.5" x2="0" y2="4.5" gradientUnits="userSpaceOnUse">
//                             <stop stopColor="#2DD5C3"/>
//                             <stop offset="1" stopColor="#0076FF"/>
//                           </linearGradient>
//                         </defs>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>


//               </div>
//               <div className='w-[1016px] rounded-[40px] h-[398px] ml-[88px]'>
//                 {/* Card content */}

//                 <div className='w-[1016px] rounded-[40px] h-[398px] ml-[88px]'>
//                 <div className='flex'>
//                   <img src="./Card13.svg" alt="Card Image" />
//                   <div className='ml-[70px] mt-[87px]'>
//                     <img src="./Z-Team.svg" alt="Z Team" />
//                     <div className='card mt-[28px] flex-shrink-0 flex items-center ml-[3px] w-[346px] h-[32px] text-[#414141] text-[20px] font-medium leading-[36px]'>
//                       Available 24x7 wherever you work
//                     </div>
//                     <div className='card w-[366px] h-[102px] text-[#414141] text-[16px] font-normal mt-[6px] leading-[26px]'>
//                       Your teammates are available where you work with web, Slack, and WhatsApp - just an @ away.
//                     </div>
//                     <div className='mt-[15px] ml-[3px]'>
//                       <svg xmlns="http://www.w3.org/2000/svg" width="37" height="9" viewBox="0 0 37 9" fill="none">
//                         <circle cx="4.5" cy="4.5" r="4.5" fill="url(#paint0_linear_3923_951)"/>
//                         <circle cx="18.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                         <circle cx="32.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                         <defs>
//                           <linearGradient id="paint0_linear_3923_951" x1="9" y1="4.5" x2="0" y2="4.5" gradientUnits="userSpaceOnUse">
//                             <stop stopColor="#2DD5C3"/>
//                             <stop offset="1" stopColor="#0076FF"/>
//                           </linearGradient>
//                         </defs>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               </div>
//             </div>
//           </div>

//           {/* Right Navigation Button */}
//           <div className='absolute right-[120px] top-[179px]'>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="41"
//               height="41"
//               viewBox="0 0 41 41"
//               fill="none"
//               className='nav-button cursor-pointer'
//               onClick={scrollRight}
//             >
//               <circle cx="20.5" cy="20.5" r="19.5" fill="white" stroke="#B2B2B2" strokeWidth="1.2"/>
//               <path d="M17.7139 14.3713L24.3996 21.0571M24.3996 21.0571L17.7139 27.7428M24.3996 21.0571H24.1911" stroke="#B2B2B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;






// import React, { useRef } from 'react';

// const Cards = () => {
//   const cardContainerRef = useRef(null);

//   const scrollLeft = () => {
//     if (cardContainerRef.current) {
//       // Scroll by one card's width plus margin
//       cardContainerRef.current.scrollBy({
//         left: - (cardContainerRef.current.offsetWidth / 3),
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (cardContainerRef.current) {
//       // Scroll by one card's width plus margin
//       cardContainerRef.current.scrollBy({
//         left: cardContainerRef.current.offsetWidth / 3,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className='overflow-hidden relative'>
//       <div className='card flex-shrink-0 w-[134px] h-[38px] text-[20px] mt-[64px] ml-[256px] text-[#858585]'>
//         Our Platform
//       </div>

//       <div className='relative mt-[16px]'>
//         <div className='flex items-center'>
//           {/* Left-Navigation Button */}
//           <div className='absolute left-[120px] top-[179px] transform -translate-y-1/2 z-10'>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="41"
//               height="41"
//               viewBox="0 0 41 41"
//               fill="none"
//               className='nav-button cursor-pointer'
//               onClick={scrollLeft}
//             >
//               <circle cx="20.5" cy="20.5" r="19.5" transform="rotate(-180 20.5 20.5)" fill="white" stroke="#B2B2B2" strokeWidth="1.2"/>
//               <path d="M23.2861 26.6287L16.6004 19.9429M16.6004 19.9429L23.2861 13.2572M16.6004 19.9429L16.8089 19.9429" stroke="#B2B2B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>

//           <div className='flex overflow-x-auto scroll-smooth' ref={cardContainerRef}>
//             <div className='flex gap-[700px] ml-[248px]' style={{ minWidth: '100%' }}>
//               {/* Card elements */}
//               {['Card11.svg', 'Card12.svg', 'Card13.svg'].map((src, index) => (
//                 <div key={index} className='w-[1016px] rounded-[40px] h-[398px] mr-[88px]'>
//                   <div className='flex'>
//                     <img src={`./${src}`} alt={`Card Image ${index + 1}`} />
//                     <div className='ml-[70px] mt-[87px]'>
//                       <img src="./Z-Team.svg" alt="Z Team" />
//                       <div className='card mt-[28px] flex-shrink-0 flex items-center ml-[3px] w-[346px] h-[32px] text-[#414141] text-[20px] font-medium leading-[36px]'>
//                         {index === 0 && 'Hire Personalized AI Teammates'}
//                         {index === 1 && 'Finetuned For Dozens Of Use Cases'}
//                         {index === 2 && 'Available 24x7 wherever you work'}
//                       </div>
//                       <div className='card w-[366px] h-[102px] text-[#414141] text-[16px] font-normal mt-[6px] leading-[26px]'>
//                         {index === 0 && 'Personalized and context aware AI assistants that provide answers ingrained in curated knowledge sources - with granular access controls'}
//                         {index === 1 && 'AI-powered Z-teammates are crafted for specific use cases & functions, while respecting resource & data permissions'}
//                         {index === 2 && 'Your teammates are available where you work with web, Slack, and WhatsApp - just an @ away.'}
//                       </div>
//                       <div className='mt-[15px] ml-[3px]'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="37" height="9" viewBox="0 0 37 9" fill="none">
//                           <circle cx="4.5" cy="4.5" r="4.5" fill="url(#paint0_linear_3923_951)"/>
//                           <circle cx="18.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                           <circle cx="32.5" cy="4.5" r="4.5" fill="#D9D9D9"/>
//                           <defs>
//                             <linearGradient id="paint0_linear_3923_951" x1="9" y1="4.5" x2="0" y2="4.5" gradientUnits="userSpaceOnUse">
//                               <stop stopColor="#2DD5C3"/>
//                               <stop offset="1" stopColor="#0076FF"/>
//                             </linearGradient>
//                           </defs>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right-Navigation Button */}
//           <div className='absolute right-[120px] top-[179px]  z-10'>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="41"
//               height="41"
//               viewBox="0 0 41 41"
//               fill="none"
//               className='nav-button cursor-pointer'
//               onClick={scrollRight}
//             >
//               <circle cx="20.5" cy="20.5" r="19.5" fill="white" stroke="#B2B2B2" strokeWidth="1.2"/>
//               <path d="M17.7139 14.3713L24.3996 21.0571M24.3996 21.0571L17.7139 27.7428M24.3996 21.0571H24.1911" stroke="#B2B2B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;



import React, { useRef } from 'react';


const Cards = () => {
  const cardContainerRef = useRef<HTMLDivElement>(null);


  const scrollLeft = () => {
    if (cardContainerRef.current) {
      // Scroll by one card's width plus margin
      cardContainerRef.current.scrollBy({
        left: - (cardContainerRef.current.offsetWidth / 1.2),
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      // Scroll by one card's width plus margin
      cardContainerRef.current.scrollBy({
        left: cardContainerRef.current.offsetWidth /1.2,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='overflow-hidden relative'>
      <div className='card flex-shrink-0 w-[134px] h-[38px] text-[20px] mt-[64px] ml-[256px] text-[#858585] '>
        Our Platform
      </div>

      <div className='relative '>
        <div className='flex items-center'>
          {/* Left-Navigation Button */}
          <div className='absolute left-[120px] top-[179px] transform -translate-y-1/2 z-10'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className='nav-button cursor-pointer'
              onClick={scrollLeft}
            >
              <circle cx="20.5" cy="20.5" r="19.5" transform="rotate(-180 20.5 20.5)" fill="white" stroke="#B2B2B2" strokeWidth="1.2"/>
              <path d="M23.2861 26.6287L16.6004 19.9429M16.6004 19.9429L23.2861 13.2572M16.6004 19.9429L16.8089 19.9429" stroke="#B2B2B2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className='flex overflow-x-auto scroll-smooth hide-scrollbar' ref={cardContainerRef}>
            <div className='flex gap-[750px] ml-[248px]' style={{ minWidth: '100%' }}>
              {/* Card elements */}
              {['Card11.svg', 'Card12.svg', 'Card13.svg', 'Card11.svg'].map((src, index) => (
                <div key={index} className='w-[1016px] rounded-[40px] h-[398px] mr-[88px] mt-[16px]'>
                  <div className='flex w-[508px] h-[398px]'>
                    <img className='w-[508px] h-[398px]' src={`./${src}`} alt={`Card Image ${index + 1}`} />
                    <div className='ml-[70px] mt-[87px]'>
                      <img src="./Z-Team.svg" alt="Z Team" />
                      <div className='card mt-[28px] flex-shrink-0 flex items-center ml-[3px] w-[346px] h-[32px] text-[#414141] text-[20px] font-medium leading-[36px]'>
                        {index === 0 && 'Hire Personalized AI Teammates'}
                        {index === 1 && 'Finetuned For Dozens Of Use Cases'}
                        {index === 2 && 'Available 24x7 wherever you work'}
                        {index === 3 && 'Hire Personalized AI Teammates'}
                      </div>
                      <div className='card w-[366px] h-[102px] text-[#414141] text-[16px] font-normal mt-[6px] leading-[26px]'>
                        {index === 0 && 'Personalized and context aware AI assistants that provide answers ingrained in curated knowledge sources - with granular access controls'}
                        {index === 1 && 'AI-powered Z-teammates are crafted for specific use cases & functions, while respecting resource & data permissions'}
                        {index === 2 && 'Your teammates are available where you work with web, Slack, and WhatsApp - just an @ away.'}
                        {index === 3 && 'Personalized and context aware AI assistants that provide answers ingrained in curated knowledge sources - with granular access controls'}
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
              ))}
            </div>
          </div>

          {/* Right-Navigation Button */}
          <div className='absolute right-[120px] top-[179px]  z-10'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className='nav-button cursor-pointer'
              onClick={scrollRight}
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
