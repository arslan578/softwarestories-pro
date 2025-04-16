import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import FooterV2 from '../../components/footer/FooterV2';
import GalleryV2 from '../../components/gallery/GalleryV2';

const Portfolio3 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Meaningful Digital Experience" pageLink="" 
              image={"/images/gallery/project4.jpg"}  description={"From automating support to improving communication or developing smart tools, we bring <br/>technology and storytelling together for meaningful digital experiences."}
             />
            <GalleryV2 partial={false} />
            <FooterV2 />
        </>
    );
};

export default Portfolio3;