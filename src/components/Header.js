import React from 'react';

import Navigation from './Navigation';
import TextBanner from './TextBanner';

import arrow from '../assets/arrow.png';

const Header = () => {
  return (
    <div className="banner">
      <Navigation />
      <TextBanner />
      <div className="container">
        <div className="row banner-arrow">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Header;
