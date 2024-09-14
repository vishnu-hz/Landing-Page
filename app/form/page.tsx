// // import React from 'react'

// // const Form = () => {
// //   return (
// //     <div className='flex w-full h-full items-center justify-center '>
// //     <div className='w-[465px] h-[679px] rounded-[20px] shadow-custom'>

// //         <div className='card flex font-light text-[#858585] text-[14px] leading-[150%] mt-[17px] ml-[29px]'>
// //             Book A 15 Minutes Demo Call
// //             <div className='ml-[222px]'>
// //                 <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
// //   <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73798 6.73798C7.05528 6.42067 7.56972 6.42067 7.88702 6.73798L19.262 18.113C19.5793 18.4303 19.5793 18.9447 19.262 19.262C18.9447 19.5793 18.4303 19.5793 18.113 19.262L6.73798 7.88702C6.42067 7.56972 6.42067 7.05528 6.73798 6.73798Z" fill="black"/>
// //   <path fill-rule="evenodd" clip-rule="evenodd" d="M19.262 6.73798C19.5793 7.05528 19.5793 7.56972 19.262 7.88702L7.88702 19.262C7.56972 19.5793 7.05528 19.5793 6.73798 19.262C6.42067 18.9447 6.42067 18.4303 6.73798 18.113L18.113 6.73798C18.4303 6.42067 18.9447 6.42067 19.262 6.73798Z" fill="black"/>
// // </svg>
// //             </div>
// //         </div>


// // <div  className='mt-[12px]'>
// // <svg xmlns="http://www.w3.org/2000/svg" width="466" height="2" viewBox="0 0 466 2" fill="none">
// //   <path d="M0 1H466" stroke="#E5E5E5" stroke-width="2" stroke-linejoin="round"/>
// // </svg>
// // </div>


// // <div className='card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]'>
// // Full Name
// // </div>

// // <div className='mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px]'>

// // </div>
// // <div className='ml-[47px]'>


// // <svg xmlns="http://www.w3.org/2000/svg" width="370" height="2" viewBox="0 0 370 2" fill="none">
// //   <path d="M0 1H370" stroke="#E5E5E5" stroke-width="2"/>
// // </svg>
// // </div>

// // <div className='card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]'>
// // Work Email Address*
// // </div>

// // <div className='mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px]'>

// // </div>
// // <div className='ml-[47px]'>


// // <svg xmlns="http://www.w3.org/2000/svg" width="370" height="2" viewBox="0 0 370 2" fill="none">
// //   <path d="M0 1H370" stroke="#E5E5E5" stroke-width="2"/>
// // </svg>
// // </div>

// // <div className='card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]'>
// // Company Name*
// // </div>

// // <div className='mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px]'>

// // </div>
// // <div className='ml-[47px]'>


// // <svg xmlns="http://www.w3.org/2000/svg" width="370" height="2" viewBox="0 0 370 2" fill="none">
// //   <path d="M0 1H370" stroke="#E5E5E5" stroke-width="2"/>
// // </svg>
// // </div>

// // <div className='card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]'>
// // Job Title*
// // </div>

// // <div className='mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px]'>

// // </div>
// // <div className='ml-[47px]'>


// // <svg xmlns="http://www.w3.org/2000/svg" width="370" height="2" viewBox="0 0 370 2" fill="none">
// //   <path d="M0 1H370" stroke="#E5E5E5" stroke-width="2"/>
// // </svg>
// // </div>

// // <div className='card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]'>
// // Message
// // </div>

// // <div className='mt-[2px] ml-[47px] w-[370px] h-[88px] bg-white rounded-t-[10px]'>

// // </div>
// // <div className='ml-[47px]'>


// // <svg xmlns="http://www.w3.org/2000/svg" width="370" height="2" viewBox="0 0 370 2" fill="none">
// //   <path d="M0 1H370" stroke="#E5E5E5" stroke-width="2"/>
// // </svg>
// // </div>



// // <div className='card w-[368px] h-[57px] text-[12px] font-normal leading-[140%] mt-[20px] ml-[49px]'>
// // By submitting this form, I authorize Zelo to contact me about product offerings, services, events, and other marketing materials. I may unsubscribe at any time by contacting hello@hellozelo.com*
// // </div>

