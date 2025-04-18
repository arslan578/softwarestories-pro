import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import footerLogo from '/images/logos/logo.png'
import SocialShare from '../others/SocialShare';
import { toast } from 'react-toastify';

const FooterV1 = () => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed to Our Newsletter!")
    }

    return (
        <>
            <footer className="main-footer footer-one text-white">
                <div className="footer-widget-area bgs-cover pt-100 pb-50" style={{ backgroundImage: "url(/images/footer/footer-bg-dots.png)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget about-widget">
                                    <div className="footer-logo mb-35">
                                        <Link to="/#"><img src={footerLogo} alt="Software Stories Logo" /></Link>
                                    </div>
                                    <div className="text">
                                        Software Stories Ltd. is dedicated to delivering cutting-edge web development, app solutions, digital marketing, and cybersecurity services tailored to your business needs.
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="footer-widget link-widget ml-20 rml-0">
                                    <h4 className="footer-title">Quick Links</h4>
                                    <ul className="list-style-two">
                                        <li><Link to="/#">Home</Link></li>
                                        <li><Link to="/services#">Services</Link></li>
                                        <li><Link to="/portfolio#">Portfolio</Link></li>
                                        <li><Link to="/blog#">Blog</Link></li>
                                        <li><Link to="/contact#">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget contact-widget mr-30 rmr-0">
                                    <h4 className="footer-title">Contact Us</h4>
                                    <ul className="list-style-two">
                                        <li><i className="fas fa-map-marker-alt"></i> Shelton Street, Covent Garden, London, UK</li>
                                        <li><i className="fas fa-clock"></i> Mon - Fri: 9:00 AM - 5:00 PM</li>
                                        <li><i className="fas fa-phone-alt"></i> <Link to="tel:+07438255631">07438255631</Link></li>
                                        <li><i className="fas fa-envelope"></i> <Link to="mailto:aqsasyed9098@gmail.com">aqsasyed9098@gmail.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="footer-widget newsletter-widget">
                                    <h4 className="footer-title">Join Our Newsletter</h4>
                                    <p>Stay updated with the latest tech trends and services from Software Stories Ltd.</p>
                                    <form onSubmit={handleEmail}>
                                        <input type="email" name="EMAIL" placeholder="Your Email Address" autoComplete='off' required />
                                        <button value="submit"><i className="fa fa-location-arrow"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area bg-blue">
                    <div className="container">
                        <div className="copyright-inner pt-15">
                            <div className="social-style-one mb-10">
                                <SocialShare />
                            </div>
                            <p>&copy; {(new Date().getFullYear())} Software Stories Ltd. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
