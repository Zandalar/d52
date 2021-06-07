import React from 'react';
import Header from './Header';
import Activities from './Activities';
import Gallery from './Gallery';
import Footer from './Footer';
import Navigation from './Navigation';

function Main({ height, handleCardClick, handleMessagePopupClick }) {
  return (
    <>
      <Navigation height={height} />
      <Header height={height} />
      <Activities />
      <Gallery onCardClick={handleCardClick}/>
      <Footer handleMessagePopupClick={handleMessagePopupClick} />
    </>
  );
}

export default Main;
