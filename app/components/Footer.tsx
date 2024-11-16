// import React, { useState, useEffect } from 'react';
// import Form from '../form/page';

// const Footer = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isModalOpen]);

//   const handleButtonClick = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const closeForm = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <div className='flex'>
//         <div>
//           <div className='card w-[169px] h-[38px] text-center text-[#414141] text-[22px] font-bold leading-[38px] mt-[97px]  ml-[660px]'>
//             Get Started.
//           </div>
//           <div className='w-[634px] h-[59px] ml-[429px] text-center'>
//             <span className='gradient-text-1'>Say Hello,</span>
//             <span>&nbsp;</span>
//             <span className='gradient-text-2'>to Zelo!</span>
//           </div>
//           <div className='card mt-[25px] w-[476px] h-[84px] text-center text-[#414141] text-[22px] font-normal leading-[33px] ml-[518px]'>
//             Let us show you how our magical platform can help accelerate the work you do.
//           </div>
//           <div className='ml-[672px] mt-[21px]'>
//             <button
//               className='flex gap-[15px] bg-black border-[1px] border-[#868686] w-[169px] h-[56px] rounded-[54px] justify-center items-center'
//               onClick={handleButtonClick}
//             >
//               <div className='text-white text-[18px] font-medium flex w-[97px] h-[27px] justify-center font-outfit'>
//                 See A Demo
//               </div>
//               <div className='w-[5px] h-[10px]'>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
//                   <path
//                     d="M1 1L6.33333 6M6.33333 6L1 11M6.33333 6H6.16699"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
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

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 ">
//           <Form closeForm={closeForm} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Footer;



// import React, { useState, useEffect } from 'react';
// import Form from '../form/page';

// const Footer = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isModalOpen]);

//   const handleButtonClick = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const closeForm = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="flex flex-col items-center">
      
//       <div className="flex flex-col items-center mt-24">
//         <div className="card w-40 h-10 text-center text-[#414141] text-[22px] font-bold leading-[38px]">
//           Get Started.
//         </div>
        
//         <div className="w-4/5 text-center mt-2">
//           <span className="gradient-text-1">Say Hello,</span>
//           <span>&nbsp;</span>
//           <span className="gradient-text-2">to Zelo!</span>
//         </div>
        
//         <div className="card w-3/4 h-20 text-center text-[#414141] text-[22px] font-normal leading-[33px] mt-5">
//           Let us show you how our magical platform can help accelerate the work you do.
//         </div>
        
//         <div className="mt-5">
//           <button
//             className="flex gap-3 bg-black border border-[#868686] w-40 h-14 rounded-full justify-center items-center"
//             onClick={handleButtonClick}
//           >
//             <div className="text-white text-[18px] font-medium">
//               See A Demo
//             </div>
//             <div className="w-1.5 h-2.5">
//               <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
//                 <path
//                   d="M1 1L6.33333 6M6.33333 6L1 11M6.33333 6H6.16699"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </button>
//         </div>
//       </div>

//       <div className="w- bg-amber-400 flex justify-end ">
//         <img src='./Monster.svg' alt="Monster" className="lg:w-[372px] mx-auto" />
//       </div>

//       <div className="w-full h-12 bg-zelo-blue-gradient mt-5">
//         <div className="flex justify-center items-center h-full">
//           <div className="text-black text-[14px] font-normal">
//             All rights reserved ©Zelo 2024
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <Form closeForm={closeForm} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Footer;




// import React, { useState, useEffect } from 'react';
// import Form from '../form/page';

// const Footer = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isModalOpen]);

//   const handleButtonClick = () => {
//     setIsModalOpen(true);
//   };

//   const closeForm = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="relative mt-24 flex flex-col items-center justify-center">
//       {/* Main Content */}
//       <div className="text-center">
//         <div className="card w-full max-w-xs lg:max-w-sm mx-auto text-[#414141] text-[22px] font-bold leading-[38px]">
//           Get Started.
//         </div>

//         <div className="w-full max-w-2xl mx-auto mb-4 text-center">
//           <span className="gradient-text-1">Say Hello,</span>
//           <span>&nbsp;</span>
//           <span className="gradient-text-2">to Zelo!</span>
//         </div>

//         <div className="card w-full max-w-lg mx-auto mb-8 text-[#414141] text-[22px] font-normal leading-[33px]">
//           Let us show you how our magical platform can help accelerate the work you do.
//         </div>

//         <button
//           className="flex gap-3 bg-black border border-[#868686] w-[169px] h-[56px] rounded-full justify-center items-center mx-auto cursor-pointer"
//           onClick={handleButtonClick}
//         >
//           <div className="text-white text-[18px] font-medium font-outfit ">See A Demo</div>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="8"
//             height="12"
//             viewBox="0 0 8 12"
//             fill="none"
//           >
//             <path
//               d="M1 1L6.33333 6M6.33333 6L1 11M6.33333 6H6.16699"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Monster Image (Contained within the Footer) */}
//       <div className="w- flex justify-end bg-emerald-950">
//         <img src="./Monster.svg" alt="Monster" className="w-[150px] h-auto lg:w-[372px]" />
//       </div>

//       {/* Footer Bar */}
//       <div className="w-full py-4 px-8 -mt-12 bg-zelo-blue-gradient">
//         <div className="text-left text-black text-[14px] font-normal">
//           All rights reserved ©Zelo 2024
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <Form closeForm={closeForm} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Footer;




import React, { useState, useEffect } from 'react';
import Form from './Form';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeForm = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative mt-24 flex flex-col items-center justify-center">
      {/* Main Content and Monster Image Container */}
      <div className="relative w-full flex items-start justify-center">
        {/* Main Content */}
        <div className="text-center">
          <div className="card w-full max-w-xs lg:max-w-sm mx-auto text-[#414141] text-[22px] font-bold leading-[38px]">
            Get Started.
          </div>

          <div className="w-full max-w-2xl mx-auto mb-4 text-center">
            <span className="gradient-text-1">Say Hello,</span>
            <span>&nbsp;</span>
            <span className="gradient-text-2">to Zelo!</span>
          </div>

          <div className="card w-full max-w-lg mx-auto mb-8 text-[#414141] text-[22px] font-normal leading-[33px]">
            Let us show you how our magical platform can help accelerate the work you do.
          </div>

          <button
            className="flex gap-3 bg-black border border-[#868686] w-[169px] h-[56px] rounded-full justify-center items-center mx-auto cursor-pointer"
            onClick={handleButtonClick}
          >
            <div className="text-white text-[18px] font-medium font-outfit">See A Demo</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1 1L6.33333 6M6.33333 6L1 11M6.33333 6H6.16699"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Monster Image (Stick to the right side) */}
        <div className="absolute right-0 top-0 lg:top-[10px]">
          <img
            src="./Monster.svg"
            alt="Monster"
            className="w-[150px] lg:w-[372px] h-auto"
          />
        </div>
      </div>

      {/* Footer Bar */}
      <div className="w-full py-4 px-8 bg-zelo-blue-gradient mt-28">
        <div className="text-left text-black text-[14px] font-normal">
          All rights reserved ©Zelo 2024
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <Form closeForm={closeForm} />
        </div>
      )}
    </div>
  );
};

export default Footer;
