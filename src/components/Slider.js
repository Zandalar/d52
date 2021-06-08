import React, { useState, useEffect, useCallback } from 'react';
import slide1 from '../images/slider1.jpg';
import slide2 from '../images/slider2.jpg';
import slide3 from '../images/slider3.jpg';
import slide4 from '../images/slider4.jpg';
import slide5 from '../images/slider5.jpg';

function Slider() {
  const img = [
    <img key={slide1} src={slide1} className='slider__image' alt='slide' />,
    <img key={slide2} src={slide2} className='slider__image' alt='slide' />,
    <img key={slide3} src={slide3} className='slider__image' alt='slide' />,
    <img key={slide4} src={slide4} className='slider__image' alt='slide' />,
    <img key={slide5} src={slide5} className='slider__image' alt='slide' />,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  const changeCurrentIndex = useCallback(() => {
    setActiveIndex((index) => (index === img.length - 1 ? 0 : index + 1));
  }, [img.length]);

  useEffect(() => {
    setInterval(() => changeCurrentIndex(), 3000);
    return () => clearInterval();
  }, [changeCurrentIndex]);

  return (
    <div className="slider">
      <div className="slider__item slider__item_previous" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider__item" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider__item slider__item_next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
    </div>
  );
}

export default Slider;
