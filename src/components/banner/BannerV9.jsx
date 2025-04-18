import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import heroThumb from '/images/hero/hero-eight.jpg'

const BannerV9 = () => {
    return (
        <>
            <section className="hero-section-eight z-1 rel">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-content-eight mr-10 rmr-0 py-160 rpy-100">
                                <Fade bottom delay={200}>
                                    <span className="sub-title d-block">Empowering Digital Transformation</span>
                                </Fade>
                                <Fade bottom delay={400}>
    <h1 className="mb-30">Build, Secure & Grow with Next-Gen Tech Solutions</h1>
</Fade>
<Fade bottom delay={600}>
    <p>The intention behind the functionalities we provide is to get the highest possible options
         in modern-day Web & App Development, Cybersecurity, AI Automation, 
        and Digital Marketing services adapted to all business needs..</p>
</Fade>
<Fade bottom delay={800}>
    <div className="hero-btns mt-30">
        <Link to="/about#" className="theme-btn gradient-btn-one mt-10">Explore Services</Link>
        <Link to="/contact#" className="theme-btn gradient-btn-two mt-10">Get in Touch</Link>
    </div>
</Fade>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-end">
                            <Fade bottom delay={800}>
                                <div className="hero-eight-image">
                                    <img src={heroThumb} alt="Hero" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerV9;