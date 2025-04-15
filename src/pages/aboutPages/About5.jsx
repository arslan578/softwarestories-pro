import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import AboutV5 from '../../components/about/AboutV5';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const About5 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Our Team" pageLink="" 
             image={"/images/gallery/abu1.jpg"}
             description={" Software Stories Ltd. is a passionate team of developers, designers, <br/> marketers, and tech experts.We value collaboration, creativity, and <br/>a drive to keep learning.Every member of our team brings unique <br/>skills to build solutions that matter.We’re not just a company we <br/> are a family working toward a shared vision."}
             />
            <AboutV5 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default About5;