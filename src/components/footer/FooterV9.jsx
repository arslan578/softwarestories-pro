import React from 'react';
import footerLogo3 from '/images/logos/logo-white-three.png'
import SocialShare from '../others/SocialShare';
import { HashLink as Link } from 'react-router-hash-link';
import { toast } from 'react-toastify';

const FooterV9 = () => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for Your Email")
    }

    return (
        <>
            <footer className="main-footer footer-nine pt-100 rel z-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="footer-logo mb-30">
                                    <Link to="/#"><img src={footerLogo3} alt="Logo" /></Link>
                                </div>
                                <div className="text">
                                    <p> Software Stories Ltd is a leading company specializing in innovative software solutions. Our team delivers cutting-edge applications and digital experiences to elevate your business. We prioritize quality, efficiency, and customer satisfaction in all our projects.</p>
                                </div>
                                <div className="social-style-two mt-30">
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="footer-widget link-widget">
                                <h3 className="footer-title">Services</h3>
                                <ul className="list-style-two">
                                    <li><Link to="#">Custom Software Development</Link></li>
                                    <li><Link to="#">Web & Mobile App Development</Link></li>
                                    <li><Link to="#">E-commerce Solutions</Link></li>
                                    <li><Link to="#">Cloud Solutions</Link></li>
                                    <li><Link to="#">UI/UX Design</Link></li>
                                    <li><Link to="#">Consulting & Strategy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="footer-widget link-widget">
                                <h3 className="footer-title">Resources</h3>
                                <ul className="list-style-two">
                                    <li><Link to="#">Help Center</Link></li>
                                    <li><Link to="#">Company News</Link></li>
                                    <li><Link to="#">Partners</Link></li>
                                    <li><Link to="/blog#">Blog</Link></li>
                                    <li><Link to="#">Docs</Link></li>
                                    <li><Link to="#">Newsletter</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget newsletter-widget">
                                <h3 className="footer-title">Subscribe</h3>
                                <p>Stay updated with the latest news and offerings from Software Stories Ltd. Subscribe to our newsletter for insights into tech, innovations, and company updates.</p>
                                <form onSubmit={handleEmail} >
                                    <input type="email" name="EMAIL" placeholder="Your Email Address" autoComplete='off' required />
                                    <button value="submit"><i className="fa fa-location-arrow"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area mt-50 py-15">
                    <div className="container">
                        <div className="copyright-inner">
                            <p>&copy; {(new Date().getFullYear())} Software Stories Ltd. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV9;
