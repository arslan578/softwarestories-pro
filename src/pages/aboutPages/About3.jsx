import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const About3 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Our Vision" pageLink=""
             image={"/images/gallery/dig22.jpg"}
             description={"We envision a world where technology empowers every business <br/>to grow smarter and faster.At Software Stories Ltd., our goal is to <br/>be a global leader in creating digital solutions that are intuitive, <br/>scalable, and future-ready.We strive to inspire innovation and <br/>drive meaningful change through technology."}
             /> 
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default About3;