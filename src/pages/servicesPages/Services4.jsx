import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServiceV4 from '../../components/service/ServiceV4';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';
import BrandV1 from '../../components/brand/BrandV1';
import GalleryV3 from '../../components/gallery/GalleryV3';
import BlogV2 from '../../components/blog/BlogV2';
import AboutTabV1 from '../../components/about/AboutTabV1';
import CallToActionV2 from '../../components/callToAction/CallToActionV2';


const Services4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="AI & Automation Services" pageLink="" 
            image={"/images/gallery/pic.jpg"}
            description={" Software Stories LTD is an IT Consulting, website, and app development company  that  also<br/>   provides managed IT services. It helps business grow with its innovative technology solutions.."}

            />  
               <AboutTabV1 /> 
             
            <ServiceV4 serviceSpace="pb-100" />
            <BrandV1 />
            <WorkProgressV6 />
            <GalleryV3 />
            <CallToActionV2 />
            <BlogV2 blogClass="pb-10 rpb-25" />
            <PricingPlanV2 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services4;