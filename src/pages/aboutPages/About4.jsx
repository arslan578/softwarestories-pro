import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import AboutV4 from '../../components/about/AboutV4';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

import AboutTabV1 from '../../components/about/AboutTabV1';
import CallToActionV2 from '../../components/callToAction/CallToActionV2';



const About4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Our Services" pageLink=""
             image={"/images/gallery/web4.png"}
             description={"At Software Stories Ltd we offer smart,  services to help businesses <br/>Web Development  Fast, responsive, and modern websites. <br/> App Development  User-friendly mobile and desktop applications.<br/> Cybersecurity  Protecting your data and digital assets. <br/> Digital Marketing SEO, social media, and content strategies that get results. <br/>We combine technology and creativity to deliver solutions that make an impact."}
             /> 
               
               <AboutTabV1 />
               
            <AboutV4 />
            <CallToActionV2 />
            
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default About4;