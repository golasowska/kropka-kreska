import React, { Component } from 'react';
import { connect } from 'react-redux';

import imageAbout from '../assets/image-about.png';

class About extends Component {
  renderAbout = () => {
    return this.props.about.map(item => {
      return (
        <div key={item.title} className="col col-md-6">
          <img src={item.src} width="35" height="36" alt="icon-about" />
          <p>{item.title}</p>
          <p>{item.descr}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <div id="about" className="about">
        <div className="img-about" />
        <div className="container">
          <div className="row about-descr">
            <div className="col col-md-12">
              <p className="header-text">O mnie</p>
              <p className="header-text-descr">
                Otwarta na nowe wyzwania projektowe jako architekt wnętrz,
                fotograf, projektantka mebli chętnie podejmę się każdego
                nietypowego zadania.
              </p>
            </div>
          </div>
          <div className="row about-descr">{this.renderAbout()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    about: state.about
  };
}

export default connect(mapStateToProps)(About);
