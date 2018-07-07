import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Realisations extends Component {
  renderGallery = () => {
    return this.props.projectsList.map(item => {
      return item.photos.map(photo => {
        return (
          <div key={photo}>
            <p>{item.title}</p>
            <img src={photo} alt="gallery-project" />
          </div>
        );
      });
    });
  };
  renderProjects = () => {
    return this.props.projectsList.map(item => {
      return (
        <div key={item.title} className="col col-md-3 text-center">
          <img className="img-fluid" src={item.src} alt="icon-projects" />
          <p>{item.title}</p>
          <p>{item.descr}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <div id="realisations" className="container">
        <div className="row text-center">
          <p className="col col-md-12 header-text">Realizacje</p>
        </div>
        <div className="col-md-12 m-auto">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            dynamicHeight={true}
          >
            {this.renderGallery()}
          </Carousel>
        </div>
        <div className="row">{this.renderProjects()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projectsList: state.projectsList
  };
}

export default connect(mapStateToProps)(Realisations);
