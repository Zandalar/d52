import React from 'react';
import Menu from './Menu';

function Service({ height, windowWidth, location }) {
  return (
    <section className='service'>
      <Menu height={height} windowWidth={windowWidth} location={location} />
    </section>
  );
}

export default Service;
