import React from 'react';

import { taskStyle } from './styles';

const Task = () => {
  const classes = taskStyle();

  return (
    <div id="task" className="section section-light-grey">
        <div className="container"><div className="section-title-wrapper">
                <div className="bg-number">4</div>
                <h2 className="title section-title has-text-centered dark-text"> Task Force </h2>
            </div>

            <div className="content-wrapper">
                <div className="columns">
                    <div className="column is-6">
                        <img className="is-block" src="img/task/1.jpg" alt="" />
                    </div>
                    <div className="column is-6 is-offset-1 pt-40 pb-40 mobile-padding-20">
                      <span className="section-feature-description">                        
                        <ul className={classes.style}>
                          <li className={classes.subtitle}>Carefully selected after rigorous interviews & testing</li>
                          <li className={classes.subtitle}>Dedicated</li>
                          <li className={classes.subtitle}>Hard Workers</li>
                          <li className={classes.subtitle}>Ethical</li>
                          <li className={classes.subtitle}>Problems Solvers</li>
                          <li className={classes.subtitle}>Creative</li>
                        </ul>
                      </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Task
