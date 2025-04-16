import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamV1 from '../../components/team/TeamV1';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Team1 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Shaista Azam" pageLink=""
            image={"/images/gallery/cyb1.jpg"}
            description={"Shaista Azam, a talented MERN Stack Developer working at Software Stories,  <br/>has a passion for building powerful, responsive, and user-friendly applications.<br/>  Its command over MongoDB, Express.js, React.js, and Node.js allows for the  <br/>translation of random ideas into beautiful and performant digital experiences.  <br/>Whether it could be building backend APIs or developing gorgeous user interfaces  <br/>on the frontend, she adds precision, creativity, and functionality to every word of code."}
              />
            <TeamV1 />
            <WorkProgressV6 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Team1;