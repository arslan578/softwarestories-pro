import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import AboutV3 from '../../components/about/AboutV3';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV3 from '../../components/footer/FooterV3';

const About = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Who We Are" pageLink="" 
             image={"/images/gallery/abu5.jpg"}
             description={"Software Stories Ltd. is a creative tech company focused on building  <br/>smart digital solutions. We turn ideas into apps, websites, and strategies <br/> that help businesses grow.Our team of developers, designers, and tech <br/> experts works together to deliver reliable, scalable, and user-friendly software."}
             />
            <AboutV3 aboutClass="pt-120 rpt-100 pb-240 rpb-150" />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV3 />
        </>
    );
};

export default About;