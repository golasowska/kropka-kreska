import React from 'react';

import Header from './Header';
import Offer from '../containers/Offer';
import About from '../containers/About';
import Realisations from '../containers/Realisations';
import Contact from './Contact';

const App = () => {
  return (
    <div>
      <Header />
      <Offer />
      <About />
      <Realisations />
      <Contact />
    </div>
  );
};

export default App;
