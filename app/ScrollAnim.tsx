import React, { useEffect, useState } from "react";

const ScrollingText = () => {
  const text = "Zelo is an AI-powered workspace designed to get what you need out of your enterprise knowledge. With personalized AI & easy ramp up, you can act on, and share the information your team needs most in one single platform.";

  const words = text.split(" "); // Split paragraph into words
  const [scrollPosition, setScrollPosition] = useState(1);

  // Handle scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-container  mt-[127.32px] ml-[256px]">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="27" viewBox="0 0 81 27" fill="none">
  <g clip-path="url(#clip0_3319_1579)">
    <path d="M37.4738 21.3675H31.3808L39.7751 10.1763V8.31616H27.1616V8.46551C27.1616 10.0473 28.4481 11.3372 30.0333 11.3372H34.9959L26.6016 22.5624V24.3851H40.3488V24.2358C40.3488 22.654 39.0623 21.3641 37.4771 21.3641L37.4738 21.3675Z" fill="black"/>
    <path d="M52.8301 9.00537C51.6929 8.32989 50.3657 7.98706 48.8858 7.98706C47.4058 7.98706 45.9225 8.35705 44.6768 9.08684C43.431 9.81663 42.4297 10.8214 41.7033 12.0773C40.9735 13.3332 40.6035 14.7656 40.6035 16.3338C40.6035 17.902 40.9803 19.3684 41.7203 20.6243C42.4602 21.8802 43.4853 22.8884 44.7616 23.6148C46.0413 24.3446 47.4941 24.7145 49.0861 24.7145C50.3386 24.7145 51.5368 24.4769 52.6468 24.0051C53.7567 23.5333 54.7105 22.8375 55.4743 21.9379L55.5591 21.8361L55.0534 21.3236C54.2421 20.4987 52.9964 20.312 52.0222 20.8721C51.8423 20.9739 51.6556 21.0656 51.4655 21.1471C50.7459 21.4492 49.9448 21.6019 49.0827 21.6019C48.0508 21.6019 47.1241 21.3779 46.3332 20.94C45.5457 20.5021 44.928 19.8776 44.5003 19.0731C44.2627 18.6284 44.0895 18.1396 43.9843 17.6135H56.2753L56.2991 17.4947C56.367 17.1621 56.4111 16.86 56.4349 16.5986C56.4586 16.3406 56.4688 16.0962 56.4688 15.8722C56.4688 14.3719 56.143 13.0073 55.5048 11.8193C54.8633 10.6279 53.9638 9.68085 52.8267 9.00537H52.8301ZM46.2042 11.6835C46.9544 11.2558 47.8335 11.0386 48.8213 11.0386C49.8091 11.0386 50.5762 11.2389 51.2347 11.6326C51.8932 12.0264 52.4092 12.5864 52.7724 13.2993C52.9964 13.7439 53.1559 14.2565 53.2408 14.8267H43.9945C44.0963 14.3379 44.2559 13.8899 44.4697 13.4826C44.8736 12.7154 45.4575 12.1112 46.2042 11.6835Z" fill="black"/>
    <path d="M58.8105 0H58.6611V24.3852H61.9469V3.1364C61.9469 1.40867 60.5382 0 58.8105 0Z" fill="black"/>
    <path d="M79.883 12.0773C79.143 10.8214 78.1247 9.81323 76.8586 9.08684C75.5891 8.35705 74.1634 7.98706 72.619 7.98706C71.0746 7.98706 69.6184 8.36384 68.3624 9.10381C67.1065 9.84378 66.095 10.8485 65.355 12.0943C64.6151 13.34 64.2383 14.7554 64.2383 16.3033C64.2383 17.8511 64.6151 19.3107 65.355 20.5768C66.095 21.8463 67.1099 22.8612 68.3624 23.6012C69.6184 24.3412 71.0508 24.7179 72.619 24.7179C74.1872 24.7179 75.5925 24.3412 76.862 23.6012C78.1281 22.8612 79.1464 21.8429 79.8864 20.5768C80.6263 19.3073 81.0031 17.8715 81.0031 16.3033C81.0031 14.7351 80.6263 13.3366 79.8864 12.0773H79.883ZM77.6155 16.3033C77.6155 17.3114 77.3983 18.2211 76.9706 19.0052C76.5429 19.7859 75.9455 20.4105 75.1987 20.8585C74.452 21.3066 73.583 21.534 72.619 21.534C71.655 21.534 70.786 21.3066 70.0393 20.8585C69.2891 20.4105 68.6951 19.7859 68.2674 19.0052C67.8397 18.2245 67.6225 17.3148 67.6225 16.3033C67.6225 15.2918 67.8397 14.4228 68.2674 13.6523C68.6951 12.8818 69.2925 12.2708 70.0393 11.8329C70.7894 11.395 71.655 11.171 72.619 11.171C73.583 11.171 74.4452 11.3916 75.1818 11.8295C75.9183 12.2674 76.5157 12.8818 76.9536 13.6523C77.3915 14.4228 77.6155 15.3155 77.6155 16.2999V16.3033Z" fill="black"/>
    <path d="M22.6067 14.1273C22.5422 13.6793 22.3454 13.2889 22.1621 12.9698C22.1179 12.8918 22.0365 12.8171 21.9346 12.7594C21.7683 12.661 21.585 12.6643 21.3576 12.773L16.5172 15.0642L16.4188 15.1083L16.3679 14.7485C16.3271 14.4668 16.2864 14.1884 16.2491 13.9135C16.1642 13.2618 15.6449 9.23263 15.6449 9.23263C15.4887 8.03781 15.336 6.84639 15.1832 5.65157C15.0509 4.61289 14.243 3.77448 13.2179 3.60815C12.8615 3.55045 12.4847 3.57081 11.9789 3.67943C11.8975 3.69641 11.8092 3.74732 11.7244 3.822C11.5309 3.99511 11.5343 4.22253 11.5546 4.38207C11.7855 6.16072 12.0129 7.93938 12.2403 9.71124L12.2505 9.7961L11.9111 9.7384C11.6429 9.69427 11.3781 9.65014 11.1168 9.59923C8.44879 9.10025 5.78421 8.59789 3.11962 8.09212C2.72248 8.01745 2.20314 7.96653 1.79582 8.09212C0.685856 8.42477 0.102024 9.22245 0.00019234 10.5327C-0.0133852 10.7329 0.0918405 10.9128 0.288714 11.0181C0.380362 11.0656 0.485588 11.0894 0.584025 11.1097C1.97572 11.3745 5.79439 12.0941 5.79439 12.0941L5.92338 12.1212L5.88943 12.1756C5.86567 12.2129 5.84191 12.2502 5.82155 12.2876L5.52284 12.8476C5.35312 13.1667 5.18001 13.4858 5.0069 13.8015L1.36813 20.4612C0.838603 21.432 0.998139 22.5895 1.76527 23.3363C2.01645 23.5807 2.31176 23.7402 2.62404 23.9099C3.0144 24.1238 3.33007 24.0287 3.54392 23.6384L6.10667 18.9507L6.16098 18.8523L10.8792 23.8454C11.48 24.4836 12.0808 25.1217 12.685 25.7565C13.167 26.2656 13.7915 26.544 14.4467 26.544C14.7691 26.544 15.0882 26.4761 15.4005 26.3403C15.8282 26.1536 16.1608 25.8379 16.4561 25.5222C16.5138 25.4611 16.558 25.3729 16.5851 25.2745C16.6428 25.0674 16.5851 24.8773 16.4052 24.6872C15.4174 23.6452 12.7155 20.7769 12.7155 20.7769L12.6476 20.6988L12.8106 20.6276C12.9396 20.5732 13.0651 20.5155 13.1907 20.4578L14.2057 19.9657C14.6877 19.7314 15.1731 19.4972 15.6584 19.2664C16.6632 18.7878 17.6645 18.3126 18.6727 17.8374L21.232 16.6256C22.2198 16.1572 22.7595 15.1728 22.6101 14.1205L22.6067 14.1273ZM14.0325 15.6276C12.315 16.113 11.1982 17.2264 10.7162 18.9473C10.7061 18.9032 10.6959 18.8591 10.6823 18.815C10.163 17.1585 9.05639 16.0859 7.39654 15.6276C9.12427 15.1422 10.241 14.0221 10.7196 12.2944C10.7366 12.3487 10.7536 12.403 10.7672 12.4607C10.8181 12.6372 10.869 12.8171 10.9471 12.9902C11.558 14.3547 12.5967 15.2441 14.0325 15.631V15.6276Z" fill="url(#paint0_linear_3319_1579)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_3319_1579" x1="0.000192341" y1="15.0574" x2="22.6305" y2="15.0574" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0076FF"/>
      <stop offset="1" stop-color="#2DD5C3"/>
    </linearGradient>
    <clipPath id="clip0_3319_1579">
      <rect width="81" height="26.544" fill="white"/>
    </clipPath>
  </defs>
</svg>
      </div>
      <div className= "w-[1000px] text-2xl mt-[20.46px] text-[28px]  leading-[44px] font-medium">
        {words.map((word, index) => {
          // Calculate opacity based on scroll position
          const opacity = scrollPosition*10 > index * 250 ? 1 : 0.2;
          // const opacity = Math.min(Math.max((scrollY - index * 100) / 10, 0.2), 1);

          return (
            <span
              key={index}
              className="inline-block transition-opacity duration-500 mx-1"
              // style={{ opacity }}
              style={{opacity: opacity > 1 ? 1 : opacity < 0 ? 0 : opacity, // Clamps the opacity between 0 and 1
                transition: "opacity 5ms ease-in-out",
                }}
            >
              {word}
            </span>
          );
        })}
      </div>


<div className="mt-[69px] h-[0px] -ml-[52px]">

      <svg xmlns="http://www.w3.org/2000/svg" width="1105" height="2" viewBox="0 0 1105 2" fill="none">
  <path d="M0 1L1105 1" stroke="#E5E5E5"/>
</svg>
</div>
    </div>
  );
};

export default ScrollingText;




// import React, { useEffect, useState } from "react";

// const ScrollingText = () => {
//   const text = "Zelo is an AI-powered workspace designed to get what you need out of your enterprise knowledge. With personalized AI & easy ramp up, you can act on, and share the information your team needs most in one single platform.";
//   const words = text.split(" "); // Split paragraph into words
//   const [scrollPosition, setScrollPosition] = useState(0);

//   // Handle scroll
//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     setScrollPosition(scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="text-container mt-[127.32px] ml-[256px]">
//       <div>
//         {words.map((word, index) => {
//           // Calculate the opacity based on the scroll position and the word index
//           const opacity = scrollPosition / 100 - index * 0.1;
//           return (
//             <span
//               key={index}
//               style={{
//                 opacity: opacity > 1 ? 1 : opacity < 0 ? 0 : opacity, // Clamps the opacity between 0 and 1
//                 transition: "opacity 0.3s ease-in-out",
//                 marginRight: "5px" // Adds space between words
//               }}
//             >
//               {word}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ScrollingText;
