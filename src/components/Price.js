import React from 'react';
import Navigation from './Navigation';

function Price({ height }) {
  return (
    <section className='price'>
      <Navigation height={height} />
    </section>
  );
}

export default Price;
