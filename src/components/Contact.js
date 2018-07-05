import React from 'react';

import fb from '../assets/logo-fb.png';
import ig from '../assets/logo-ig.png';

const Contact = () => {
  return (
    <div id="contact" className="container">
      <div className="row text-center">
        <p className="col col-md-12 header-text-descr">Kontakt</p>
        <p className="col col-md-12 header-text">Tel. 501 776 738</p>
        <p className="col col-md-12 header-text">rutkowska.wnetrza@gmail.com</p>
      </div>
      <div className="row justify-content-center">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={fb}
            alt="logo-fb"
            width="101"
            height="101"
            className="logo-media"
          />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ig}
            alt="logo-ig"
            width="101"
            height="101"
            className="logo-media"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
