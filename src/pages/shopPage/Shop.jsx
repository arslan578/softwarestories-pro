import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ShopContent from './ShopContent';
import FooterV2 from '../../components/footer/FooterV2';

const Shop = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Projects" pageLink="" 
              image={"/images/gallery/abu1.jpg"}
              description={"Innovative software solutions, AI chatbots, and development  <br/>services are there to help you and your company grow. Software Stories  <br/>develops tailor-made digital products to facilitate client aspirations."} />
            <ShopContent />
            <FooterV2 />
        </>
    );
};

export default Shop;