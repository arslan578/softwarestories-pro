import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import BlogDetailsContent from './BlogDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';

const WebDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Web Development" pageLink=""
            image={"/images/gallery/cyb1.jpg"}
            description={"At Software Stories Ltd, we have a forward-looking perspective on  <br />the web-development arena, and we see growth along three basic  <br/>lines speed, SEO, and security."} />
            <BlogDetailsContent />
            <FooterV2 />
        </>
    );
};

export default WebDetails;