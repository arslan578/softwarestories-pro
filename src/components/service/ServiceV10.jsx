import React from 'react';
import { Fade } from 'react-reveal';
import commentAuthor from '/images/testimonials/comment-author.jpg'
import ServiceV10Data from '../../jsonData/ServiceV10Data.json'
import SingleServiceV10 from './SingleServiceV10';

const ServiceV10 = () => {
    return (
        <>
            <section className="services-nine pt-90 rpt-45 pb-130 rpb-100">
                <div className="container container-1250">
                    <div className="row justify-content-between align-items-center">
                        <Fade left delay={200}>
                            <div className="col-lg-5 ">
                                <div className="section-title mb-45">
                                <span className="sub-title-two mb-20">What We Offer</span>
                        <h2>Powerful Features Tailored for Your Business</h2>

                                </div>
                            </div>
                        </Fade>
                        <div className="col-lg-7">
                            <Fade right delay={200}>
                                <div className="author-comment mb-45">
                                    <div className="author">
                                       
                                    </div>
                                    <div className="text">We are turning abstract concepts into the best software solutions with due care, passion, and performance in mind.
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <div className="row small-gap">
                        {ServiceV10Data.map(service =>
                            <div className="col-xl-3 col-lg-4 col-sm-6" key={service.id}>
                                <SingleServiceV10 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceV10;