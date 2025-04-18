import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamV2 from '../../components/team/TeamV2';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Team2 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Kashan Shafique" pageLink=""
            image={"/images/gallery/pick1.jpg"}
            description={"Kashan Shafique is the name of an outstanding Python & Django Developer employed  <br/>by Software Stories and is excellent in the art of making secure, scalable, and high- <br/>performance backend systems. With a sound knowledge of Django, REST APIs, and <br/> database architecture, he ensures that every application runs well on the underside.<br/> He particularly likes clean code and automation and wants to use elegant backend  <br/>solutions to solve real-life problems."} />
            <TeamV2 teamClass="pb-240" />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Team2;