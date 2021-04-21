import React from 'react';
import Menu from './Menu';

function Detailing({ height, location }) {
  return (
    <section className='detailing'>
      <Menu height={height} location={location} />
    </section>
  );
}

export default Detailing;
