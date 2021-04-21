import React from 'react';
import Menu from './Menu';

function Contacts({ height, location }) {
  return (
    <section className='contacts'>
      <Menu height={height} location={location} />
    </section>
  );
}

export default Contacts;
