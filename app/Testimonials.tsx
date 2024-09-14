// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div className='mt-[98.45px]  overflow-hidden '>

//         <div className='flex justify-center gap-[25px]'>

//       <div className='w-[551px] h-[403px] rounded-[40px] bg-[#F9F9F9]'>
//       <div className=' flex  gap-[256px] mt-[23px] ml-[57px]'>
//       <img src='./KPMG.svg'></img>
//       <div className=''>
// <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
//   <circle cx="51" cy="51" r="51" fill="#D9D9D9"/>
// </svg>
//       </div>
//       </div>

//       <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px] '>“Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
//       <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
//       Steve Gates
//       <div className='card text-[16px] font-normal text-[#414141]'>
//       Managing Partner, ABCD
//       </div>
//       </div>
      
//       </div>
//       </div>

      

      
//       </div>
//       <div className='w-[68px] h-[12px] mt-[37px] ml-[722px]'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="68" height="12" viewBox="0 0 68 12" fill="none">
//   <circle cx="6" cy="6" r="6" fill="url(#paint0_linear_3762_7734)"/>
//   <circle cx="24.667" cy="6" r="6" fill="#D9D9D9"/>
//   <circle cx="43.333" cy="6" r="6" fill="#D9D9D9"/>
//   <circle cx="62" cy="6" r="6" fill="#D9D9D9"/>
//   <defs>
//     <linearGradient id="paint0_linear_3762_7734" x1="12" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
//       <stop stop-color="#2DD5C3"/>
//       <stop offset="1" stop-color="#0076FF"/>
//     </linearGradient>
//   </defs>
// </svg>
//       </div>
//       <div className='mt-[89px] ml-[204px] w-[1105px]'>
// <svg xmlns="http://www.w3.org/2000/svg" width="1105" height="2" viewBox="0 0 1105 2" fill="none">
//   <path d="M0 1L1105 1" stroke="#E5E5E5"/>
// </svg>
//       </div>
//     </div>
//   )
// }

// export default Testimonials





// import React, { useEffect, useRef } from 'react';

// const Testimonials = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       if (scrollRef.current) {
//         // Scroll the container to the next testimonial
//         scrollRef.current.scrollBy({
//           top: 0,
//           left: 576, // width of one card + gap (551px + 25px)
//           behavior: 'smooth',
//         });

//         // If it reaches the end, scroll back to the start
//         if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
//           scrollRef.current.scrollTo({
//             top: 0,
//             left: 0,
//             behavior: 'smooth',
//           });
//         }
//       }
//     }, 15000); // Scroll every 15 seconds

//     return () => clearInterval(scrollInterval); // Clean up the interval on unmount
//   }, []);

//   return (
//     <div className='mt-[98.45px] overflow-hidden'>
//       <div
//         ref={scrollRef}
//         className='flex justify-center gap-[25px] overflow-x-scroll scroll-smooth no-scrollbar'
//         style={{ scrollSnapType: 'x mandatory' }} // Ensures that scrolling snaps to each card
//       >
//         {/* Testimonial Card 1 */}
//         <div className='w-[551px] h-[403px] rounded-[40px] bg-[#F9F9F9] flex-shrink-0'>
//           <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
//             <img src='./KPMG.svg' alt="Company Logo" />
//             <div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
//                 <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
//               </svg>
//             </div>
//           </div>

//           <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
//             “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
//             <div className='card  text-[20px] text-[#414141] mt-[50px]'>
//               Steve Gates
//               <div className='card text-[16px] font-normal text-[#414141]'>
//                 Managing Partner, ABCD
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonial Card 2 */}
//         <div className='w-[551px] h-[403px] rounded-[40px] bg-[#F9F9F9] flex-shrink-0'>
//           <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
//             <img src='./KPMG.svg' alt="Company Logo" />
//             <div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
//                 <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
//               </svg>
//             </div>
//           </div>

//           <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
//             “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
//             <div className='card  text-[20px] text-[#414141] mt-[50px]'>
//               Steve Gates
//               <div className='card text-[16px] font-normal text-[#414141]'>
//                 Managing Partner, ABCD
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonial Card 3 */}
//         <div className='w-[551px] h-[403px] rounded-[40px] bg-[#F9F9F9] flex-shrink-0'>
//           <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
//             <img src='./KPMG.svg' alt="Company Logo" />
//             <div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
//                 <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
//               </svg>
//             </div>
//           </div>

