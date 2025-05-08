import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServiceV7 from '../../components/service/ServiceV7';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';
import BrandV1 from '../../components/brand/BrandV1';
import GalleryV3 from '../../components/gallery/GalleryV3';
import BlogV2 from '../../components/blog/BlogV2';
import AboutV5 from '../../components/about/AboutV5';
import CallToActionV2 from '../../components/callToAction/CallToActionV2';
import AboutV8 from '../../components/about/AboutV8';

const Services6 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Digital Marketing." pageLink="" 
            image={"/images/gallery/project1.jpg"}
            description={" Boost your online reach with App Templates LTD the best name <br/>to appraise for expert SEO and social media and performance marketing services."}

            /> 
            <ServiceV7 />
            <BrandV1 />
            <AboutV5 />
            <AboutV8 />
            <GalleryV3 />
            <WorkProgressV6 />
            <PricingPlanV2 />
            <CallToActionV2 />
            <BlogV2 blogClass="pb-10 rpb-25" />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services6;