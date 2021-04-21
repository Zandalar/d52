import React from 'react';
import image from '../images/test_honda.jpg';

function ImagePopup({ onClose, isOpen, isolatePopup }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} id='popup__image' onClick={onClose}>
      <div className='popup__container_image' onClick={isolatePopup}>
        <img className='popup__image' src={image} alt='#' />
        <h2 className='popup__title_image'>Картинка</h2>
        <button className='popup__button-close' id='image__button-close' type='button' onClick={onClose} />
      </div>
    </div>
  );
}

export default ImagePopup;
