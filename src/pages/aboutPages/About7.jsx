import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import AboutV8 from '../../components/about/AboutV8';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const About7 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="About Us" pageLink="about"
             image={"/images/gallery/gallery-two-1.png"}
             description={"Software Stories Ltd. builds best websites on high performance engines. <br /> that deliver solutions to all your needs. We guarantee to work alongside <br /> you to attain smooth integration of modern technologies into your website.<br/> That will elevate your brand in the online space."}
             /> 
            <AboutV8 aboutSpace="pb-120" />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default About7;