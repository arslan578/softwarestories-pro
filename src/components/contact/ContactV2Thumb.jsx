import React from 'react';
import { Fade } from 'react-reveal';

const ContactV2Thumb = () => {
    return (
        <>
            <Fade className="fadeInRight" delay={300}>
                <div className="contact-image-number style-two bgs-cover overlay" style={{ backgroundImage: "url(/images/contact/home-two.jpg)" }}>
                    <div className="contact-informations text-white">
                        <h3> contact us</h3>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <div className="content">
                                    <span>Call Us</span>
                                    <h5><a href="tel:+012-345-6789">+07438255631</a></h5>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <div className="content">
                                    <span>Write to Us</span>
                                    <h5><a href="mailto:info@example.com">aqsa9098syed@gmail.com</a></h5>
                                </div>
                            </li>
                            <li>
                                <i className="fas fa-clock"></i>
                                <div className="content">
                                    <span>Office hours</span>
                                    <h5>Mon-Fri 9:00 - 5:00</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default ContactV2Thumb;