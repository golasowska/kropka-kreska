import React from 'react';

import logo from '../assets/logo.png';

const Navigation = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md">
      <div className="navbar-brand">
        <img src={logo} width="70" height="70" alt="kropka-kreska" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              O mnie <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#realisations">
              Realizacje
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
