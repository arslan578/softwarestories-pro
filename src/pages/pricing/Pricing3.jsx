import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PricingPlanV3 from '../../components/pricing/PricingPlanV3';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Pricing3 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle=" App Development Plans" pageLink=""
            image={"/images/gallery/pri5.jpg"}
            description={"Our mobile app pricing is flexible and based on your platform (Android/iOS),  <br />feature requirements, and UI complexity. From MVPs to full-scale apps, <br /> we offer competitive pricing with reliable development timelines."} />
            <PricingPlanV3 pricingClass="pb-200" />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Pricing3;