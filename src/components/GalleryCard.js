import React from 'react';

function GalleryCard({ onCardClick }) {
  const image = 'https://images.unsplash.com/photo-1580274437636-1c384e59e9b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80';

  return (
    <li className='gallery__card'>
      <img className='gallery__image' src={image} alt='auto' onClick={onCardClick}/>
    </li>
  );
}

export default GalleryCard;
