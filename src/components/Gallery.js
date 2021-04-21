import React from 'react';
import GalleryCard from './GalleryCard';
import More from './More';
import Slider from './Slider';

function Gallery({ onCardClick }) {
  return (
    <section className='gallery'>
      <h2 className='gallery__title'>Галерея наших работ</h2>
      <Slider />
      <ul className='gallery__list'>
        <GalleryCard onCardClick={onCardClick}/>
        <GalleryCard onCardClick={onCardClick}/>
        <GalleryCard onCardClick={onCardClick}/>
        <GalleryCard onCardClick={onCardClick}/>
        <GalleryCard onCardClick={onCardClick}/>
        <GalleryCard onCardClick={onCardClick}/>
        <GalleryCard onCardClick={onCardClick}/>
        <GalleryCard onCardClick={onCardClick}/>
        <GalleryCard onCardClick={onCardClick}/>
      </ul>
      <More />
    </section>
  );
}

export default Gallery;
