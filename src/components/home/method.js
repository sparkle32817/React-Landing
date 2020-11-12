import React from 'react'

const Method = () => {
  return (
    <section id="method" className="section section-feature-grey is-medium">
        <div className="container">
            <div className="section-title-wrapper">
                <div className="bg-number">5</div>
                <h2 className="title section-title has-text-centered dark-text"> Methodology </h2>
                <div className="subtitle has-text-centered is-tablet-padded">
                    Our support team will do everything to make you feel comfortable with our application and services. Just ask them !
                </div>
            </div>

            <div className="content-wrapper">
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="feature-card card-md is-startup light-bordered hover-inset has-text-centered is-card-reveal">
                            <div className="card-icon">
                                <img src="img/method/lifesaver.svg" alt="" />
                            </div>
                            <div className="card-title">
                                <h4>Support center</h4>
                            </div>
                            <div className="card-feature-description">
                                <span className="">Delivery of products/projects is incremental</span>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="feature-card card-md is-startup light-bordered hover-inset has-text-centered is-card-reveal">
                            <div className="card-icon">
                                <img src="img/method/wallet.svg" alt="" />
                            </div>
                            <div className="card-title">
                                <h4>Free updates</h4>
                            </div>
                            <div className="card-feature-description">
                                <span className="">Every release goes through a strict cycle of system integration testing and user acceptance testing</span>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="feature-card card-md is-startup light-bordered hover-inset has-text-centered is-card-reveal">
                            <div className="card-icon">
                                <img src="img/method/building.svg" alt="" />
                            </div>
                            <div className="card-title">
                                <h4>Support scaling</h4>
                            </div>
                            <div className="card-feature-description">
                                <span className="">We gradually build a product and close a project till perfection</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Method
