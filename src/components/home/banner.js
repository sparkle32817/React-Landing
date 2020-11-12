import React from 'react';

import { bannerStyle } from './styles';

const Banner = () => {
  const classes = bannerStyle();

  return (
    <React.Fragment>
      <div className={`Wallop Wallop--fade ${classes.root}`}>
        <div className="Wallop-list">
          <div className={`Wallop-item Wallop-item--current ${classes.bgImg}`}>
            <div className="Wallop-overlay"></div>
            <div className="Wallop-caption-wrapper" style={{zIndex: 1}}>
              <div className="container">
                <div className="columns is-gapless is-vcentered">
                  <div className="column is-5">
                    <div className="caption-inner">
                      <h1 style={{width:410}}>We are a very excellence team</h1>
                      {/* <div className="caption-divider"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot is-pulled">
        <div className="container">
          <div className="tabs partner-tabs is-centered">
            <ul>
              <li><a><img className="partner-logo" src="img/teches/1.jpg" alt="" /></a></li>
              <li><a><img className="partner-logo" src="img/teches/3.jpg" alt="" /></a></li>
              <li><a><img className="partner-logo" src="img/teches/2.jpg" alt="" /></a></li>
              <li><a><img className="partner-logo" src="img/teches/5.jpg" alt="" /></a></li>
              <li><a><img className="partner-logo" src="img/teches/6.jpg" alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
