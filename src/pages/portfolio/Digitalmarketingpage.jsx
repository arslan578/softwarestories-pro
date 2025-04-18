import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';

import FooterV2 from '../../components/footer/FooterV2';
import DigitalmarketingpageContent from './Digitalmarketingpagecontent';

const Digitalmarketingpage = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Digital Marketing page " pageLink="digitalmarketing-page " />
            <DigitalmarketingpageContent />
            <FooterV2 />
        </>
    );
};

export default Digitalmarketingpage ;