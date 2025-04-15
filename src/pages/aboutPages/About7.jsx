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
            <BreadCums pageTitle="Our Values" pageLink=""
             image={"/images/gallery/gallery-two-1.png"}
             description={"We believe in: Integrity  We do what’s right, always.Innovation <br/> We embrace change and lead with new ideas.Customer Centricity <br/> Your needs shape our solutions.Quaity  We aim for excellence in  <br/>everything we build.."}
             /> 
            <AboutV8 aboutSpace="pb-120" />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default About7;