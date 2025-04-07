import React from 'react';
import { Fade } from 'react-reveal';
import ContactV2Thumb from '../../components/contact/ContactV2Thumb';
import serviceDetailsThumb from '/images/services/service-details.jpg'
import { HashLink as Link } from 'react-router-hash-link';
import SingleServicesDetailsFeature from './SingleServicesDetailsFeature';
import FeatureV1Data from '../../jsonData/FeatureV1Data.json'

const ServicesDetailsContent = () => {
    return (
        <>
            <section className="service-details pt-120 rpt-100 pb-100 rpb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Fade left delay={200}>
                                <div className="service-sidebar rmb-55">
                                    <div className="widget widget-services">
                                    <ul>
    <li><Link to="#">Web Development</Link></li>
    <li><Link to="#">App Development</Link></li>
    <li><Link to="#">Cybersecurity</Link></li>
    <li><Link to="#">Digital Marketing</Link></li>
</ul>
</div>
<ContactV2Thumb />
</div>
</Fade>
</div>
<div className="col-lg-8">
    <Fade right delay={200}>
        <div className="service-details-content">
            <div className="image mb-40">
                <img src={serviceDetailsThumb} alt="Service Details" />
            </div>
            <h2>Web Development</h2>
            <p>At Software Stories Ltd., we specialize in creating user-friendly, high-performance websites tailored to meet your business needs. Our team ensures the seamless integration of modern technologies to help your brand stand out in the digital world.</p>
            <ul className="list-style-three pt-15 pb-30">
                <li>Custom web development with responsive design</li>
                <li>Performance optimization and scalability</li>
                <li>SEO-friendly websites to boost visibility</li>
                <li>E-commerce solutions for businesses of all sizes</li>
            </ul>
            <h3>Explore our App Development services</h3>
            <p>Our app development services are focused on delivering intuitive, innovative, and high-performance mobile applications. Whether you're looking for an Android or iOS app, our team works closely with you to turn your idea into a successful product.</p>
            <h3>Cybersecurity</h3>
            <p>At Software Stories Ltd., we understand the importance of safeguarding your digital assets. Our cybersecurity services ensure your data is protected with the latest encryption and security protocols, keeping your business safe from potential threats.</p>
            <h3>Digital Marketing</h3>
            <p>Our digital marketing solutions help you reach your target audience effectively. From SEO to social media management, we create personalized strategies to enhance your online presence and drive more business to your doorstep.</p>
     

                                    <div className="row pt-25">
                                        {FeatureV1Data.slice(0, 3).map(feature =>
                                            <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6" key={feature.id}>
                                                <SingleServicesDetailsFeature feature={feature} />
                                            </div>
                                        )}
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

export default ServicesDetailsContent;