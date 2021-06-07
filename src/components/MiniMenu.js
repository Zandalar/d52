import React from 'react';
import { Link } from 'react-router-dom';

function MiniMenu({ handleMenuClick, isMobileMenuOpened }) {
  return (
    <nav className={isMobileMenuOpened ? 'mini-menu mini-menu_opened' : 'mini-menu'}>
      <button className='mini-menu__button-close' onClick={handleMenuClick} />
      <div className='mini-menu__container'>
        <ul className='mini-menu__list'>
          <li className='mini-menu__list-item'>
            <Link to='/' className='mini-menu__link' onClick={handleMenuClick}>Главная</Link>
          </li>
          <li className='mini-menu__list-item'>
            <Link to='/about' className='mini-menu__link' onClick={handleMenuClick}>О нас</Link>
          </li>
          <li className='mini-menu__list-item'>
            <Link to='/detailing' className='mini-menu__link' onClick={handleMenuClick}>Детейлинг</Link>
          </li>
          <li className='mini-menu__list-item'>
            <Link to='/service' className='mini-menu__link' onClick={handleMenuClick}>Сервис</Link>
          </li>
          <li className='mini-menu__list-item'>
            <Link to='/price' className='mini-menu__link' onClick={handleMenuClick}>Прайс</Link>
          </li>
          <li className='mini-menu__list-item'>
            <Link to='/contacts' className='mini-menu__link' onClick={handleMenuClick}>Контакты</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MiniMenu;
