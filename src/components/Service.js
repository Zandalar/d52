import React from 'react';
import Menu from './Menu';

function Service({height, location}) {
  return (
    <section className='service'>
      <Menu height={height} location={location} />
    </section>
  )
}

export default Service;
