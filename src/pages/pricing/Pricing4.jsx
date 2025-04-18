import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PricingPlanV4 from '../../components/pricing/PricingPlanV4';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Pricing4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle=" Cybersecurity Pricing" pageLink=""
            image={"/images/gallery/cyb1.jpg"}
            description={"Protecting your digital assets shouldn’t break the bank. We offer budget <br />friendly packages for penetration testing, vulnerability assessments, <br />firewall setups, and complete cybersecurity audits all designed  <br />to safeguard your business."} />
            <PricingPlanV4 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Pricing4;