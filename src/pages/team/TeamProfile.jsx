import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamProfileContent from './TeamProfileContent';
import FooterV2 from '../../components/footer/FooterV2';

const TeamProfile = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Aqsa Bukhari" pageLink=""
            image={"/images/gallery/pick1.jpg"}
            description={"Aqsa Bukhari is an exceptional leader, known for her strategic vision  <br/>and ability to drive teams toward success. Her leadership style fosters  <br/>innovation and encourages a culture of excellence within the organization<br/>,Under her guidance, the company has achieved remarkable milestones."} />
            <TeamProfileContent />
            <FooterV2 />
        </>
    );
};

export default TeamProfile;