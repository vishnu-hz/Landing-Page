import React, { useState, useEffect } from 'react';
import SearchIcon from './Searchicon';

const TypingAnimation = () => {
  const statements = [
    "What are the latest product specifications of the xPhone?",
    "@Support How do I respond to a payment failure issue?",
    "Tell me about the Monsieur tool",
    "@DataAnalyst What is the GMV for September 2024?",
    "Who is the Chief Vacation Officer?",
    "@SlackHighlights What is the fall season offer thread about?",
    "What is the status of the landing page bug?",
    "@EmployeeTraining prepare me on the new marketing pitch"
  ];

  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = statements[currentStatementIndex];

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setTextIndex((prev) => prev + 1);
      } else {
        setTextIndex((prev) => prev - 1);
      }

      if (!isDeleting && textIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000 / 2); // Pause before deleting
      } else if (isDeleting && textIndex === 0) {
        setIsDeleting(false);
        setCurrentStatementIndex((prev) => (prev + 1) % statements.length);
      }
    };

    const typingSpeed = isDeleting ? 66 / 5 : 100 / 3; // 1.5x typing speed and 2x deletion speed
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [textIndex, isDeleting, currentStatementIndex, fullText.length]);

  return (
    <div className='bg-white rounded-[80px] border-[1.5px] border-[#E5E5E5] shadow-home-screen flex items-center mt-6 sm:mt-[88px] mx-4 sm:mx-auto mb-6 sm:mb-[118px] sm:w-[300px] md:w-full lg:w-[692px] h-[68px] lg:h-[82px]'>
      <div className="relative flex items-center font-outfit ml-[12px] sm:ml-[33px] text-[16px] sm:text-[20px] font-semibold w-full h-[28px] sm:h-auto text-left">
        <span>
          {fullText.substring(0, textIndex).split('').map((char, index) => {
            // Check if the character is part of @text
            const atIndex = fullText.indexOf('@');
            const atMatch = fullText.slice(atIndex).match(/@\w+/);
            const isAtText = atMatch && index >= atIndex && index < atIndex + atMatch[0].length;

            return (
              <span
                key={index}
                style={{
                  color: !isAtText ? 'black' : 'black',
                  background: isAtText ? 'linear-gradient(270deg, #1DB3D9 72.41%, #2DD5C3 100%)' : 'transparent',
                  WebkitBackgroundClip: isAtText ? 'text' : 'unset',
                  WebkitTextFillColor: isAtText ? 'transparent' : 'black',
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
        <span className="blinking-cursor" style={{ animation: 'blink 1s infinite', display: 'inline-block', verticalAlign: 'bottom' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="3" height="32" viewBox="0 0 3 32" fill="none">
            <path d="M1.5 0V32" stroke="url(#paint0_linear_3562_1121)" strokeWidth="2.5" />
            <defs>
              <linearGradient id="paint0_linear_3562_1121" x1="1.99993" y1="42.5" x2="1.99991" y2="1.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2DD5C3" />
                <stop offset="1" stopColor="#0076FF" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <div className="mr-2 lg:mr-3 h-[32px] sm:h-auto flex items-center">
        <SearchIcon />
      </div>
    </div>
  );
};

export default TypingAnimation;
