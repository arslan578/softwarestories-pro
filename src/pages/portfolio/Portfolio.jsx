import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PortfolioContent from './PortfolioContent';
import FooterV2 from '../../components/footer/FooterV2';

const Portfolio = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="" pageLink="" />
            <PortfolioContent />
            <FooterV2 />
        </>
    );
};

export default Portfolio;