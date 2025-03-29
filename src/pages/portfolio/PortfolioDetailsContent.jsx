import React from 'react';
import portfolioDetails from '/images/gallery/portfolio-details.jpg'
import portfolioThumb1 from '/images/gallery/portfolio-middle-1.jpg'
import portfolioThumb2 from '/images/gallery/portfolio-middle-2.jpg'
import ContactV2Thumb from '../../components/contact/ContactV2Thumb';
import PortfolioDetailsData from '../../jsonData/PortfolioDetailsData.json'
import SinglePortfolioDetailsContent from './SinglePortfolioDetailsContent';
import PortfolioNextPrev from './PortfolioNextPrev';
import PortfolioRelatedProject from './PortfolioRelatedProject';

const PortfolioDetailsContent = () => {
    return (
        <>
            <section className="portfolio-details pt-120 rpt-100 pb-90 rpb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-content rmb-55">
                                <div className="image mb-35">
                                    <img src={portfolioDetails} alt="Portfolio Details" />
                                </div>
                                <h2>Web Development</h2>
                                <p>At Software Stories LTD, we specialize in delivering top-tier technology solutions, including web and mobile app development, IT consultancy, and data analytics. Our mission is to empower businesses with cutting-edge digital solutions that drive success and efficiency.

                 With a team of experienced developers and IT professionals, we create scalable, secure, and innovative applications tailored to meet your business needs. Whether you require a high-performance website, a feature-rich mobile app, or expert guidance in technology strategy, 
                 we are here to help. Let’s build the future of technology togethe</p>
                                <div className="row mt-45">
                                    <div className="col-sm-6">
                                        <div className="image mb-30">
                                            <img src={portfolioThumb1} alt="Portfolio" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="image mb-30">
                                            <img src={portfolioThumb2} alt="Portfolio" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-sidebar">
                                <div className="widget widget-portfolio-info bg-lighter p-45 wow fadeInUp delay-0-3s">
                                    <h3 className="widget-title">Project Details</h3>
                                    <ul>
                                        {PortfolioDetailsData.map(details =>
                                            <SinglePortfolioDetailsContent details={details} key={details.id} />
                                        )}
                                    </ul>
                                </div>
                                <ContactV2Thumb />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PortfolioNextPrev />
            <PortfolioRelatedProject />
        </>
    );
};

export default PortfolioDetailsContent;