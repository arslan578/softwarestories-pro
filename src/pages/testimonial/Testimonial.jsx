import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import AboutV3 from '../../components/about/AboutV3';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import TestimonialV3 from '../../components/testimonial/TestimonialV3';

const Testimonial = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="John Doe" pageLink=""
            image={"/images/gallery/dig22.jpg"}
            description={"CEO, Tech Innovations Inc.Software Stories revolutionized our <br/>customer support with their AI chatbot solution. It’s not just  <br/>efficient it’s a game changer for our busines."} />
            <TestimonialV1 />
            <TestimonialV2 />
            <TestimonialV3 />
            <AboutV3 aboutClass="pt-120 rpt-100 pb-240 rpb-150" />
            <WorkProgressV3 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Testimonial;