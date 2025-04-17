import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PricingPlanV6 from '../../components/pricing/PricingPlanV6';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Pricing5 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Digital Marketing Plans" pageLink=""
            image={"/images/gallery/pri2.jpg"}
            description={"Our marketing packages include SEO, social media management, Google Ads,  <br />and content strategy starting from basic plans for startups to advanced  <br />campaigns for growing brands. Transparent pricing with measurable results."} />
            <PricingPlanV6 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Pricing5;