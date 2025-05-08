import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServiceV1 from '../../components/service/ServiceV1';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';
import BrandV1 from '../../components/brand/BrandV1';
import GalleryV3 from '../../components/gallery/GalleryV3';
import BlogV2 from '../../components/blog/BlogV2';
import BannerV5 from '../../components/banner/BannerV5';
import AboutTabV1 from '../../components/about/AboutTabV1';
import CallToActionV2 from '../../components/callToAction/CallToActionV2';

const Services2 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Cyber Secuity" pageLink=""
            image={"/images/gallery/cyb1.jpg"}
            description={" Software Stories LTD. is committed to keeping a company's digital <br/> footprint alive as one of the latest cybersecurity solutions as well <br/>as providing customer data protection and safety, including peace of mind."}

            /> 
              <BannerV5 />
              <AboutTabV1 />
            <ServiceV1 />
            <BrandV1 />
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

export default Services2;