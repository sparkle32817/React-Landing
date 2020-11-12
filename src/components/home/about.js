import React from 'react';

import { aboutStyle } from './styles';

const About = () => {
  const classes = aboutStyle();

  return (
    <div id="about" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <div className="bg-number">1</div>
          <h2 className="title section-title has-text-centered dark-text"> About us </h2>
          <div className={`subtitle has-text-centered is-tablet-padded ${classes.subtitle}`}>
            Founded by an X-Software Engineer and IT Project Manager with over 12+ years in in IT spanning the Banking & Finance, Health and Education sectors.<br />
            With his leadership and expertise and a diverse team of creative, hard working engineers and designers.<br />
            We aim to provide cost-effective apps to small and midsized companies and organizations avoiding all greedy business models.
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className={classes.title}>
              SOFTWARE IS DEVOTING THE WORLD
            </div>
            <div>
              <img className={classes.img} src="img/about/2.jpg" />
            </div>
            <p className="box-content is-tablet-padded text-justify">
              Each company is a software company. The high-quality software comes from a scalable and secure architecture, a disciplined product design, and repeatable and reliable delivery processes. Modern API strategies facilitate reuse through multichannel interfaces (eg, web, mobile, chat).
            </p>
          </div>
          <div className="column">
            <div className={classes.title}>
              HOW WE OPERATE
            </div>
            <div>
              <img className={classes.img} src="img/about/3.jpg" />
            </div>
            <p className="box-content is-tablet-padded text-justify">
              Our App Dev team (application development) is made up of enthusiastic agnostic technicians with a wide range of knowledge in popular modern and traditional languages such as Java, .NET, Ruby on Rails, Node.js, and JavaScript, Python, and PHP.
              <br />We firmly believe that the guidance could be integrated with the delivery of software and our main objective is to help them to be associated with the measure of their potential and the total cost of ownership and maintenance of their systems.
            </p>
          </div>
          <div className="column">
            <div className={classes.title}>
              NEW SERVICE
            </div>
            <div>
              <img className={classes.img} src="img/about/4.jpg" />
            </div>
            <p className="box-content is-tablet-padded text-justify">
              The good products come from high-quality software engineering along with the hand with a great visual design, exhaustive problems, and delivery of viable DevOps. We offer a completely customized software system.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
