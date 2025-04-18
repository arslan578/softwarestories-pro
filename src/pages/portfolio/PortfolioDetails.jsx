import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PortfolioDetailsContent from './PortfolioDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';

const PortfolioDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Results That Speak" pageLink="" 
              image={"/images/gallery/gallery-three-5.jpg"}  description={"We always make sure about the deliverable using more engagements <br/> quicker support, and better user experiences. The point is that great  <br/>software should thrill the audience."}
              />
            <PortfolioDetailsContent />
            <FooterV2 />
        </>
    );
};

export default PortfolioDetails;