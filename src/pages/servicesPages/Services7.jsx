import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServiceV8InnerPage from '../../components/service/ServiceV8InnerPage';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';
import BrandV1 from '../../components/brand/BrandV1';

const Services7 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Cloud Services & Hosting" pageLink=" " 
            image={"/images/gallery/project3.jpg"}
          description={"We offer end-to-end cloud solutions to keep your digital presence fast, secure, and <br/> always online. From scalable cloud deployment to reliable web hosting, our services  <br/>ensure that your applications run smoothly with minimal downtime. Whether you need  <br/> server setup, automated backups, domain management, or performance optimization <br/>we handle it all with care and expertise."}
          
          />
            <ServiceV8InnerPage />
            <BrandV1 />
            <WorkProgressV6 />
            <PricingPlanV2 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services7;