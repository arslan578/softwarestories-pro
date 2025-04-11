import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';

import FooterV2 from '../../components/footer/FooterV2';
import SecuitypageContent from './SecuitypageContent';

const Secuitypage = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Cyber Secuity page " pageLink="secuity-page " />
            <SecuitypageContent />
            <FooterV2 />
        </>
    );
};

export default Secuitypage ;