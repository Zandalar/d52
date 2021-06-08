import React from 'react';
import Menu from './Menu';

function Navigation({ height, windowWidth }) {
  return (
    <Menu windowWidth={windowWidth} height={height} />
  );
}

export default Navigation;
