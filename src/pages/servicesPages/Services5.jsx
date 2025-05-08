import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServiceV5 from '../../components/service/ServiceV5';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';
import BrandV1 from '../../components/brand/BrandV1';
import GalleryV3 from '../../components/gallery/GalleryV3';
import BlogV2 from '../../components/blog/BlogV2';
import GalleryV5 from '../../components/gallery/GalleryV5';
import CallToActionV2 from '../../components/callToAction/CallToActionV2';

const Services5 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Software Development" pageLink=""
            image={"/images/gallery/cyb1.jpg"}
            description={" Web development, app development, and IT solutions  by Software Stories <br />LTD help companies stand out in this digital era."}

            />  
            <ServiceV5 />
            <BrandV1 />
            <GalleryV5 />
            <WorkProgressV6 />
            <GalleryV3 />
            <PricingPlanV2 />
            <CallToActionV2 />
            <BlogV2 blogClass="pb-10 rpb-25" />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services5;