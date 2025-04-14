import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import AboutV7 from '../../components/about/AboutV7';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const About6 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="About Us" pageLink="about"
             image={"/images/gallery/abu6.jpg"}
             description={"Software Stories Ltd. builds best websites on high performance engines. <br /> that deliver solutions to all your needs. We guarantee to work alongside <br /> you to attain smooth integration of modern technologies into your website.<br/> That will elevate your brand in the online space."}
             /> 
            <AboutV7 aboutSpace="py-120" />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default About6;