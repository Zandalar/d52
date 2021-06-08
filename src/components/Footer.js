import React from 'react';
import vk from '../images/vk.svg';
import instagram from '../images/instagram.svg';

function Footer({ handleMessagePopupClick }) {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Возникли вопросы? Напишите нам и мы с Вами свяжемся!</h2>
      <button className='footer__button' type='button' onClick={handleMessagePopupClick}>Написать сообщение</button>
      <ul className='footer__social-list'>
        <li className='footer__social-item'>
          <a className='footer__social-link' href='https://vk.com/d52service' target='_blank' rel='noreferrer'>
            <img className='footer__social-image' src={vk} alt='vk link' />
          </a>
        </li>
        <li className='footer__social-item'>
          <a className='footer__social-link' href='https://instagram.com/d52service' target='_blank' rel='noreferrer'>
            <img className='footer__social-image' src={instagram} alt='instagram link' />
          </a>
        </li>
      </ul>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2021, D<span className='text_red'>52</span></p>
        <p className='footer__developer'>Vitaliy Masich</p>
      </div>
    </footer>
  );
}

export default Footer;
