import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute lg:left-[160px] left-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer mr-5 lg:mr-[88px]"
    onClick={onClick}
  >
    <button className="group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        className="group-hover:fill-[#1EA6ED] transition-colors duration-200"
      >
        <circle
          cx="20.5"
          cy="20.5"
          r="19.5"
          fill="white"
          stroke="#B2B2B2"
          strokeWidth="1.2"
          className="group-hover:fill-[#1EA6ED] group-hover:stroke-[#1EA6ED]"
        />
        <path
          d="M23.2861 26.6287L16.6004 19.9429M16.6004 19.9429L23.2861 13.2572M16.6004 19.9429H16.8089"
          stroke="#B2B2B2"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:stroke-[#FFF]"
        />
      </svg>
    </button>
  </div>
);


// Custom Right Arrow
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute lg:right-[160px] right-1 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer ml-5 lg:ml-[88px]"
    onClick={onClick}
  >
    <button className="group">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
    className="group-hover:fill-[#1EA6ED] transition-colors duration-200"
  >
    <circle
      cx="20.5"
      cy="20.5"
      r="19.5"
      fill="white"
      stroke="#B2B2B2"
      strokeWidth="1.2"
      className="group-hover:fill-[#1EA6ED] group-hover:stroke-[#1EA6ED]"
    />
    <path
      d="M17.7139 14.3713L24.3996 21.0571M24.3996 21.0571L17.7139 27.7428M24.3996 21.0571H24.1911"
      stroke="#B2B2B2"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="group-hover:stroke-[#FFF]"
    />
  </svg>
</button>

  </div>
);

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow onClick={undefined} />,
    prevArrow: <CustomPrevArrow onClick={undefined} />,
    arrows: true,
  };

  return (
    <div className="carousel-containe relative">
      <div className="">
        <h2 className="text-[20px] font-medium text-[#858585] ml-7 mt-16 lg:ml-[280px]">Our Platform</h2>
      </div>
      <Slider {...settings} className=' mt-4 lg:h-[398px]' >
        {/* Card 1 */}
        <div className="flex justify-center px-6 lg:px-[248px] ">
          <div className="card  rounded-lg flex">
            <Image
              src="/Card_11.svg"
              alt="Feature 1"
              width={1016}
              height={398}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center px-6 lg:px-[248px]">
          <div className="card rounded-lg">
            <Image
              src="/Card_12.svg"
              alt="Feature 2"
              width={1016}
              height={398}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center px-6 lg:px-[248px]">
          <div className="card rounded-lg">
            <Image
              src="/Card_13.svg"
              alt="Feature 3"
              width={1016}
              height={398}
              className="rounded-lg"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
