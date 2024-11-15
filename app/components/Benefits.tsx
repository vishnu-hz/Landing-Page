import Image from 'next/image';
import React from 'react';

const Benefits = () => {
  return (
    <div className="relative mt-14">
      <div className="absolute top-0 left-0 w-full h-auto lg:h-[726px] rounded-[20px] bg-[linear-gradient(83deg,_rgba(246,_246,_246,_0.70)_6.8%,_rgba(218,_227,_234,_0.70)_50.49%,_rgba(255,_255,_255,_0.70)_84.84%)] backdrop-blur-[27.5px]">
        <div className="card ml-[20px] lg:ml-[256px] mt-[20px] lg:mt-[71px] w-auto lg:w-[134px] h-[38px] text-lg lg:text-xl text-[#414141] font-medium">
          Benefits
        </div>

        <div className="flex flex-col gap-6 lg:gap-4 mt-6 lg:-mt-2">
          <div className="flex flex-col lg:flex-row gap-7 items-center justify-center">
            <div className="w-[90%] lg:w-auto flex justify-center ">
              <Image
                src="/BenefitsCard1.svg"
                alt=""
                width={493}
                height={240}
                className="opacity-[60%] w-full lg:w-[493px] h-auto"
              />
            </div>

            <div className="w-[90%] lg:w-auto flex justify-center">
              <Image
                src="/BenefitsCard2.svg"
                alt=""
                width={493}
                height={240}
                className="opacity-[60%] w-full lg:w-[493px] h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-7 items-center justify-center">
            <div className="w-[90%] lg:w-auto flex justify-center">
              <Image
                src="/BenefitsCard3.svg"
                alt=""
                width={493}
                height={240}
                className="opacity-[60%] w-full lg:w-[493px] h-auto"
              />
            </div>

            <div className="w-[90%] lg:w-auto flex justify-center">
              <Image
                src="/BenefitsCard4.svg"
                alt=""
                width={493}
                height={240}
                className="opacity-[60%] w-full lg:w-[493px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div
  className="w-full h-auto lg:w-[1530px] lg:h-[726px] flex justify-center items-center"
>
  <Image
    src="/BenefitsBgZStar.svg"
    alt=""
    width={657}
    height={657}
    className="w-[80%] sm:w-[500px] md:w-[600px] lg:w-[657px] h-auto opacity-[10%]"
  />
</div>

    </div>
  );
};

export default Benefits;