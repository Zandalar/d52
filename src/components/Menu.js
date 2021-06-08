import React from 'react';
import { Link } from 'react-router-dom';
import MiniMenu from './MiniMenu';

function Menu({ windowWidth, height, location }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  function handleMenuClick() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  return (
    <nav className={(height > window.innerHeight || location !== '/') ? 'menu menu_dark' : 'menu'}>
      <div className='menu__container'>
        <h1 className='menu__title'>D<span className='text_red'>52</span></h1>
        {(height >= 10 || windowWidth < 1200) && <button className='menu__button' onClick={handleMenuClick} />}
        {height < 10 && windowWidth > 1200
          ? <ul className='menu__list'>
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
          : <MiniMenu handleMenuClick={handleMenuClick} isMobileMenuOpened={isMobileMenuOpened} />
        }
      </div>
    </nav>
  );
}

export default Menu;
