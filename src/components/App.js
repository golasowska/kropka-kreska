import React from 'react';

import ScrollToTop from 'react-scroll-up';

import Header from './Header';
import Offer from '../containers/Offer';
import About from '../containers/About';
import Realisations from '../containers/Realisations';
import Contact from './Contact';

import upArrow from '../assets/share.png';

const App = () => {
  return (
    <div>
      <Header />
      <Offer />
      <About />
      <Realisations />
      <Contact />
      <ScrollToTop showUnder={160}>
        <img src={upArrow} alt="up-icon" />
      </ScrollToTop>
    </div>
  );
};

export default App;
