import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

const ScrollingText = () => {
  const text =
    "Zelo is an AI-powered workspace designed to get what you need out of your enterprise knowledge. With personalized AI & easy ramp up, you can act on, and share the information your team needs most in one single platform.";

  const words = text.split(" ");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const textContainerRef = useRef(null);

  const handleScroll = () => {
    if (isVisible) {
      setScrollPosition(window.scrollY);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (textContainerRef.current) {
      observer.observe(textContainerRef.current);
    }

    return () => {
      if (textContainerRef.current) {
        observer.unobserve(textContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div ref={textContainerRef} className="text-container mt-[127.32px] ml-[256px]">
      <Image src="/ZeloLogo.svg" alt="" width={81} height={27} />
      <div className="w-[1000px] mt-[20.46px] text-[28px] leading-[44px] font-medium">
        {words.map((word, wordIndex) => {
         
          const wordOpacity = isVisible && scrollPosition * 7 > wordIndex * 150 ? 1 : 0.2;

          return (
            <span
              key={wordIndex}
              className="word inline-block mx-1"
              style={{
                display: "inline-block",
                opacity: wordOpacity,
                transition: "opacity 200ms ease-in-out",
              }}
            >
              {word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="char inline-block"
                  style={{
                    display: "inline-block",
                    transition: "opacity 200ms ease-in-out",
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          );
        })}
      </div>

      <div className="mt-[69px] h-[0px] -ml-[52px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1105"
          height="2"
          viewBox="0 0 1105 2"
          fill="none"
        >
          <path d="M0 1L1105 1" stroke="#E5E5E5" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollingText;