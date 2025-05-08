import React from 'react';
import { Fade } from 'react-reveal';

const AboutTabV1Content = () => {
    return (
        <>
            <ul className="nav nav-tabs about-tab">
                <li className='nav-item' role='presentation'>
                    <a className="active" data-bs-toggle="tab" data-bs-target="#tabContent1">
                        <i className="flaticon-web-maintenance"></i>
                        <h3>Cybersecurity</h3>
                    </a>
                </li>
                <li className='nav-item' role='presentation'>
                    <a data-bs-toggle="tab" data-bs-target="#tabContent2">
                        <i className="flaticon-web-development-4"></i>
                        <h3>Digital Marketing</h3>
                    </a>
                </li>
                <li className='nav-item' role='presentation'>
                    <a data-bs-toggle="tab" data-bs-target="#tabContent3">
                        <i className="flaticon-web-programming"></i>
                        <h3>Web Development</h3>
                    </a>
                </li>
                <li className='nav-item' role='presentation'>
                    <a data-bs-toggle="tab" data-bs-target="#tabContent4">
                        <i className="flaticon-coding-5"></i>
                        <h3>App Development</h3>
                    </a>
                </li>
            </ul>

            <div className="tab-content about-tab-content">
                {/* Cybersecurity */}
                <div className="tab-pane fade show active" id="tabContent1" role="tabpanel">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade className="fadeInLeft" delay={300}>
                                <div className="about-image-shape rmb-70">
                                    <img src="/images/about/about-1.jpg?url" alt="Cybersecurity" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="fadeInRight" delay={300}>
                                <div className="about-content pr-70 rpr-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title">Cybersecurity</span>
                                        <h2>Safeguarding Your Business with Elite Cybersecurity</h2>
                                    </div>
                                    <p>At Software Stories Ltd, we take safeguarding your digital assets seriously.
                                        Our cybersecurity services help keep your data encrypted, protected under advanced security protocols,
                                        and shield against potential threats to keep your business secure.</p>
                                    <ul className="list-style-one mt-15">
                                        <li>Network Security</li>
                                        <li>Threat Detection</li>
                                        <li>Firewall Management</li>
                                        <li>Data Encryption</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* Digital Marketing */}
                <div className="tab-pane fade" id="tabContent2" role="tabpanel">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade className="fadeInLeft" delay={300}>
                                <div className="about-image-shape rmb-70">
                                    <img src="/images/about/about-2.jpg?url" alt="Digital Marketing" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="fadeInRight" delay={300}>
                                <div className="about-content pr-70 rpr-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title">Digital Marketing</span>
                                        <h2>Grow Your Brand with Smart Digital Strategies</h2>
                                    </div>
                                    <p>Turning visibility into growth is Software Stories' goal as they assist companies with clever and efficient digital market strategies, enthralling visitors and continuing to be distinguishable on the Web.</p>
                                    <ul className="list-style-one mt-15">
                                        <li>Social Media Marketing</li>
                                        <li>SEO Optimization</li>
                                        <li>Email Campaigns</li>
                                        <li>Content Creation</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* Web Development */}
                <div className="tab-pane fade" id="tabContent3" role="tabpanel">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade className="fadeInLeft" delay={300}>
                                <div className="about-image-shape rmb-70">
                                    <img src="/images/about/about-3.png?url" alt="Web Development" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="fadeInRight" delay={300}>
                                <div className="about-content pr-70 rpr-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title">Web Development</span>
                                        <h2>High-Performance Websites That Deliver</h2>
                                    </div>
                                    <p>At Software Stories LTD, we envision enabling businesses to build websites that are beautiful, responsive, and high performing, turning ideas into meaningful digital experiences.</p>
                                    <ul className="list-style-one mt-15">
                                        <li>Custom Web Apps</li>
                                        <li>Frontend/Backend Development</li>
                                        <li>API Integration</li>
                                        <li>Performance Optimization</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                {/* App Development */}
                <div className="tab-pane fade" id="tabContent4" role="tabpanel">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade className="fadeInLeft" delay={300}>
                                <div className="about-image-shape rmb-70">
                                    <img src="/images/about/about-4.jpg?url" alt="App Development" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="fadeInRight" delay={300}>
                                <div className="about-content pr-70 rpr-0">
                                    <div className="section-title mb-35">
                                        <span className="sub-title">App Development</span>
                                        <h2>Building Scalable and Engaging Mobile Apps</h2>
                                    </div>
                                    <p>The thing that Software Stories wants to accomplish is to help firms convert their app concepts into practical, wonderful, and scalable mobile applications on a global stage.</p>
                                    <ul className="list-style-one mt-15">
                                        <li>Cross-platform Apps</li>
                                        <li>UI/UX Design</li>
                                        <li>App Store Deployment</li>
                                        <li>Ongoing Maintenance</li>
                                    </ul>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutTabV1Content;
