import React from 'react';
import Menu from './Menu';
import Header from './Header';
import Activities from './Activities';
import Gallery from './Gallery';
import Footer from './Footer';

function Main({ height, handleCardClick, location }) {
  return (
    <>
      <Menu height={height} location={location} />
      <Header height={height} />
      <Activities />
      <Gallery onCardClick={handleCardClick}/>
      <Footer />
    </>
  );
}

export default Main;
