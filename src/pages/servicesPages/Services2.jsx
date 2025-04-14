import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServiceV1 from '../../components/service/ServiceV1';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Services2 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Cyber Secuity" pageLink=""
            image={"/images/gallery/cyb1.jpg"}
            description={" Software Stories LTD. is committed to keeping a company's digital <br/> footprint alive as one of the latest cybersecurity solutions as well <br/>as providing customer data protection and safety, including peace of mind."}

            /> 
            <ServiceV1 />
            <WorkProgressV6 />
            <PricingPlanV2 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services2;