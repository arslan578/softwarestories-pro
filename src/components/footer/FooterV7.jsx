import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import footerLogo3 from '/images/logos/logo-footer-three.png'
import SocialShare from '../others/SocialShare';
import { toast } from 'react-toastify';

const FooterV7 = () => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for Your Email")
    }

    return (
        <>
            <footer className="main-footer footer-six bgs-cover pt-110" style={{ backgroundImage: "url(/images/background/footer-bg.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="footer-logo mb-30">
                                    <Link to="/#"><img src={footerLogo3} alt="Logo" /></Link>
                                </div>
                                <div className="text-black font-bold">
                                Delivering smart and secure digital solutions for your growth.
                                </div>
                                <div className="social-style-two mt-30">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="footer-widget link-widget">
                                <h4 className="footer-title">Links</h4>
                                <ul className="list-style-two">
                                    <li><Link to="/#">Home</Link></li>
                                    <li><Link to="/pricing#">Pricing</Link></li>
                                    <li><Link to="/about#">About us</Link></li>
                                    <li><Link to="/services#">Service</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer-widget link-widget">
                                <h4 className="footer-title">Our Services</h4>
                                <ul className="list-style-two">
                                    <li><Link to="#">App Development</Link></li>
                                    <li><Link to="#">cyber Security</Link></li>
                                    <li><Link to="#">Web Development</Link></li>
                                    <li><Link to="#">Digital Marketing</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-widget newsletter-widget">
                                <h4 className="footer-title">Address</h4>
                                <p>71-75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom</p>
                                <form onSubmit={handleEmail}>
                                    <input type="email" name="email" placeholder="Your Email Address" autoComplete='off' required />
                                    <button value="submit"><i className="fa fa-location-arrow"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area mt-65 mb-35">
                    <div className="container">
                        <div className="copyright-inner">
                            <p>&copy; {(new Date().getFullYear())} All Rights Reserved.</p>
                            <ul className="footer-menu">
                                <li><Link to="#">Privacy & Terms</Link></li>
                                <li><Link to="#">FAQ</Link></li>
                                <li><Link to="/contact#">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV7;