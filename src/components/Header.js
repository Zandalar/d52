import React from 'react';
import video1 from '../videos/promo_h264.mp4';
import video2 from '../videos/promo_webm.webm';

function Header() {
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
    </div>
  )
}

export default Header;
