import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ImagePopup from './ImagePopup';
import Main from './Main';
import About from './About';
import Detailing from './Detailing';
import Service from './Service';
import Price from './Price';
import Contacts from './Contacts';
import Popup from './Popup';

function App() {
  const [height, setHeight] = useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isMessagePopupOpen, setIsMessagePopupOpen] = useState(false);

  // const location = useLocation().pathname;
  const history = useHistory();

  function updateHeight() {
    setHeight(window.pageYOffset);
  }

  function updateWidth() {
    setWindowWidth(window.innerWidth);
  }

  function closeAllPopups() {
    setIsImagePopupOpen(false);
    setIsMessagePopupOpen(false);
  }

  function handleCardClick() {
    setIsImagePopupOpen(true);
  }

  function handleMessagePopupClick() {
    setIsMessagePopupOpen(true);
  }

  function handleEscClick(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  function isolatePopup(evt) {
    evt.stopPropagation();
  }

  useEffect(() => {
    document.addEventListener('scroll', updateHeight);
    window.addEventListener('keydown', handleEscClick);
    window.addEventListener('resize', updateWidth);
    return () => {
      document.removeEventListener('scroll', updateHeight);
      window.removeEventListener('keydown', handleEscClick);
      window.removeEventListener('resize', updateWidth);
    };
  });

  useEffect(() => {
    history.push('/');
    window.scrollTo(0, 0);
  }, [history]);

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
         <Main
           height={height}
           handleCardClick={handleCardClick}
           handleMessagePopupClick={handleMessagePopupClick}
           windowWidth={windowWidth}
         />
        </Route>
        <Route exact path='/about'>
          <About
            height={height}
            handleMessagePopupClick={handleMessagePopupClick}
            windowWidth={windowWidth}
          />
        </Route>
        <Route exact path='/detailing'>
          <Detailing height={height} />
        </Route>
        <Route exact path='/service'>
          <Service height={height} />
        </Route>
        <Route exact path='/price'>
          <Price height={height} />
        </Route>
        <Route exact path='/contacts'>
          <Contacts height={height} />
        </Route>
      </Switch>
      <ImagePopup
        name='image'
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
        isolatePopup={isolatePopup}
      />
      <Popup
        onClose={closeAllPopups}
        isOpen={isMessagePopupOpen}
        isolatePopup={isolatePopup}
      />
    </div>
  );
}

export default App;
