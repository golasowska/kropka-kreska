import React from 'react';

import logo from '../assets/logo.png';

const TextBanner = () => {
  return (
    <div className="banner-text-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-7 banner-stripe">
            <p>Studio projektowania</p>
            <p className="header-text-descr">
              pomieszczeń mieszkalnych, biurowych <br /> i użyteczności
              publicznej.
            </p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={logo} alt="kropka-kreska" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBanner;
