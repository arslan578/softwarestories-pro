import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ShopDetailsContent from './ShopDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';

const ShopDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Shop Details" pageLink="" 
             image={"/images/gallery/pick3.jpg"}
             description={"At Software Stories Ltd., we offer a complete set of services designed <br/>to make your business successful in the digital world. These services <br/> include web development, mobile app solutions, cybersecurity, and  <br/>digital marketing. Quality, service, and innovation are assured in meeting your needs.."}
             />
            <ShopDetailsContent />
            <FooterV2 />
        </>
    );
};

export default ShopDetails;