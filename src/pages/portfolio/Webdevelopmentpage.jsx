import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';

import FooterV2 from '../../components/footer/FooterV2';

import Webdevelopmentpagecontent from './Webdevelopmentpagecontent';

const Webdevelopmentpage  = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Web Development page " pageLink="webdevelopment-page " />
            <Webdevelopmentpagecontent />
            <FooterV2 />
        </>
    );
};

export default Webdevelopmentpage ;