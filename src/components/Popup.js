import React, { useEffect, useRef } from 'react';
import useValidator from '../hooks/useValidator';

function Popup({ isOpen, onClose, isolatePopup }) {
  const { values, errors, isValid, handleChange } = useValidator();
  const focus = React.useRef();

  useEffect(() => {
    setTimeout(() => { focus.current.focus() }, 100)
  }, [isOpen]);

  useEffect(() => {
    values.name = currentUser.name;
    values.about = currentUser.about;
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} id='popup__info' onClick={onClose}>
      <div className='popup__container' onClick={isolatePopup}>
        <button className='popup__button-close' id='info__button-close' type='button' onClick={onClose} />
        <form className='popup__form' name={name} onSubmit={onSubmit} noValidate>
          <input
            ref={focus}
            className='popup__field'
            id='profile__name'
            name='name'
            type='text'
            value={values.name || ''}
            minLength='2'
            maxLength='40'
            onChange={handleChange}
            required
          />
          <span
            className='popup__field-error'
            id='profile__name-error'>
        {errors.name || ''}
      </span>
          <input
            className='popup__field'
            id='profile__description'
            name='about'
            type='text'
            value={values.about || ''}
            minLength='2'
            maxLength='200'
            onChange={handleChange}
            required
          />
          <span
            className='popup__field-error'
            id='profile__description-error'>
        {errors.about || ''}
      </span>
          <button
            className={`popup__button-save ${!isValid && 'popup__button-save_disabled'}`}
            id='profile__button-save'
            type='submit'>
            {`${isLoading ? 'Сохранение...' : 'Сохранить'}`}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Popup;
