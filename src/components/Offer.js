import React from 'react';

import iconProjects from '../assets/icon-projects.png';

const Offer = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-md-12 text-center">
          <p>Co mogę dla Ciebie zrobić?</p>
          <p>Zobacz co jestem w stanie wykonać!</p>
        </div>
        <div className="row">
          <div className="col col-md-4 text-center">
            <img
              src={iconProjects}
              width="35"
              height="36"
              alt="icon-projects"
            />
            <p>Projekty</p>
            <p>
              możliwość zaprojektowania całego obiektu lub pojedynczych
              pomieszczeń
            </p>
          </div>
          <div className="col col-md-4 text-center">
            <img
              src={iconProjects}
              width="35"
              height="36"
              alt="icon-projects"
            />
            <p>Projekty</p>
            <p>
              możliwość zaprojektowania całego obiektu lub pojedynczych
              pomieszczeń
            </p>
          </div>
          <div className="col col-md-4 text-center">
            <img
              src={iconProjects}
              width="35"
              height="36"
              alt="icon-projects"
            />
            <p>Projekty</p>
            <p>
              możliwość zaprojektowania całego obiektu lub pojedynczych
              pomieszczeń
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
