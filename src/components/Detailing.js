import React from 'react';
import Navigation from './Navigation';

function Detailing({ height }) {
  return (
    <section className='detailing'>
      <Navigation height={height} />
    </section>
  );
}

export default Detailing;
