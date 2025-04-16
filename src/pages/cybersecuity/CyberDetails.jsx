import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import BlogDetailsContent from './BlogDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';

const CyberDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Cyber Secuity" pageLink=""
            image={"/images/gallery/gallery-2.jpg"}
            description={"the latest trends from the world of cybersecurity. From protecting your data  <br/>to understanding threats, we break it all down in a clear, simple way. Whether <br/> you're a business owner, developer, or just curious about staying safe online <br/>there’s something valuable here for you.."} />
            <BlogDetailsContent />
            <FooterV2 />
        </>
    );
};

export default CyberDetails;