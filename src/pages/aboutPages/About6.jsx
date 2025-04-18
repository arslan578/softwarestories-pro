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
            <BreadCums pageTitle="Why Choose Us" pageLink=""
             image={"/images/gallery/abu6.jpg"}bout
             description={"Choosing Software Stories Ltd. means choosing reliability, <br/>innovation, and results.We listen, we build, and we deliver <br/>on time and with quality.Our focus is on understanding <br/>your goals and turning them into powerful digital solutions.."}
             /> 
            <AboutV7 aboutSpace="py-120" />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default About6;