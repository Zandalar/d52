import React from 'react';
import Menu from './Menu';

function Price({height, location}) {
  return (
    <section className='price'>
      <Menu height={height} location={location} />
    </section>
  )
}

export default Price;
