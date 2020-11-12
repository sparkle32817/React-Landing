import React from 'react';

import { missionStyle } from './styles';

const Mission = () => {
  const classes = missionStyle();

  return (
    <div id="mission" className="section section-feature-grey">
        <div className="container">
            <div className="section-title-wrapper">
                <div className="bg-number">3</div>
                <h2 className="title section-title has-text-centered dark-text"> Mission </h2>
                <div className={`subtitle has-text-centered is-tablet-padded ${classes.subtitle}`}>
                  Be part of the digitization initiative in our nation by spreading technology in the region’s market and society.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission
