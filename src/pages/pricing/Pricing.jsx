import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PricingPlanV1 from '../../components/pricing/PricingPlanV1';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Pricing = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Our Pricing Plans" pageLink=""
            image={"/images/gallery/pri1.jpg"}
            description={"Explore our flexible pricing options designed to fit businesses of all sizes. <br/> Whether you're a startup or an enterprise, Software Stories Ltd. offers scalable <br/> solutions to match your goals and budget. Choose the plan that’s right for you."} />
            <PricingPlanV1 pricingClass="pb-200" partial={false} />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Pricing;