//           <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
//             “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
//             <div className='card  text-[20px] text-[#414141] mt-[50px]'>
//               Steve Gates
//               <div className='card text-[16px] font-normal text-[#414141]'>
//                 Managing Partner, ABCD
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonial Card 4 */}
//         <div className='w-[551px] h-[403px] rounded-[40px] bg-[#F9F9F9] flex-shrink-0'>
//           <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
//             <img src='./KPMG.svg' alt="Company Logo" />
//             <div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
//                 <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
//               </svg>
//             </div>
//           </div>

//           <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
//             “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
//             <div className='card  text-[20px] text-[#414141] mt-[50px]'>
//               Steve Gates
//               <div className='card text-[16px] font-normal text-[#414141]'>
//                 Managing Partner, ABCD
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='w-[68px] h-[12px] mt-[37px] ml-[722px]'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="68" height="12" viewBox="0 0 68 12" fill="none">
//           <circle cx="6" cy="6" r="6" fill="url(#paint0_linear_3762_7734)" />
//           <circle cx="24.667" cy="6" r="6" fill="#D9D9D9" />
//           <circle cx="43.333" cy="6" r="6" fill="#D9D9D9" />
//           <circle cx="62" cy="6" r="6" fill="#D9D9D9" />
//           <defs>
//             <linearGradient id="paint0_linear_3762_7734" x1="12" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#2DD5C3" />
//               <stop offset="1" stopColor="#0076FF" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       <div className='mt-[89px] ml-[204px] w-[1105px]'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="1105" height="2" viewBox="0 0 1105 2" fill="none">
//           <path d="M0 1L1105 1" stroke="#E5E5E5" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;





// import React, { useEffect, useRef, useState } from 'react';

// const Testimonials = () => {
//   const scrollRef = useRef(null); // Reference to the scrollable container
//   const [currentCircle, setCurrentCircle] = useState(0); // Current active circle indicator
//   const totalCircles = 4; // Total number of circles

//   // Handle scrolling, either 'left' or 'right'
//   const handleScroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = 576; // Total width of one card plus gap (551px + 25px)
      
//       if (direction === 'right') {
//         scrollRef.current.scrollBy({
//           top: 0,
//           left: scrollAmount,
//           behavior: 'smooth',
//         });
//       }

//       if (direction === 'left') {
//         scrollRef.current.scrollBy({
//           top: 0,
//           left: -scrollAmount,
//           behavior: 'smooth',
//         });
//       }

//       // Update current circle indicator
//       setCurrentCircle((prev) => (direction === 'right' ? (prev + 1) % totalCircles : (prev - 1 + totalCircles) % totalCircles));
//     }
//   };

//   // Automatically scroll every 15 seconds
//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       handleScroll('right');
//     }, 15000); // Scroll every 15 seconds

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className='relative mt-[98.45px] overflow-hidden'>
      
//       {/* Left Button */}
//       <div className='button button-left' onClick={() => handleScroll('left')}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
//           <circle cx="20.5" cy="20.5" r="19.5" transform="rotate(-180 20.5 20.5)" fill="white" stroke="#1EA6ED" strokeWidth="1.2" />
//           <path d="M23.2861 26.6284L16.6004 19.9427M16.6004 19.9427L23.2861 13.257M16.6004 19.9427L16.8089 19.9427" stroke="#1EA6ED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </div>

//       {/* Right Button */}
//       <div className='button button-right ' onClick={() => handleScroll('right')}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
//           <circle cx="20.5" cy="20.5" r="19.5" fill="white" stroke="#1EA6ED" strokeWidth="1.2" />
//           <path d="M17.7139 14.3716L24.3996 21.0573M24.3996 21.0573L17.7139 27.743M24.3996 21.0573H24.1911" stroke="#1EA6ED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </div>

//       {/* Testimonials Container */}
//       <div
//         ref={scrollRef}
//         className='flex justify-center gap-[25px] overflow-x-scroll scroll-smooth no-scrollbar'
//         style={{ scrollSnapType: 'x mandatory' }}
//       >
//         {/* Testimonial Card 1 */}
//         <div className='w-[551px] h-[403px] rounded-[40px] bg-[#F9F9F9] flex-shrink-0'>
//           <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
//             <img src='./KPMG.svg' alt='KPMG' />
//             <div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
//                 <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
//               </svg>
//             </div>
//           </div>

