import React from 'react';
import Menu from './Menu';

function Price({ height, windowWidth, location }) {
  return (
    <section className='price'>
      <Menu height={height} windowWidth={windowWidth} location={location} />
    </section>
  );
}

export default Price;
