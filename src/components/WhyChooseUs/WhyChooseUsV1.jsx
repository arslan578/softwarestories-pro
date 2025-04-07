import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import whyChooseThumb from '/images/about/why-choose-mobileee.jpg'
import shape1 from '/images/hero/hero-ten-1.png'
import shape2 from '/images/hero/hero-ten-2.png'
import shape3 from '/images/hero/hero-ten-3.png'
import shape4 from '/images/hero/hero-ten-4.jpg'

const WhyChooseUsV1 = () => {
    return (
        <>
            <section className="why-choose-us pb-130 rpb-100">
                <div className="container container-1635">
                    <div className="why-choose-inner">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-5 col-lg-6">
                                <Fade left delay={200}>
                                    <div className="why-choose-content rel z-2 mb-55">
                                        <div className="section-title mb-25">
                                        <span className="sub-title-two mb-25">Why Choose Us</span>
<h2>Smart Solutions, Seamless Experience</h2>
</div>
<p>At Software Stories Ltd., we simplify technology. Our applications are crafted to deliver powerful features while staying easy to use — helping businesses grow without complexity.</p>
<div className="row pt-20 pb-5">
    <div className="col-md-6">
        <div className="why-choose-item">
            <div className="icon">
                <i className="flaticon flaticon-3d-printing"></i>
            </div>
            <div className="content">
                <h3>Tailored Software Solutions</h3>
                <p>We design apps and platforms that fit your exact business requirements — no templates, just smart builds.</p>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <div className="why-choose-item">
            <div className="icon">
                <i className="flaticon flaticon-like-1"></i>
            </div>
            <div className="content">
                <h3>Reliable & Supportive Team</h3>
                <p>From concept to deployment, we’re with you every step — providing support you can count on.</p>
            </div>
        </div>
    </div>
</div>
<Link to="/contact#" className="theme-btn rtl-margin">
    Let’s Build Together <i className="fas fa-arrow-right"></i>
</Link>

                                    </div>
                                </Fade>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <Fade className="fadeInRight" delay={200}>
                                    <div className="why-choose-images mb-55 images-with-shapes">
                                        <Zoom delay={400}>
                                            <img className="mobile" src={whyChooseThumb} alt="Mobile" />
                                        </Zoom>
                                        <img className="shape one" src={shape1} alt="Shape" />
                                        <img className="shape two" src={shape2} alt="Shape" />
                                        <img className="shape three" src={shape3} alt="Shape" />
                                        <img className="shape four" src={shape4} alt="Shape" />
                                        <div className="circle-shapes-wrap">
                                            <div className="circle-shape"></div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUsV1;