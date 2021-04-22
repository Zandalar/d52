import React, { useState } from 'react';

function Card() {
  const [isHoverActive, setIsHoverActive] = useState(false);

  function hoverOn() {
    setIsHoverActive(true);
  }

  function hoverOff() {
    setIsHoverActive(false);
  }

  return (
    <div className='card' onMouseOver={hoverOn} onMouseOut={hoverOff}>
      <h2 className={`card__title ${isHoverActive && 'card__title_active'}`}>
        Вид работ
      </h2>
      <p className={`card__text ${isHoverActive && 'card__text_active'}`}>
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
      </p>
    </div>
  );
}

export default Card;
