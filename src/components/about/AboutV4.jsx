import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import aboutThumb from '/images/about/about-four.jpg'
import aboutThumb2 from '/images/about/about-four-2.jpg'
import aboutCircle from '/images/about/about-circle-dots.png'
import logoCircle from '/images/logos/logo-circle.png'

const AboutV4 = () => {
    return (
        <>
            <section className="about-section style-four py-120 rpy-100">
                <div className="container pb-120 rpb-95">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade left delay={300}>
                                <div className="about-content pr-90 rpr-0 rmb-55">
                                    <div className="section-title mb-35">
                                    <span className="sub-title">IT Solutions for Your Business</span>
                                            <h2>Preparing for your success trusted source in IT services.</h2>
                                        </div>
                                        <p>At Software Stories Ltd, we create brilliant ideas into reality through strong digital solutions. Mobile applications, online security, 
                                            or a digital marketing drive, whatever your business requirements, we have you covered.</p>
                                    <i>Empowering businesses with top-notch web and app development solutions 
                                        for a seamless digital experience.</i>
                                    <Link to="/about#" className="theme-btn mt-25">Learn About More</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade right delay={300}>
                                <div className="about-four-images text-center">
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={aboutThumb} alt="About" />
                                            <img className="about-bg-circle d-block mx-auto" src={aboutCircle} alt="About" />
                                        </div>
                                        <div className="col-6">
                                            <img className="bg-circle-dtos mb-35 d-block mx-auto" src={logoCircle} alt="Logo" />
                                            <img src={aboutThumb2} alt="About" />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV4;