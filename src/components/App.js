import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
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
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isMessagePopupOpen, setIsMessagePopupOpen] = useState(false);

  const location = useLocation().pathname;
  const history = useHistory();

  function updateHeight() {
    setHeight(window.pageYOffset);
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
    setTimeout(() => {
      document.addEventListener('scroll', updateHeight);
    }, 1000);
    window.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('scroll', updateHeight);
      window.removeEventListener('keydown', handleEscClick);
    };
  });

  useEffect(() => {
    history.push('/');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
         <Main
           height={height}
           handleCardClick={handleCardClick}
           handleMessagePopupClick={handleMessagePopupClick}
           location={location}
         />
        </Route>
        <Route exact path='/about'>
          <About height={height} location={location} />
        </Route>
        <Route exact path='/detailing'>
          <Detailing height={height} location={location} />
        </Route>
        <Route exact path='/service'>
          <Service height={height} location={location} />
        </Route>
        <Route exact path='/price'>
          <Price height={height} location={location} />
        </Route>
        <Route exact path='/contacts'>
          <Contacts height={height} location={location} />
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
