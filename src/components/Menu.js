import React from 'react';


function Menu() {
  return (
    <nav className='menu'>
      <h1 className='menu__title'>D52</h1>
      <ul className='menu__list'>
        <li className='menu__item'>
          <a className='menu__link' href='#'>Главная</a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>О нас</a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>Детейлинг</a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>Сервис</a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>Прайс</a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='#'>Контакты</a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;
