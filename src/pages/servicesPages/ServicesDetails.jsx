import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServicesDetailsContent from './ServicesDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';
import AboutV2 from '../../components/about/AboutV2';
import GalleryV2 from '../../components/gallery/GalleryV2';
import BlogV2 from '../../components/blog/BlogV2';
import BrandV1 from '../../components/brand/BrandV1';
import CollectionGallery from '../../components/collection/CollectionGallery';
import CallToActionV2 from '../../components/callToAction/CallToActionV2';
import SubscribeV2 from '../../components/subscribe/SubscribeV2';
import AboutV8 from '../../components/about/AboutV8';
import ServiceV8 from '../../components/service/ServiceV8';
import SolutionV1 from '../../components/others/SolutionV1';
import FaqV1 from '../../components/faq/FaqV1';
import BannerV7 from '../../components/banner/BannerV7';

const ServicesDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Service Details" pageLink="" />
            <AboutV2 />
            <BannerV7 />
                <AboutV8 />
                <ServiceV8 />
                <SolutionV1 />
                <FaqV1 />
             <GalleryV2 />
             <BrandV1 />
             <CollectionGallery />
             <CallToActionV2 />
            <BlogV2 blogClass="has-bg pb-90 rpb-70" />
            <ServicesDetailsContent />
            <SubscribeV2 />
            <FooterV2 />
        </>
    );
};

export default ServicesDetails;