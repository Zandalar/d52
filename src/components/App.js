import React from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Menu from './Menu';
import Header from './Header';
import Activities from './Activities';
import Gallery from './Gallery';
import Footer from './Footer';
import ImagePopup from './ImagePopup';

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
    document.addEventListener('scroll', updateHeight);
    window.addEventListener('keydown', handleEscClick);
    return () => {
      document.addEventListener('scroll', updateHeight);
      window.addEventListener('keydown', handleEscClick);
    }
  })

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Menu height={height} />
          <Header height={height} />
          <Activities />
          <Gallery onCardClick={handleCardClick}/>
          <Footer />
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
