import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import GalleryV1 from '../../components/gallery/GalleryV1';
import FooterV2 from '../../components/footer/FooterV2';

const Portfolio2 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Projects" pageLink="" 
              image={"/images/gallery/abu1.jpg"}
              description={"Everything that is linked to Software Stories is either <br/> a product of fancy. We combine ideas with the very  <br/>solutions lying in the pause of writing."}/>
            <GalleryV1 partial={false} />
            <FooterV2 />
        </>
    );
};

export default Portfolio2;