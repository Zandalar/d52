import React from 'react';
import Menu from './Menu';
import MiniMenu from './MiniMenu';

function Navigation({ height }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  function handleMenuClick() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  return (
    <>
      {height >= 10 && <button className='menu__button' onClick={handleMenuClick}/>}
      {height < 10
        ? <Menu />
        : <MiniMenu handleMenuClick={handleMenuClick} isMobileMenuOpened={isMobileMenuOpened} />
      }
    </>
  );
}

export default Navigation;
