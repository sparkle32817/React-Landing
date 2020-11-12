import React from 'react';
import { footerStyle } from './styles';

const Footer = () => {
  const classes = footerStyle();

  return (
    <footer id="dark-footer" className="footer footer-dark">
      <div className="container">
        <div className="columns">
          <div className="column d-flex align-items-center">
            <span className={classes.mail}>
              Email: <a className={classes.link} href="mailto:info@nalmar.io" target="_blank">info@nalmar.io</a>
            </span>
          </div>
          <div className="column d-flex align-items-center">
            <span className={classes.whatsapp}>
              Whatsapp: <a className={classes.link} href="https://api.whatsapp.com/send?phone=966562666638" target="_blank">+966-562666638</a>
            </span>
          </div>
          <div className="column">
            <div className="footer-header">
              <nav className="level is-mobile">
                <div className="level-left level-social">
                  <a href="#" className="level-item">
                    <span className={classes.socialIcon}><i className="fa fa-facebook"></i></span>
                  </a>
                  <a href="https://twitter.com/ionalmar" className="level-item">
                    <span className={classes.socialIcon}><i className="fa fa-twitter"></i></span>
                  </a>
                  <a href="https://www.instagram.com/nalmar.io/" className="level-item">
                    <span className={classes.socialIcon}><i className="fa fa-instagram"></i></span>
                  </a>
                  <a href="#" className="level-item">
                    <span className={classes.socialIcon}><i className="fa fa-github"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
