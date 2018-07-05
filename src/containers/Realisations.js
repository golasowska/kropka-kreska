import React, { Component } from 'react';
import { connect } from 'react-redux';

class Realisations extends Component {
  renderGallery = () => {
    return this.props.projectsList.map(item => {
      return item.photos.map(photo => {
        return (
          <img
            key={photo}
            className="img-fluid col col-md-10 photo-gallery"
            src={photo}
            alt="gallery-project"
          />
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
        <div className="row justify-content-center">{this.renderGallery()}</div>
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
