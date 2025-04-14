import React from 'react';
import faqTriangle from '/images/shapes/faq-triangle.png';
import { HashLink as Link } from 'react-router-hash-link';

const FaqV1 = () => {
    return (
        <>
            <section className="faq-page rel z-1 pt-150 rpt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-accordion rmb-55" id="faq-accordion">
                                <div className="card">
                                    <Link className="card-header" id="heading0" to="#" data-bs-toggle="collapse" data-bs-target="#collapse0" aria-expanded="true" aria-controls="collapse0">
                                        What services does your company provide?
                                        <span className="toggle-btn"></span>
                                    </Link>
                                    <div id="collapse0" className="collapse show" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p>Our main areas of focus are Web Development, Cyber Security, Mobile App Development, and Data Analytics. Looking at delivering creative solutions to suit clients' requirements.
                                            .</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <Link className="collapsed card-header" id="heading1" to="#" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                        Why choose us for Web Development?
                                        <span className="toggle-btn"></span>
                                    </Link>
                                    <div id="collapse1" className="collapse" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p> We develop trending websites, adaptive and search engine optimization websites to meet the distinct need of your business. Testing for the best performance and user experiences is paramount in our website creations..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <Link className="collapsed card-header" id="heading2" to="#" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                        How do we ensure Cyber Security?
                                        <span className="toggle-btn"></span>
                                    </Link>
                                    <div id="collapse2" className="collapse" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p>With a formidable range of security audits, threat prevention, and vulnerability assessments, we give surety that your digital infrastructure's safety from potential cyber threats and attacks.
                                            .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="faq-content">
                                <div className="section-title mb-30">
                                    <span className="sub-title">05 FAQ</span>
                                    <h2>Have Questions About Our Services?</h2>
                                </div>
                                <p>Founded on the skills harnessed in masterful Web Development, Cyber Security, and Digital Solutions, pour out your heart with us for business growth in the most perfect and securely idealized way..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-triangle">
                    <img src={faqTriangle} alt="Triangle" />
                </div>
                <div className="faq-box-shape"></div>
            </section>
        </>
    );
};

export default FaqV1;