//           <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
//             “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
//             <div className='card text-[20px] text-[#414141] mt-[50px]'>
//               Steve Gates
//               <div className='card text-[16px] font-normal text-[#414141]'>
//                 Managing Partner, ABCD
//               </div>
//             </div>
//           </div>
//         </div>



//         <div className='w-[551px] h-[403px] rounded-[40px] bg-[#F9F9F9] flex-shrink-0'>
//           <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
//             <img src='./KPMG.svg' alt='KPMG' />
//             <div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
//                 <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
//               </svg>
//             </div>
//           </div>

//           <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
//             “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
//             <div className='card text-[20px] text-[#414141] mt-[50px]'>
//               Steve Gates
//               <div className='card text-[16px] font-normal text-[#414141]'>
//                 Managing Partner, ABCD
//               </div>
//             </div>
//           </div>
//         </div>


//         <div className='w-[551px] h-[403px] rounded-[40px] bg-[#F9F9F9] flex-shrink-0'>
//           <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
//             <img src='./KPMG.svg' alt='KPMG' />
//             <div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
//                 <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
//               </svg>
//             </div>
//           </div>

//           <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
//             “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
//             <div className='card  text-[20px] text-[#414141] mt-[50px]'>
//               Steve Gates
//               <div className='card text-[16px] font-normal text-[#414141]'>
//                 Managing Partner, ABCD
//               </div>
//             </div>
//           </div>
//         </div>


//         <div className='w-[551px] h-[403px] rounded-[40px] bg-[#F9F9F9] flex-shrink-0'>
//           <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
//             <img src='./KPMG.svg' alt='KPMG' />
//             <div>
//               <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
//                 <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
//               </svg>
//             </div>
//           </div>

//           <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
//             “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
//             <div className='card  text-[20px] text-[#414141] mt-[50px]'>
//               Steve Gates
//               <div className='card text-[16px] font-normal text-[#414141]'>
//                 Managing Partner, ABCD
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Add additional Testimonial Cards below with similar structure */}

//       </div>

//       {/* Circles Indicator */}
//       <div className='w-[68px] h-[12px] mt-[37px] ml-[722px]'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="68" height="12" viewBox="0 0 68 12" fill="none">
//           <circle cx="6" cy="6" r="6" fill={currentCircle === 0 ? 'url(#paint0_linear_3762_7734)' : '#D9D9D9'} />
//           <circle cx="24.667" cy="6" r="6" fill={currentCircle === 1 ? 'url(#paint0_linear_3762_7734)' : '#D9D9D9'} />
//           <circle cx="43.333" cy="6" r="6" fill={currentCircle === 2 ? 'url(#paint0_linear_3762_7734)' : '#D9D9D9'} />
//           <circle cx="62" cy="6" r="6" fill={currentCircle === 3 ? 'url(#paint0_linear_3762_7734)' : '#D9D9D9'} />
//           <defs>
//             <linearGradient id="paint0_linear_3762_7734" x1="12" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#2DD5C3" />
//               <stop offset="1" stopColor="#0076FF" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       <div className='mt-[89px] ml-[204px] w-[1105px]'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="1105" height="2" viewBox="0 0 1105 2" fill="none">
//           <path d="M0 1L1105 1" stroke="#E5E5E5" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;




