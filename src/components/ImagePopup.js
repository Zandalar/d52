import React from 'react';

function ImagePopup({ onClose, isOpen, isolatePopup }) {
  const image = 'https://images.unsplash.com/photo-1580274437636-1c384e59e9b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80';

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} id='popup__image' onClick={onClose}>
      <div className='popup__container popup__container_image' onClick={isolatePopup}>
        <img className='popup__image' src={image} alt='#' />
        <h2 className='popup__title_image'>Картинка</h2>
        <button className='popup__button-close' id='image__button-close' type='button' onClick={onClose} />
      </div>
    </div>
  );
}

export default ImagePopup;
