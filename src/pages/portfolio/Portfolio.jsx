import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PortfolioContent from './PortfolioContent';
import FooterV2 from '../../components/footer/FooterV2';

const Portfolio = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle=" Our Portfolio" pageLink=""
            image={"/images/gallery/about-eight1.jpg"}
            description={"Discover a glimpse of our creative and technical capabilities. At Software Stories Ltd.<br /> we digital solutions that not only meet client goals but also create impact. From design  <br />to deployment, our work reflects innovation, quality, and dedication."} />
            <PortfolioContent />
            <FooterV2 />
        </>
    );
};

export default Portfolio;