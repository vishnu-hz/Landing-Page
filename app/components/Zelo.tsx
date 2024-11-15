"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TypingAnimation from "./TypingAnimation";
import Form from "../form/page";
import Image from "next/image";

const Hero: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

    if (!isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {/* Main Content */}
      <div className={`w-full h-full overflow-hidden flex-shrink-0 ${isModalOpen? "" : " "}`}>
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-shrink-0 w-[1108px] h-[75px] rounded-[70px] bg-white/85 shadow-md backdrop-blur-[7.5px] mt-[33px] mx-[202px]">
          <div className="relative flex flex-shrink-0 ml-10">
            <Image src="/ZeloLogo.svg" alt="Zelo Logo" width={129} height={43} />
          </div>

          <div className="flex flex-col flex-shrink-0 justify-center w-[74px] h-[20px] text-center text-[15px] font-medium leading-[57px] text-[#414141] font-outfit mt-[28px] ml-[516px]">
            About Us
          </div>

          {/* "Go to Account" Button */}
          <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 w-[140px] h-[49px] rounded-full mt-[13px] ml-[23px] cursor-pointer">
            <div className="text-white text-[15px] font-medium font-outfit">
              Go to Account
            </div>
          </div>

          {/* "See A Demo" Button */}
          <div
            className="flex items-center bg-black border border-[#868686] w-[140px] h-[49px] rounded-full mt-[13px] ml-[16px] cursor-pointer"
            onClick={toggleModal}
          >
            <div className="text-white text-[15px] font-medium flex items-center justify-center w-24 h-5 font-outfit ml-4">
              See A Demo
            </div>
            <div className="ml-auto mr-5 flex items-center mt-1">
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
            </div>
          </div>
        </div>

        {/* Main Heading Section */}
        <div className="mt-[256px] mx-[406px] w-[700px] h-[215px]">
          <div className="flex flex-col max-w-4xl bg-clip-text text-transparent font-outfit text-[52px] font-bold leading-[120%] bg-gradient-to-r from-[#7E8E9C] via-[#C3C8CB] to-[#788187]">
            <span className="text-center font-semibold">You need information at</span>
            <div className="flex items-center justify-center flex-wrap">
              <span className="bg-gradient-to-r from-[#0076FF] to-[#2DD5C3] bg-clip-text text-transparent font-semibold">
                your fingertips
              </span>
              <span>&nbsp;</span>
              <span className="text-center font-semibold">to help you do</span>
            </div>
            <span className="text-center font-semibold">your best work</span>
          </div>
        </div>

        <div className="flex w-[906px] text-[#414141] text-[24px] font-normal leading-[44px] mx-[303px] justify-center text-center">
          And the right tools to deliver your team’s knowledge & work needs
        </div>

        <TypingAnimation />
      </div>

      {/* Modal Form */}
      {isModalOpen && <Form closeForm={toggleModal} />}
    </>
  );
};

export default Hero;
