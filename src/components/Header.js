import React from 'react';
import video1 from '../videos/Promo.mp4';
import video2 from '../videos/Promo.webm';
import arrow from '../images/arrow-down.svg';

function Header({height}) {

  return (
    <div className='header'>
      <video
        className='header__video'
        width='100%'
        height='auto'
        preload='auto'
        autoPlay
        muted
        loop='loop'
        poster='../videos/daisy-stock-poster.jpg'
      >
        <source src={video1} type="video/mp4" />
        <source src={video2} type="video/webm" />
      </video>
      {height < 150 && <img className='header__arrow' src={arrow} alt='arrow-down'/>}
    </div>
  )
}

export default Header;
