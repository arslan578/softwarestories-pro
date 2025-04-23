import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import FeatureV1 from '../../components/feature/FeatureV1';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';
import BrandV1 from '../../components/brand/BrandV1';
import GalleryV3 from '../../components/gallery/GalleryV3';
import BlogV2 from '../../components/blog/BlogV2';
import CallToActionV2 from '../../components/callToAction/CallToActionV2';

const Services = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Web Development" pageLink="" 
             image={"/images/gallery/pick3.jpg"}
             description={"Software Stories Ltd. builds best websites on high performance engines. <br /> that deliver solutions to all your needs. We guarantee to work alongside <br /> you to attain smooth integration of modern technologies into your website.<br/> That will elevate your brand in the online space."}
             />
            <FeatureV1 featureSpace="pt-115" />
            <BrandV1 />
            <WorkProgressV6 />
            <GalleryV3 />
            <PricingPlanV2 />
            <BlogV2 blogClass="pb-10 rpb-25" />
            <CallToActionV2 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services;