import React from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import ImagePopup from './ImagePopup';
import Main from './Main';
import About from './About';
import Detailing from './Detailing';
import Service from './Service';
import Price from './Price';
import Contacts from './Contacts';

function App() {
  const [height, setHeight] = React.useState(0);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const location = useLocation().pathname;
  const history = useHistory();

  function updateHeight() {
    setHeight(window.pageYOffset);
  }

  function handleCardClick() {
    setIsImagePopupOpen(true);
  }

  function handleEscClick(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  function isolatePopup(evt) {
    evt.stopPropagation();
  }

  function closeAllPopups() {
    setIsImagePopupOpen(false);
    console.log(isImagePopupOpen);
  }

  React.useEffect(() => {
    setTimeout(() => {
      document.addEventListener('scroll', updateHeight);
    }, 3000)

    window.addEventListener('keydown', handleEscClick);
    return () => {
      document.addEventListener('scroll', updateHeight);
      window.addEventListener('keydown', handleEscClick);
    }
  })

  React.useEffect(() => {
    history.push('/')
  },[])

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
         <Main height={height} handleCardClick={handleCardClick} location={location} />
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
    </div>
  );
}

export default App;
