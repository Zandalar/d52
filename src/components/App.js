import React from 'react';
import '../blocks/app/app.css';
import Menu from './Menu';
import Header from './Header';
import Activities from './Activities';

function App() {
  return (
    <div className="app">
      <Menu />
      <Header />
      <Activities />
    </div>
  );
}

export default App;
