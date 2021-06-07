import React, { useEffect } from 'react';
import Header from './Header';
import Activities from './Activities';
import Gallery from './Gallery';
import Footer from './Footer';
import Navigation from './Navigation';

function Main({
  height,
  handleCardClick,
  handleMessagePopupClick,
  windowWidth,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation height={height} windowWidth={windowWidth} />
      <Header height={height} />
      <Activities />
      <Gallery onCardClick={handleCardClick}/>
      <Footer handleMessagePopupClick={handleMessagePopupClick} />
    </>
  );
}

export default Main;
