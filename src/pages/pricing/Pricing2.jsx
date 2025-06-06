import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Pricing2 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Web Development Packages" pageLink=""
            image={"/images/gallery/pri2.jpg"}
            description={"We offer tailored web development packages for static websites, dynamic platforms,  <br />e-commerce solutions, and enterprise-level applications. Our pricing is based on features, <br /> complexity, and timeline to ensure high value for your investment."} />
            <PricingPlanV2 pricingClass="pb-200" partial={false} />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Pricing2;