// // <div className='mt-[9px] w-[372px] h-[45px] bg-black rounded-[40px] ml-[47px]'>
// //     <div className='card absolute flex w-[211.833px] h-[22.5px] justify-center items-center text-white text-[14px] font-normal  mt-[11.25px] ml-[80.08px]'>
       
// //     <div>
// //         Book A Demo
// //     </div>
// //     </div>
// // </div>


// //     </div>
// //     </div>
// //   )
// // }

// // export default Form





// import React, { useState } from 'react';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     companyName: '',
//     jobTitle: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="flex w-full h-screen items-center justify-center">
//       <form onSubmit={handleSubmit} className="w-[465px] h-[679px] rounded-[20px] shadow-custom ">
//         <div className="card flex font-light text-[#858585] text-[14px] leading-[150%] mt-[17px] ml-[29px]">
//           Book A 15 Minutes Demo Call
//           <div className="ml-[222px]">
//             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M6.73798 6.73798C7.05528 6.42067 7.56972 6.42067 7.88702 6.73798L19.262 18.113C19.5793 18.4303 19.5793 18.9447 19.262 19.262C18.9447 19.5793 18.4303 19.5793 18.113 19.262L6.73798 7.88702C6.42067 7.56972 6.42067 7.05528 6.73798 6.73798Z"
//                 fill="black"
//               />
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M19.262 6.73798C19.5793 7.05528 19.5793 7.56972 19.262 7.88702L7.88702 19.262C7.56972 19.5793 7.05528 19.5793 6.73798 19.262C6.42067 18.9447 6.42067 18.4303 6.73798 18.113L18.113 6.73798C18.4303 6.42067 18.9447 6.42067 19.262 6.73798Z"
//                 fill="black"
//               />
//             </svg>
//           </div>
//         </div>

//         <div className="mt-[16px]">
//           <svg xmlns="http://www.w3.org/2000/svg" width="466" height="2" viewBox="0 0 466 2" fill="none">
//             <path d="M0 1H466" stroke="#E5E5E5" strokeWidth="2" strokeLinejoin="round" />
//           </svg>
//         </div>

//         {/* Full Name */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="fullName">
//           Full Name
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />

