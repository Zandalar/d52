import React, { useEffect, useRef } from 'react';
import useValidator from '../hooks/useValidator';

function Popup({ isOpen, onClose, isolatePopup }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useValidator();
  const focus = useRef();

  useEffect(() => {
    setTimeout(() => (focus.current.focus()), 100);
  }, [isOpen]);

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   onUpdateUser({
  //     name: values.email,
  //     message: values.message,
  //   });
  // }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} id='popup__info' onClick={onClose}>
      <div className='popup__container popup__container_message' onClick={isolatePopup}>
        <button className='popup__button-close' id='info__button-close' type='button' onClick={onClose} />
        <form className='popup__form' name='messageForm' noValidate>
          <input
            ref={focus}
            className='popup__field'
            id='popup__email'
            name='email'
            type='email'
            value={values.email || ''}
            minLength='2'
            maxLength='40'
            onChange={handleChange}
            placeholder='Введите свой e-mail'
            required
          />
          <span
            className='popup__field-error'
            id='email-error'
          >
            {errors.email || ''}
          </span>
          <textarea
            className='popup__field popup__field_area'
            id='popup__message'
            name='message'
            value={values.message || ''}
            minLength='2'
            onChange={handleChange}
            placeholder='Оставьте свое сообщение'
            required
          />
          <span
            className='popup__field-error'
            id='message-error'
          >
            {errors.message || ''}
          </span>
          <button
            className={`popup__button-save ${!isValid && 'popup__button-save_disabled'}`}
            id='profile__button-save'
            type='submit'>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
