import React from 'react';

import logo from '../assets/logo.png';

const TextBanner = () => {
  return (
    <div className="banner-text-bg">
      <div className="container">
        <div className="row">
          <div className="col col-md-7 banner-stripe">
            <p>Studio projektowania</p>
            <p>
              pomieszczeń mieszkalnych, biurowych i użyteczności publicznej.
            </p>
          </div>
          <div className="col col-md-5">
            <img className="img-fluid" src={logo} alt="kropka-kreska" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBanner;