import React from 'react';
import Menu from './Menu';

function Detailing({ height, windowWidth, location }) {
  return (
    <section className='detailing'>
      <Menu height={height} windowWidth={windowWidth} location={location} />
    </section>
  );
}

export default Detailing;
