import React from 'react';
import { Link } from 'react-router-dom';

function Menu({height, location}) {

  return (
    <nav className={height < (document.documentElement.clientHeight - 75) && location === '/' ? 'menu' : 'menu menu_dark'}>
      <div className='menu__container'>
        <h1 className='menu__title'>D<span className='text_red'>52</span></h1>
        <ul className='menu__list'>
          <li className='menu__item'>
            <Link className='menu__link' to='/'>Главная</Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__link' to='/about'>О нас</Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__link' to='/detailing'>Детейлинг</Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__link' to='/service'>Сервис</Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__link' to='/price'>Прайс</Link>
          </li>
          <li className='menu__item'>
            <Link className='menu__link' to='/contacts'>Контакты</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu;