//         {/* Work Email */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="email">
//           Work Email Address*
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         {/* Company Name */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="companyName">
//           Company Name*
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="text"
//           name="companyName"
//           value={formData.companyName}
//           onChange={handleChange}
//           required
//         />

//         {/* Job Title */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="jobTitle">
//           Job Title*
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="text"
//           name="jobTitle"
//           value={formData.jobTitle}
//           onChange={handleChange}
//           required
//         />

//         {/* Message */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="message">
//           Message
//         </label>
//         <textarea
//           className="mt-[2px] ml-[47px] w-[370px] h-[88px] bg-white rounded-t-[10px] px-[14px]"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />

//         {/* Disclaimer */}
//         <div className="card w-[368px] h-[57px] text-[12px] font-normal leading-[140%] mt-[20px] ml-[49px]">
//           By submitting this form, I authorize Zelo to contact me about product offerings, services, events, and other marketing materials. I may unsubscribe at any time by contacting hello@hellozelo.com*
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="mt-[9px] w-[372px] h-[45px] bg-black rounded-[40px] ml-[47px] text-white text-[14px] font-normal flex items-center justify-center"
//         >
//           Book A Demo
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;


// "use client"

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Import useRouter

// const Form = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     companyName: '',
//     jobTitle: '',
//     message: ''
//   });

//   const router = useRouter(); // Initialize useRouter

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted:', formData);

//     // Redirect to the thank-you page after submission
//     router.push('/thank-you'); // Redirect to thank you page
//   };

//   return (
//     <div className=" blurred flex w-[1524px] h-[924px] items-center justify-center">
//       <form onSubmit={handleSubmit} className="w-[465px] h-[679px] rounded-[20px] shadow-custom bg-[#F9F9F9]">
//         <div className="card flex font-light text-[#858585] text-[14px] leading-[150%] mt-[17px] ml-[29px]">
//           Book A 15 Minutes Demo Call
//           <div className="ml-[222px]">
//             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M6.73798 6.73798C7.05528 6.42067 7.56972 6.42067 7.88702 6.73798L19.262 18.113C19.5793 18.4303 19.5793 18.9447 19.262 19.262C18.9447 19.5793 18.4303 19.5793 18.113 19.262L6.73798 7.88702C6.42067 7.56972 6.42067 7.05528 6.73798 6.73798Z"
//                 fill="black"
//               />
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M19.262 6.73798C19.5793 7.05528 19.5793 7.56972 19.262 7.88702L7.88702 19.262C7.56972 19.5793 7.05528 19.5793 6.73798 19.262C6.42067 18.9447 6.42067 18.4303 6.73798 18.113L18.113 6.73798C18.4303 6.42067 18.9447 6.42067 19.262 6.73798Z"
//                 fill="black"
//               />
//             </svg>
//           </div>
//         </div>

//         <div className="mt-[16px]">
//           <svg xmlns="http://www.w3.org/2000/svg" width="466" height="2" viewBox="0 0 466 2" fill="none">
//             <path d="M0 1H466" stroke="#E5E5E5" strokeWidth="2" strokeLinejoin="round" />
//           </svg>
//         </div>

//         {/* Full Name */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="fullName">
//           Full Name
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />

//         {/* Work Email */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="email">
//           Work Email Address*
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         {/* Company Name */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="companyName">
//           Company Name*
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="text"
//           name="companyName"
//           value={formData.companyName}
//           onChange={handleChange}
//           required
//         />

//         {/* Job Title */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="jobTitle">
//           Job Title*
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="text"
//           name="jobTitle"
//           value={formData.jobTitle}
//           onChange={handleChange}
//           required
//         />

//         {/* Message */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="message">
//           Message
//         </label>
//         <textarea
//           className="mt-[2px] ml-[47px] w-[370px] h-[88px] bg-white rounded-t-[10px] px-[14px]"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />

//         {/* Disclaimer */}
//         <div className="card w-[368px] h-[57px] text-[12px] font-normal leading-[140%] mt-[20px] ml-[49px]">
//           By submitting this form, I authorize Zelo to contact me about product offerings, services, events, and other marketing materials. I may unsubscribe at any time by contacting hello@hellozelo.com*
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="mt-[9px] w-[372px] h-[45px] bg-black rounded-[40px] ml-[47px] text-white text-[14px] font-normal flex items-center justify-center"
//         >
//           Book A Demo
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;




// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Import useRouter

// const Form = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     companyName: '',
//     jobTitle: '',
//     message: ''
//   });

//   const router = useRouter(); // Initialize useRouter

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted:', formData);

//     // Redirect to the thank-you page after submission
//     router.push('/thank-you'); // Redirect to thank you page
//   };

//   const handleGoBack = () => {
//     router.back(); // Go back to the previous page
//   };

//   return (
//     <div className="blurred flex w-[1524px] h-[924px] items-center justify-center">
//       <form onSubmit={handleSubmit} className="w-[465px] h-[679px] rounded-[20px] shadow-custom bg-[#F9F9F9]">
//         <div className="card flex font-light text-[#858585] text-[14px] leading-[150%] mt-[17px] ml-[29px]">
//           Book A 15 Minutes Demo Call
//           <div className="ml-[222px]" onClick={handleGoBack} style={{ cursor: 'pointer' }}>
//             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M6.73798 6.73798C7.05528 6.42067 7.56972 6.42067 7.88702 6.73798L19.262 18.113C19.5793 18.4303 19.5793 18.9447 19.262 19.262C18.9447 19.5793 18.4303 19.5793 18.113 19.262L6.73798 7.88702C6.42067 7.56972 6.42067 7.05528 6.73798 6.73798Z"
//                 fill="black"
//               />
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M19.262 6.73798C19.5793 7.05528 19.5793 7.56972 19.262 7.88702L7.88702 19.262C7.56972 19.5793 7.05528 19.5793 6.73798 19.262C6.42067 18.9447 6.42067 18.4303 6.73798 18.113L18.113 6.73798C18.4303 6.42067 18.9447 6.42067 19.262 6.73798Z"
//                 fill="black"
//               />
//             </svg>
//           </div>
//         </div>

//         <div className="mt-[16px]">
//           <svg xmlns="http://www.w3.org/2000/svg" width="466" height="2" viewBox="0 0 466 2" fill="none">
//             <path d="M0 1H466" stroke="#E5E5E5" strokeWidth="2" strokeLinejoin="round" />
//           </svg>
//         </div>

//         {/* Full Name */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="fullName">
//           Full Name
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />

//         {/* Work Email */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="email">
//           Work Email Address*
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         {/* Company Name */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="companyName">
//           Company Name*
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="text"
//           name="companyName"
//           value={formData.companyName}
//           onChange={handleChange}
//           required
//         />

//         {/* Job Title */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="jobTitle">
//           Job Title*
//         </label>
//         <input
//           className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
//           type="text"
//           name="jobTitle"
//           value={formData.jobTitle}
//           onChange={handleChange}
//           required
//         />

//         {/* Message */}
//         <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="message">
//           Message
//         </label>
//         <textarea
//           className="mt-[2px] ml-[47px] w-[370px] h-[88px] bg-white rounded-t-[10px] px-[14px]"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//         />

//         {/* Disclaimer */}
//         <div className="card w-[368px] h-[57px] text-[12px] font-normal leading-[140%] mt-[20px] ml-[49px]">
//           By submitting this form, I authorize Zelo to contact me about product offerings, services, events, and other marketing materials. I may unsubscribe at any time by contacting hello@hellozelo.com*
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="mt-[9px] w-[372px] h-[45px] bg-black rounded-[40px] ml-[47px] text-white text-[14px] font-normal flex items-center justify-center"
//         >
//           Book A Demo
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;



"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    jobTitle: '',
    message: ''
  });

  const router = useRouter(); // Initialize useRouter

  // Explicitly type the event parameter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);

    // Redirect to the thank-you page after submission
    router.push('/thank-you'); // Redirect to thank you page
  };

  const handleGoBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="blurred flex w-[1524px] h-[924px] items-center justify-center">
      <form onSubmit={handleSubmit} className="w-[465px] h-[679px] rounded-[20px] shadow-custom bg-[#F9F9F9]">
        <div className="card flex font-light text-[#858585] text-[14px] leading-[150%] mt-[17px] ml-[29px]">
          Book A 15 Minutes Demo Call
          <div className="ml-[222px]" onClick={handleGoBack} style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.73798 6.73798C7.05528 6.42067 7.56972 6.42067 7.88702 6.73798L19.262 18.113C19.5793 18.4303 19.5793 18.9447 19.262 19.262C18.9447 19.5793 18.4303 19.5793 18.113 19.262L6.73798 7.88702C6.42067 7.56972 6.42067 7.05528 6.73798 6.73798Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.262 6.73798C19.5793 7.05528 19.5793 7.56972 19.262 7.88702L7.88702 19.262C7.56972 19.5793 7.05528 19.5793 6.73798 19.262C6.42067 18.9447 6.42067 18.4303 6.73798 18.113L18.113 6.73798C18.4303 6.42067 18.9447 6.42067 19.262 6.73798Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        <div className="mt-[16px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="466" height="2" viewBox="0 0 466 2" fill="none">
            <path d="M0 1H466" stroke="#E5E5E5" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Full Name */}
        <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="fullName">
          Full Name
        </label>
        <input
          className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        {/* Work Email */}
        <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="email">
          Work Email Address*
        </label>
        <input
          className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Company Name */}
        <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="companyName">
          Company Name*
        </label>
        <input
          className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />

        {/* Job Title */}
        <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="jobTitle">
          Job Title*
        </label>
        <input
          className="mt-[2px] ml-[47px] w-[370px] h-[40px] bg-white rounded-t-[10px] px-[14px]"
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />

        {/* Message */}
        <label className="card flex font-light text-[#858585] text-[12px] leading-[150%] mt-[21px] ml-[47px]" htmlFor="message">
          Message
        </label>
        <textarea
          className="mt-[2px] ml-[47px] w-[370px] h-[88px] bg-white rounded-t-[10px] px-[14px]"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        {/* Disclaimer */}
        <div className="card w-[368px] h-[57px] text-[12px] font-normal leading-[140%] mt-[20px] ml-[49px]">
          By submitting this form, I authorize Zelo to contact me about product offerings, services, events, and other marketing materials. I may unsubscribe at any time by contacting hello@hellozelo.com*
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-[9px] w-[372px] h-[45px] bg-black rounded-[40px] ml-[47px] text-white text-[14px] font-normal flex items-center justify-center"
        >
          Book A Demo
        </button>
      </form>
    </div>
  );
};

export default Form;





