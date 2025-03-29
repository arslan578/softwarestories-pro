import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import aboutThumb1 from '/images/about/about-three-1.jpg'
import aboutThumb2 from '/images/about/about-three-2.jpg'

const AboutV3 = ({ aboutClass }) => {
    return (
        <>
            <section className={`about-three ${aboutClass}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade left delay={300}>
                                <div className="about-three-image rmb-60 mr-10 rmr-0">
                                    <img src={aboutThumb1} alt="About" />
                                    <img src={aboutThumb2} alt="About" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade right delay={300}>
                                <div className="about-content pl-70 rpl-0">
                                    <div className="section-title mb-35">
                                    <span className="sub-title">IT Solutions for Your Business</span>
                                            <h2>Preparing for your success trusted source in IT services.</h2>
                                        </div>
                                        <p>At Software Stories LTD, we provide cutting-edge technology solutions to 
                                            help businesses thrive in the digital world.</p>
                                    <ul className="list-style-three mt-15">
                                        <li>which means as the company ramps</li>
                                        <li>Available in 14.1-in. and 16-in. versions.</li>
                                        <li>The potential loss of the Touch Bar.</li>
                                        <li>High-speed USB 4.0.</li>
                                    </ul>
                                    <Link to="/about#" className="theme-btn style-three mt-25">View details</Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV3;