import React, { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [currentCircle, setCurrentCircle] = useState(0);
  const totalCircles = 4; // Total number of cards (adjust this based on your actual number of testimonial cards)

  // Handle scrolling direction: 'left' or 'right'
  // const handleScroll = (direction) => {
  //   if (scrollRef.current) {
  //     const cardWidth = 576; // Card width + gap

  //     // Right Scroll
  //     if (direction === 'right') {
  //       if (currentCircle === totalCircles - 1) {
  //         // If it's the last card, scroll back to the first
  //         scrollRef.current.scrollTo({
  //           top: 0,
  //           left: 0,
  //           behavior: 'smooth',
  //         });
  //         setCurrentCircle(0);
  //       } else {
  //         // Scroll to the next card
  //         scrollRef.current.scrollBy({
  //           top: 0,
  //           left: cardWidth,
  //           behavior: 'smooth',
  //         });
  //         setCurrentCircle((prev) => prev + 1);
  //       }
  //     }

  //     // Left Scroll
  //     if (direction === 'left') {
  //       if (currentCircle === 0) {
  //         // If it's the first card, scroll to the last
  //         scrollRef.current.scrollTo({
  //           top: 0,
  //           left: cardWidth * (totalCircles - 1),
  //           behavior: 'smooth',
  //         });
  //         setCurrentCircle(totalCircles - 1);
  //       } else {
  //         // Scroll to the previous card
  //         scrollRef.current.scrollBy({
  //           top: 0,
  //           left: -cardWidth,
  //           behavior: 'smooth',
  //         });
  //         setCurrentCircle((prev) => prev - 1);
  //       }
  //     }
  //   }
  // };



const handleScroll = (direction: 'left' | 'right') => {
  if (scrollRef.current) {
    const cardWidth = 576; // Card width + gap

    // Right Scroll
    if (direction === 'right') {
      if (currentCircle === totalCircles - 1) {
        // If it's the last card, scroll back to the first
        scrollRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
        setCurrentCircle(0);
      } else {
        // Scroll to the next card
        scrollRef.current.scrollBy({
          top: 0,
          left: cardWidth,
          behavior: 'smooth',
        });
        setCurrentCircle((prev) => prev + 1);
      }
    }

      // Left Scroll
      if (direction === 'left') {
        if (currentCircle === 0) {
          // If it's the first card, scroll to the last
          scrollRef.current.scrollTo({
            top: 0,
            left: cardWidth * (totalCircles - 1),
            behavior: 'smooth',
          });
          setCurrentCircle(totalCircles - 1);
        } else {
          // Scroll to the previous card
          scrollRef.current.scrollBy({
            top: 0,
            left: -cardWidth,
            behavior: 'smooth',
          });
          setCurrentCircle((prev) => prev - 1);
        }
      }
    }
  };



      

  // Auto-scroll every 15 seconds
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      handleScroll('right');
    }, 15000); // 15 seconds interval
    return () => clearInterval(scrollInterval);
  }, [currentCircle]);

  return (
    <div className='relative mt-[98.45px] overflow-hidden'>
      
      {/* Left Button */}
      <div
        className='button button-left'
        onClick={() => handleScroll('left')}
        style={{ top: '50%', transform: 'translateY(-50%)', left: '87px', position: 'absolute', cursor: 'pointer' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
          <circle cx="20.5" cy="20.5" r="19.5" transform="rotate(-180 20.5 20.5)" fill="white" stroke="#1EA6ED" strokeWidth="1.2" />
          <path d="M23.2861 26.6284L16.6004 19.9427M16.6004 19.9427L23.2861 13.257M16.6004 19.9427L16.8089 19.9427" stroke="#1EA6ED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Right Button */}
      <div
        className='button button-right'
        onClick={() => handleScroll('right')}
        style={{ top: '50%', transform: 'translateY(-50%)', right: '87px', position: 'absolute', cursor: 'pointer' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
          <circle cx="20.5" cy="20.5" r="19.5" fill="white" stroke="#1EA6ED" strokeWidth="1.2" />
          <path d="M17.7139 14.3716L24.3996 21.0573M24.3996 21.0573L17.7139 27.743M24.3996 21.0573H24.1911" stroke="#1EA6ED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Testimonials Container */}
      <div
        ref={scrollRef}
        className='flex justify-center gap-[25px] overflow-x-scroll scroll-smooth no-scrollbar'
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {/* Testimonial Card 1 */}
        <div className='testimonial-card'>
          <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
            <img src='./KPMG.svg' alt='KPMG' />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              </svg>
            </div>
          </div>

          <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
            “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
            <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
              Steve Gates
              <div className='card text-[16px] font-normal text-[#414141]'>
                Managing Partner, ABCD
              </div>
            </div>
          </div>
        </div>


<div className='testimonial-card'>
          <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
            <img src='./KPMG.svg' alt='KPMG' />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              </svg>
            </div>
          </div>

          <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
            “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
            <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
              Steve Gates
              <div className='card text-[16px] font-normal text-[#414141]'>
                Managing Partner, ABCD
              </div>
            </div>
          </div>
        </div>


        <div className='testimonial-card'>
          <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
            <img src='./KPMG.svg' alt='KPMG' />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              </svg>
            </div>
          </div>

          <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
            “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
            <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
              Steve Gates
              <div className='card text-[16px] font-normal text-[#414141]'>
                Managing Partner, ABCD
              </div>
            </div>
          </div>
        </div>


        <div className='testimonial-card'>
          <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
            <img src='./KPMG.svg' alt='KPMG' />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              </svg>
            </div>
          </div>

          <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
            “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
            <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
              Steve Gates
              <div className='card text-[16px] font-normal text-[#414141]'>
                Managing Partner, ABCD
              </div>
            </div>
          </div>
        </div>


        <div className='testimonial-card'>
          <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
            <img src='./KPMG.svg' alt='KPMG' />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              </svg>
            </div>
          </div>

          <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
            “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
            <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
              Steve Gates
              <div className='card text-[16px] font-normal text-[#414141]'>
                Managing Partner, ABCD
              </div>
            </div>
          </div>
        </div>



        <div className='testimonial-card'>
          <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
            <img src='./KPMG.svg' alt='KPMG' />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              </svg>
            </div>
          </div>

          <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
            “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
            <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
              Steve Gates
              <div className='card text-[16px] font-normal text-[#414141]'>
                Managing Partner, ABCD
              </div>
            </div>
          </div>
        </div>

<div className='testimonial-card'>
          <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
            <img src='./KPMG.svg' alt='KPMG' />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              </svg>
            </div>
          </div>

          <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
            “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
            <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
              Steve Gates
              <div className='card text-[16px] font-normal text-[#414141]'>
                Managing Partner, ABCD
              </div>
            </div>
          </div>
        </div>

        <div className='testimonial-card'>
          <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
            <img src='./KPMG.svg' alt='KPMG' />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              </svg>
            </div>
          </div>

          <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
            “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
            <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
              Steve Gates
              <div className='card text-[16px] font-normal text-[#414141]'>
                Managing Partner, ABCD
              </div>
            </div>
          </div>
        </div>

        <div className='testimonial-card'>
          <div className='flex gap-[256px] mt-[23px] ml-[57px]'>
            <img src='./KPMG.svg' alt='KPMG' />
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                <circle cx="51" cy="51" r="51" fill="#D9D9D9" />
              </svg>
            </div>
          </div>

          <div className='card flex-shrink-0 w-[391px] h-[216px] ml-[57px] text-[24px] text-[#414141] font-medium leading-[38px]'>
            “Zelo has added a lot of value to our team’s productivity. The AI model being used has shown great results..”
            <div className='card absolute text-[20px] text-[#414141] mt-[50px]'>
              Steve Gates
              <div className='card text-[16px] font-normal text-[#414141]'>
                Managing Partner, ABCD
              </div>
            </div>
          </div>
        </div>


        {/* Add additional Testimonial Cards below with similar structure */}
        {/* Testimonial Card 2, Testimonial Card 3, etc. */}

      </div>

      {/* Circles Indicator */}
      <div className='w-[68px] h-[12px] mt-[37px] ml-[722px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="12" viewBox="0 0 68 12" fill="none">
          <circle cx="6" cy="6" r="6" fill={currentCircle === 0 ? 'url(#paint0_linear_3762_7734)' : '#D9D9D9'} />
          <circle cx="24.667" cy="6" r="6" fill={currentCircle === 1 ? 'url(#paint0_linear_3762_7734)' : '#D9D9D9'} />
          <circle cx="43.333" cy="6" r="6" fill={currentCircle === 2 ? 'url(#paint0_linear_3762_7734)' : '#D9D9D9'} />
          <circle cx="62" cy="6" r="6" fill={currentCircle === 3 ? 'url(#paint0_linear_3762_7734)' : '#D9D9D9'} />
          <defs>
            <linearGradient id="paint0_linear_3762_7734" x1="12" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2DD5C3" />
              <stop offset="1" stopColor="#0076FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className='mt-[89px] ml-[204px] w-[1105px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1105" height="2" viewBox="0 0 1105 2" fill="none">
          <path d="M0 1L1105 1" stroke="#E5E5E5" />
        </svg>
      </div>
    </div>
  );
};

export default Testimonials;
