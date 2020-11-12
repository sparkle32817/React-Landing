import React, { useState, useEffect } from 'react';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    toggle: false,
    isTop: true
  });

  const _onClick = () => {
    setState({...state, toggle: !state.toggle})
  }

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setState({...state, isTop: false});
      } else {
        setState({...state, isTop: true});
      }
    }
  })

  return (
    <header className={`hero is-cover is-relative is-default is-bold ${classes.root}`}>
      <nav className={`navbar navbar-wrapper navbar-fade ${state.isTop? 'navbar-light is-transparent': 'navbar-faded'} ${state.toggle? 'is-dark-mobile': ''}`}>
        <div className="container">
          <div className="navbar-brand">
            <a className={`${classes.logoContainer}`} href="/">
              <img className={classes.logo} src="img/logo.png" alt="" />
            </a>
            <div
              className={`custom-burger ${state.toggle? 'is-active': ''}`}
              data-target="nav-menu"
              onClick={_onClick}
            >
              <a className="responsive-btn" href="#">
                <span className="menu-toggle">
                  <span className={`icon-box-toggle ${state.toggle? 'active': ''}`}> 	
                    <span className="rotate">
                      <i className="icon-line-top"></i>
                      <i className="icon-line-center"></i>
                      <i className="icon-line-bottom"></i> 
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div id="nav-menu" className={`navbar-menu ${classes.navmenu} ${state.toggle? 'is-active': ''}`}>
            <div className="navbar-start">
              <a
                className={`navbar-item ${classes.navitem}`}
                href="#about"
                onClick={_onClick}
              >
                About us
              </a>
              <a
                className={`navbar-item ${classes.navitem}`}
                href="#vision"
                onClick={_onClick}
              >
                Vision
              </a>
              <a
                className={`navbar-item ${classes.navitem}`}
                href="#mission"
                onClick={_onClick}
              >
                Mission
              </a>
              <a
                className={`navbar-item ${classes.navitem}`}
                href="#task"
                onClick={_onClick}
              >
                Task Force
              </a>
              <a
                className={`navbar-item ${classes.navitem}`}
                href="#method"
                onClick={_onClick}
              >
                Methodology
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
