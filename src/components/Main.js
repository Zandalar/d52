import React, { useEffect } from 'react';
import Header from './Header';
import Activities from './Activities';
import Gallery from './Gallery';
import Footer from './Footer';
import Menu from './Menu';

function Main({
  height,
  windowWidth,
  location,
  handleCardClick,
  handleMessagePopupClick,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Menu height={height} windowWidth={windowWidth} location={location} />
      <Header height={height} />
      <Activities />
      <Gallery onCardClick={handleCardClick}/>
      <Footer handleMessagePopupClick={handleMessagePopupClick} />
    </>
  );
}

export default Main;
