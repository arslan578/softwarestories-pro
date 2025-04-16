import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import FooterV2 from '../../components/footer/FooterV2';
import GalleryV4 from '../../components/gallery/GalleryV4';

const Portfolio4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Best Collaborations" pageLink="" 
              image={"/images/gallery/abu1.jpg"}  description={"We are engaged in close consultation with our customers throughout  <br/>ideation, creation, and testing to create something that is not only <br/>useful but also relevant years down the line. "}
             />
            <GalleryV4 />
            <FooterV2 />
        </>
    );
};

export default Portfolio4;