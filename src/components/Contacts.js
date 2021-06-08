import React from 'react';
import Menu from './Menu';

function Contacts({ height, windowWidth, location }) {
  return (
    <section className='contacts'>
      <Menu height={height} windowWidth={windowWidth} location={location} />
    </section>
  );
}

export default Contacts;
