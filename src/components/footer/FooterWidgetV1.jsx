import React from 'react';
import { toast } from 'react-toastify';
import logo from '/images/logos/logo.png'
import { HashLink as Link } from 'react-router-hash-link';

const FooterWidgetV1 = (props) => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed to Our Newsletter!")
    }

    const { widgetSpace } = props;

    return (
        <>
            <div className={`${widgetSpace} footer-widget-area pt-85`}>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <div className="footer-logo mb-35">
                                <Link to="/#"><img src={logo} alt="Logo" /></Link>
                            </div>
                            <div className="text">
                            At Software Stories Ltd., we are dedicated to crafting innovative software solutions tailored to your business needs.
                             Our mission is to empower organizations through modern technology, creativity, and reliable services
                            </div>
                            <ul className="contact-info mt-20">
                                <li><i className="fas fa-map-marker-alt"></i><span>
                                <a href="https://www.google.com/maps?q=71-75+Shelton+Street,+Covent+Garden,+London,+UK" target="_blank">
    Shelton Street, Covent Garden, London, UK
  </a></span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className="footer-widget link-widget ml-20 rml-0">
                            <h4 className="footer-title">Page Links</h4>
                            <ul className="list-style-two">
                                <li><Link to="/#">Home</Link></li>
                                <li><Link to="/services#">services</Link></li>
                                <li><Link to="/portfolio#">portfolio</Link></li>
                                <li><Link to="/blog#">blog</Link></li>
                                <li><Link to="#">page</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="footer-widget link-widget ml-20 rml-0">
                            <h4 className="footer-title">Explore</h4>
                            <ul className="list-style-two">
                                <li><Link to="#">Our Scientists</Link></li>
                                <li><Link to="/services#">Our Services</Link></li>
                                <li><Link to="#">Testimonials</Link></li>
                                <li><Link to="#">SaaS Solutions</Link></li>
                                <li><Link to="#">Case Studies</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="footer-widget newsletter-widget">
                            <h4 className="footer-title">Newsletter</h4>
                            <p>Stay connected with Software Stories Ltd.<br />Innovative solutions delivered with care.
                            </p>
                            <form onSubmit={handleEmail}>
                                <input type="email" name="EMAIL" placeholder="Your Email Address" autoComplete='off' required />
                                <button value="submit"><i className="fa fa-location-arrow"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterWidgetV1;