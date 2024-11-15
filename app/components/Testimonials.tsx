import React, { useEffect, useRef, useState } from 'react';

const PartialCardSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const cardWidth = 551;
  const cardsPerSet = 4;
  const fullCardWidth = cardWidth + 48;
  const partialCardVisible = 200;
  const viewportWidth = (fullCardWidth * 2) + (partialCardVisible * 2);

  const cards = [...Array(cardsPerSet)].map((_, index) => ({
    id: `card-${index}`,
    image: "TestimonialsCard1.svg"
  }));

  const totalCards = [...cards, ...cards, ...cards];

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        handleScroll('right');
      }
    }, 15000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [isPaused]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const offset = -(currentIndex * fullCardWidth) + partialCardVisible;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${offset}px)`;

    const handleTransitionEnd = () => {
      if (currentIndex >= cardsPerSet * 2) {
        slider.style.transition = 'none';
        const newIndex = currentIndex - cardsPerSet;
        setCurrentIndex(newIndex);
        const newOffset = -(newIndex * fullCardWidth) + partialCardVisible;
        slider.style.transform = `translateX(${newOffset}px)`;
      }
      if (currentIndex < cardsPerSet) {
        slider.style.transition = 'none';
        const newIndex = currentIndex + cardsPerSet;
        setCurrentIndex(newIndex);
        const newOffset = -(newIndex * fullCardWidth) + partialCardVisible;
        slider.style.transform = `translateX(${newOffset}px)`;
      }
    };

    slider.addEventListener('transitionend', handleTransitionEnd);
    return () => slider.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, cardsPerSet]);

  const handleScroll = (direction) => {
    setCurrentIndex(prev => (direction === 'left' ? prev - 1 : prev + 1));
  };

  const getVisibleIndex = () => currentIndex % cardsPerSet;

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleClick = (direction) => {
    setIsPaused(true);
    handleScroll(direction);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <div className="relative flex flex-col items-center mt-28">

      <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent blur-2xl z-10 pointer-events-none" />

   
      <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent blur-2xl z-10 pointer-events-none" />

      <div 
        className="overflow-hidden"
        style={{ 
          width: `${viewportWidth}px`,
          margin: '0 auto'
        }}
      >
        <div
          className="button button-left absolute z-20"
          onClick={() => handleClick('left')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ 
            top: '50%', 
            transform: 'translateY(-50%)', 
            left: '20px',
            cursor: 'pointer' 
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
            <circle cx="20.5" cy="20.5" r="19.5" fill="white" stroke="#1EA6ED" strokeWidth="1.2" />
            <path d="M23.2861 26.6284L16.6004 19.9427M16.6004 19.9427L23.2861 13.257" stroke="#1EA6ED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div
          ref={sliderRef}
          className="flex items-center"
          style={{ width: `${totalCards.length * fullCardWidth}px` }}
        >
          {totalCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${cardWidth}px`, margin: '0 22px' }}
            >
              <img
                src={card.image}
                alt={`Testimonial Card ${index + 1}`}
                className="w-[551px] h-[403px]"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <div
          className="button button-right absolute z-20"
          onClick={() => handleClick('right')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ 
            top: '50%', 
            transform: 'translateY(-50%)', 
            right: '20px',
            cursor: 'pointer' 
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
            <circle cx="20.5" cy="20.5" r="19.5" fill="white" stroke="#1EA6ED" strokeWidth="1.2" />
            <path d="M17.7139 14.3716L24.3996 21.0573M24.3996 21.0573L17.7139 27.743" stroke="#1EA6ED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Indicator Circles */}
      <div className="w-[68px] h-[12px] mt-[37px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="12" viewBox="0 0 68 12" fill="none">
          {[...Array(cardsPerSet)].map((_, i) => (
            <circle key={i} cx={6 + 18.667 * i} cy="6" r="6" fill={getVisibleIndex() === i ? 'url(#paint0_linear_3762_7734)' : '#D9D9D9'} />
          ))}
          <defs>
            <linearGradient id="paint0_linear_3762_7734" x1="12" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2DD5C3" />
              <stop offset="1" stopColor="#0076FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='mt-24 flex items-center justify-center w-[1105px] h-[1px] bg-[#E5E5E5]'></div>
    </div>
  );
};

export default PartialCardSlider;
