// import React from "react";
// import { motion } from "framer-motion";
// import Page1 from "./page1";
// import TypingAnimation from "./TypingAnimation";
// function Hero() {
//   // Animation for the left ellipse: moves down and then up
//   const ellipseAnimation1 = {
//     y: ["-100vh", "0vh", "-100vh"], // Moves from above to below the viewport and back
//     transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//   };

//   // Animation for the right ellipse: moves up and then down
//   const ellipseAnimation2 = {
//     y: ["100vh", "0vh", "100vh"], // Moves from below to above the viewport and back
//     transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//   };

//   return (
//     <section className="relative flex flex-col items-center justify-center text-center p-8 w-full h-[calc(100vh)] overflow-hidden">
//       {/* Background Ellipses */}
//       <motion.div
//         className="absolute"
//         style={{
//           height: "741.042px",
//           width: "585.024px",
//           transform: "rotate(90deg)",
//           flexShrink: 0,
//           borderRadius: "741.042px",
//           background: "linear-gradient(180deg, rgba(59, 214, 219, 0.00) -13.27%, rgba(16, 145, 245, 0.72) 67.06%, #0076FF 98.01%)",
//           filter: "blur(125px)",
//           top: "50%",
//           left: "-15%",
//           opacity: 0.5,
//           zIndex: -1,
//         }}
//         animate={ellipseAnimation1}
//       ></motion.div>
//       <motion.div
//         className="absolute"
//         style={{
//           height: "741.042px",
//           width: "585.024px",
//           transform: "rotate(-90deg)",
//           flexShrink: 0,
//           borderRadius: "751.286px",
//           background: "linear-gradient(180deg, rgba(59, 214, 219, 0.00) -13.27%, rgba(16, 145, 245, 0.72) 67.06%, #0076FF 98.01%)",
//           filter: "blur(125px)",
//           bottom: "50%",
//           right: "-15%",
//           opacity: 0.5,
//           zIndex: -1,
//         }}
//         animate={ellipseAnimation2}
//       ></motion.div>
// <Page1/>
// <TypingAnimation/>
//     </section>
//   );
// }

// export default Hero;




// import React from "react";
// import "./App.css"; // For custom animations if needed

// const BlobBackground = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Blob 1: Top Left */}
//       <div className="animate-rotate-blob1 absolute w-[865px] h-[865px] rotate-[65deg] -left-[30rem] top-[9rem] bg-gradient-to-t from-[#0076FF] via-[#1091F5B8] to-white rounded-full mix-blend-multiply filter blur-3xl opacity-90"></div>
      
//       {/* Blob 2: Bottom Right */}
//       <div className="animate-rotate-blob2 absolute w-[973px] h-[870px] -rotate-[30deg] -right-[24rem] bottom-[30rem] bg-gradient-to-r from-[#0076FF] via-[#1091F5B8] to-white rounded-full mix-blend-multiply filter blur-3xl opacity-90"></div>
//     </div>
//   );
// };

// export default BlobBackground;




// import React from "react";
// import "./App.css"; // Custom animations
// import Page1 from "./page1";
// import TypingAnimation from "./TypingAnimation";
// const BlobBackground = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Blob 1: Top Left */}
//       <div className="absolute w-[865px] h-[865px] rotate-[65deg] -left-[30rem] bottom-[9rem] bg-gradient-to-t from-[#0076FF] via-[#1091F5B8] to-[#fff] rounded-full mix-blend-multiply filter blur-3xl opacity-90"></div>
      
//       {/* Blob 2: Bottom Right */}
//       <div className="absolute w-[973px] h-[870px] -rotate-[30deg] -right-[24rem] top-[30rem] bg-gradient-to-r from-[#0076FF] via-[#1091F5B8] to-[#fff] rounded-full mix-blend-multiply filter blur-3xl opacity-90"></div>

// <Page1/>
// {/* <TypingAnimation/> */}

//     </div>
//   );
// };

// export default BlobBackground;


// import React from "react";
// import "./App.css"; // Custom animations
// import Page1 from "./page1";
// import TypingAnimation from "./TypingAnimation";

// const BlobBackground = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Blob 1: Top Left */}
//       <div className="absolute w-[865px] h-[865px] rotate-[65deg] -left-[30rem] bottom-[9rem] bg-gradient-to-t from-[#0076FF] via-[#1091F5B8] to-[#fff] rounded-full mix-blend-multiply filter blur-3xl opacity-90 -z-10"></div>
      
//       {/* Blob 2: Bottom Right */}
//       <div className="absolute w-[973px] h-[870px] -rotate-[30deg] -right-[24rem] top-[30rem] bg-gradient-to-r from-[#0076FF] via-[#1091F5B8] to-[#fff] rounded-full mix-blend-multiply filter blur-3xl opacity-90 -z-10"></div>

//       {/* Other components */}
//       <Page1 />
//       {/* <TypingAnimation /> */}
//     </div>
//   );
// };

// export default BlobBackground;

import React from "react";
import "./App.css"; // Custom animations
import Page1 from "./page1";
import TypingAnimation from "./TypingAnimation";

const BlobBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Blob 1: Top Left */}
      <div className="absolute w-[865px] h-[865px] rotate-[65deg] -left-[30rem] bottom-[9rem] bg-gradient-to-t from-[#0076FF] via-[#1091F5B8] to-[#fff] rounded-full mix-blend-multiply filter blur-3xl opacity-90 -z-10"></div>
      
      {/* Blob 2: Bottom Right */}
      <div className="absolute w-[973px] h-[870px] -rotate-[30deg] -right-[24rem] top-[30rem] bg-gradient-to-r from-[#0076FF] via-[#1091F5B8] to-[#fff] rounded-full mix-blend-multiply filter blur-3xl opacity-90 -z-10"></div>

      {/* Main Page */}
      <Page1 />
    </div>
  );
};

export default BlobBackground;


