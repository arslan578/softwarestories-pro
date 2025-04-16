import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamV3 from '../../components/team/TeamV3';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Team3 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Asma Saleem" pageLink=""
            image={"/images/gallery/web1.jpg"}
            description={"Asma Saleem really acts as the heart of our operations at Software Stories.<br/> Human Resource and Team Management are the responsibilities she carries <br/> out with heart and soul. To her, getting the right people on board is a key  <br/>component, after which she smooths communication and collaboration to  <br/>build a successful and positive work culture. With people, performance and  <br/>growth always at the forefront of her mind, she keeps everyone motivated, <br/>engaged, and aligned with the company's mission."}
              />
            <TeamV3 teamClass="pt-100 pb-150" teamTitle={false} partial={false} />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Team3;