import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';

import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV3 from '../../components/footer/FooterV3';
import CallToActionV2 from '../../components/callToAction/CallToActionV2';
import AboutV1 from '../../components/about/AboutV1';

import FeatureV1 from '../../components/feature/FeatureV1';
import BrandV1 from '../../components/brand/BrandV1';
import AboutV7 from '../../components/about/AboutV7';
import AboutV8 from '../../components/about/AboutV8';

const About = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Who We Are" pageLink="" 
             image={"/images/gallery/abu5.jpg"}
             description={"Software Stories Ltd. is a creative tech company focused on building  <br/>smart digital solutions. We turn ideas into apps, websites, and strategies <br/> that help businesses grow.Our team of developers, designers, and tech <br/> experts works together to deliver reliable, scalable, and user-friendly software."}
             />
                 <AboutV1 counter={false} aboutClass="pb-240" />
               <BreadCums pageTitle="Our Mission" pageLink="" 
             image={"/images/gallery/cyb1.jpg"}
             description={"Our mission at Software Stories Ltd. is to simplify technology <br/>and make it work for everyone. We aim to deliver high-quality <br/> digital solutions that solve real problems and create value for <br/>businesses and users alike.We focus on innovation, user experience, <br/>and long-term success for every project we take on."}
             />
                 <BrandV1 />
                <BreadCums pageTitle="Our Services" pageLink=""
             image={"/images/gallery/web4.png"}
             description={"At Software Stories Ltd we offer smart,  services to help businesses <br/>Web Development  Fast, responsive, and modern websites. <br/> App Development  User-friendly mobile and desktop applications.<br/> Cybersecurity  Protecting your data and digital assets. <br/> Digital Marketing SEO, social media, and content strategies that get results. <br/>We combine technology and creativity to deliver solutions that make an impact."}
             /> 
                <FeatureV1 featureSpace="pt-115" />
                <BreadCums pageTitle="Why Choose Us" pageLink=""
             image={"/images/gallery/abu6.jpg"}bout
             description={"Choosing Software Stories Ltd. means choosing reliability, <br/>innovation, and results.We listen, we build, and we deliver <br/>on time and with quality.Our focus is on understanding <br/>your goals and turning them into powerful digital solutions.."}
             /> 
                <AboutV7 aboutSpace="py-120" />

                <BreadCums pageTitle="Our Values" pageLink=""
             image={"/images/gallery/gallery-two-1.png"}
             description={"We believe in: Integrity  We do what’s right, always.Innovation <br/> We embrace change and lead with new ideas.Customer Centricity <br/> Your needs shape our solutions.Quaity  We aim for excellence in  <br/>everything we build.."}
             /> 
            <AboutV8 aboutSpace="pb-120" />
            {/* <AboutV3 aboutClass="pt-120 rpt-100 pb-240 rpb-150" /> */}
             {/* <WorkProgressV3 /> */}
            <CallToActionV2 />
            <TestimonialV1 />  
            <ContactV4 />
            <FooterV3 />
        </>
    );
};

export default About;