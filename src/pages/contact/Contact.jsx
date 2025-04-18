import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ContactContent from './ContactContent';
import ContactMap from './ContactMap';
import FooterV2 from '../../components/footer/FooterV2';

const Contact = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="CONTACT US" pageLink=""
            image={"/images/gallery/dig2.jpg"}
            description={"Do you happen to have any inquiries, ideas  or projects <br /> to pass along? We want to hear from you! Contact  <br />the Software Stories Ltd. team, and we'll bring your idea <br /> to life. We are just a message away — so let's connect. "} />
            <ContactContent />
            <ContactMap />
            <FooterV2 />
        </>
    );
};

export default Contact;