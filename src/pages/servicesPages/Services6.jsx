import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServiceV7 from '../../components/service/ServiceV7';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Services6 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Digital Marketing." pageLink="" 
            image={"/images/gallery/project1.jpg"}
            description={" Boost your online reach with App Templates LTD the best name <br/>to appraise for expert SEO and social media and performance marketing services."}

            /> 
            <ServiceV7 />
            <WorkProgressV6 />
            <PricingPlanV2 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services6;