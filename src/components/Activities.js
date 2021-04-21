import React from 'react';
import Card from './Card';

function Activities() {
  return (
    <section className='activities'>
      <h2 className='activities__title'>Мы предлагаем следующие виды услуг:</h2>
      <ul className='activities__list'>
        <li className='activities__item'>
          <Card />
        </li>
        <li className='activities__item'>
          <Card />
        </li>
        <li className='activities__item'>
          <Card />
        </li>
        <li className='activities__item'>
          <Card />
        </li>
        <li className='activities__item'>
          <Card />
        </li>
        <li className='activities__item'>
          <Card />
        </li>
      </ul>
    </section>
  );
}

export default Activities;
