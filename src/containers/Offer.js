import React, { Component } from 'react';
import { connect } from 'react-redux';

class Offer extends Component {
  renderOffer = () => {
    return this.props.offer.map(item => {
      return (
        <div key={item.title} className="col-8 col-md-4 text-center ">
          <img
            className="graphic-icon"
            src={item.src}
            width="35"
            height="36"
            alt="icon-projects"
          />
          <p className="icon-text-header">{item.title}</p>
          <p className="icon-text-descr">{item.descr}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <p className="header-text">Co mogę dla Ciebie zrobić?</p>
            <p className="header-text-descr">
              Zobacz co jestem w stanie wykonać!
            </p>
          </div>
          <div className="row justify-content-center row-icons">
            {this.renderOffer()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    offer: state.offer
  };
}

export default connect(mapStateToProps)(Offer);
