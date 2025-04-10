import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SocialShare from '../others/SocialShare';
import footerLogo from '/images/logos/logo-footer.png'
import footerLogo2 from '/images/logos/logo-two.png'
import footerWidget1 from '/images/news/footer-widget-1.jpg'
import footerWidget2 from '/images/news/footer-widget-2.jpg'

const FooterV4Content = (props) => {
    const { logo } = props

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <div className="footer-logo mb-35">
                                <Link to="/#"><img src={logo ? footerLogo : footerLogo2} alt="Logo" /></Link>
                            </div>
                            <div className="text">
                                Software Stories Ltd. is your digital partner in web development, app development, cybersecurity, and digital marketing. Empowering businesses with modern tech solutions.
                            </div>
                            <div className="social-style-two mt-30">
                                <SocialShare />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget link-widget ml-20 rml-0">
                            <h4 className="footer-title">Page Links</h4>
                            <ul className="list-style-three">
                                <li><Link to="/about#">About Us</Link></li>
                                <li><Link to="#">Latest Events</Link></li>
                                <li><Link to="#">How It Works</Link></li>
                                <li><Link to="/blog#">News & Articles</Link></li>
                                <li><Link to="/contact#">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget contact-widget mr-30 rmr-0">
                            <h4 className="footer-title">Contacts</h4>
                            <ul className="list-style-two">
                                <li><i className="fas fa-map-marker-alt"></i>71-75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom</li>
                                <li><i className="fas fa-clock"></i> Mon-Fri 9:00AM - 5:00PM</li>
                                <li><i className="fas fa-phone-alt"></i> <Link to="tel:+07438255631">+07438255631</Link></li>
                                <li><i className="fas fa-envelope"></i> <Link to="mailto:aqsa9098syed@gmail.com">aqsa9098syed@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget news-widget">
                            <h4 className="footer-title">Recent News</h4>
                            <div className="widget-news-wrap">
                                <div className="widget-news-item">
                                    <img src={footerWidget1} alt="News" />
                                    <div className="widget-news-content">
                                        <h6><Link to="/blog-details#">Making A Strong Case For Accessibility</Link></h6>
                                        <span className="date"><i className="far fa-calendar-alt"></i> <Link to="#">15 Dec 2021</Link></span>
                                    </div>
                                </div>
                                <div className="widget-news-item">
                                    <img src={footerWidget2} alt="News" />
                                    <div className="widget-news-content">
                                        <h6><Link to="/blog-details#">An Introduction Figma Interactive Compo</Link></h6>
                                        <span className="date"><i className="far fa-calendar-alt"></i> <Link to="#">15 Dec 2021</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterV4Content;
