import React from 'react';

import { visionStyle } from './styles';

const Vision = () => {
  const classes = visionStyle();

  return (
    <section id="vision" className="section section-light-grey no-padding-bottom">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="bg-number">2</div>
          <h2 className="title section-title has-text-centered dark-text"> Vision</h2>
          <div className="subtitle has-text-centered is-tablet-padded">
            Be in the top 5% of small to medium app development companies in the region.
          </div>
        </div>
        <div className={`content-wrapper ${classes.img}`}>
          <div className="columns">
            <div className="column d-flex justify-content-center">
              <img className="is-block" src="img/vision/1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
