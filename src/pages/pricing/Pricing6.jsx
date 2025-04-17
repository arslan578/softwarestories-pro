import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PricingPlanV7 from '../../components/pricing/PricingPlanV7';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Pricing6 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Hosting & Maintenance Packages" pageLink=""
            image={"/images/gallery/back-1.jpg"}
            description={"We provide fast, secure hosting and regular site maintenance at affordable monthly rates.  <br />Includes domain support, backups, performance monitoring, and security updates so your <br /> website stays live, fast, and safe."} />
            <PricingPlanV7 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Pricing6;