import React from 'react';
import HeaderMenuV1 from '../../components/header/HeaderMenuV1';
import BannerV1 from '../../components/banner/BannerV1';

import AboutV1 from '../../components/about/AboutV1';
import FeatureV1 from '../../components/feature/FeatureV1';

import PricingPlanV1 from '../../components/pricing/PricingPlanV1';
import GalleryV1 from '../../components/gallery/GalleryV1';
import BlogV1 from '../../components/blog/BlogV1';
import FooterV1 from '../../components/footer/FooterV1';
import ContactV1 from '../../components/contact/ContactV1';
import BrandV1 from '../../components/brand/BrandV1';
import AboutTabV1 from '../../components/about/AboutTabV1';
import TeamV2 from '../../components/team/TeamV2';
// import BlogV6 from '../../components/blog/BlogV6';
import MobileUiV2 from '../../components/ui/MobileUiV1';
import CounterV1 from '../../components/counter/CounterV1';


const HomeOne = () => {
    return (
        <>
            <HeaderMenuV1 />
            <BannerV1 />
            <AboutTabV1 />
         
            <BrandV1 />
            <TeamV2 teamClass="has-bg" />
            {/* <BlogV6 /> */}
            {/* <ServiceV1 /> */}
            {/* <AboutV1 aboutClass="has-bg bg-light-black" textColor="text-white" /> */}
           <CounterV1 />
           <br />
           <br />
            {/* <FeatureV1 featureSpace="pt-240" /> */}
            <MobileUiV2 />
            {/* <WorkProgressV1 /> */}
            <PricingPlanV1 />
            <GalleryV1 />
           
            {/* <BlogV1 blogSpace="pb-90 rpb-70" /> */}
         
        
            <ContactV1 />
            <FooterV1 />
        </>
    );
};

export default HomeOne;