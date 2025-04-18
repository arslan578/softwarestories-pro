import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamV4 from '../../components/team/TeamV4';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Team4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Laiba Rana" pageLink=""
            image={"/images/gallery/dig22.jpg"}
            description={"Laiba Rana is a dedicated Python Developer at Software Stories, <br/>always ready to learn better, cleaner, more maintainable and  <br/>above all, scalable pieces of code. She specializes in backend systems  <br/>and automation scripts and creates data-driven applications. With a good  <br/>grip on the fundamentals of Python, fine detailing makes her a very important <br/>part of every project, functionally and performance checked behind the scenes."}
              />
            <TeamV4 teamClass="pb-200" partial={false} />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Team4;