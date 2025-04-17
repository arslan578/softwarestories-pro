import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavigationMenu = () => {
    return (
        <>
            <div className="navbar-collapse collapse clearfix">
                <ul className="navigation clearfix">
                    <li className="current dropdown"><Link to="/#">Home</Link>
                        <ul>
                            <li><Link to="/#">IT Solutions</Link></li>
                            <li><Link to="/home-2#">Our Technologies</Link></li>
                            <li><Link to="/home-3#"> App Development </Link></li>
                            <li><Link to="/home-4#">IT Services</Link></li>
                            <li><Link to="/home-5#">Business Growth</Link></li>
                            <li><Link to="/home-6#">SaaS Management</Link></li>
                            <li><Link to="/home-7#">Big Data</Link></li>
                            <li><Link to="/home-8#">Cyber Security </Link></li>
                            <li><Link to="/home-9#">Growth Partner</Link></li>
                            <li><Link to="/home-10#">Custom Software</Link></li></ul> </li>
                    <li className="dropdown"><Link to="#">About Us</Link>
                        <ul>
                            <li><Link to="/about#">Who We are</Link></li>
                            <li><Link to="/about-2#">Our Mission</Link></li>
                            <li><Link to="/about-3#">Our Vision</Link></li>
                            <li><Link to="/about-4#">Our Services</Link></li>
                            <li><Link to="/about-5#">Our Team</Link></li>
                            <li><Link to="/about-6#">Why Choose Us</Link></li>
                            <li><Link to="/about-7#">Our Values</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">service</Link>
                        <ul>
                            <li><Link to="/services#">Web Development</Link></li>
                            <li><Link to="/services-2#">Cyber Secuity</Link></li>
                            <li><Link to="/services-3#">App Development</Link></li>
                            <li><Link to="/services-4#"> Automation Services</Link></li>
                            <li><Link to="/services-5#">Software Development</Link></li>
                            <li><Link to="/services-6#">Digital Marketing.</Link></li>
                            <li><Link to="/services-7#">Cloud Services </Link></li>
                            <li><Link to="/service-details#">Service Details</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">pages</Link>
                        <ul>
                            <li><Link to="/counter#">Counter Page</Link></li>
                            <li className="dropdown"><Link to="#">Shop Page</Link>
                                <ul>
                                    <li><Link to="/shop#">Shop Page</Link></li>
                                    <li><Link to="/shop-details#">Shop Details</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Portfolio</Link>
                                <ul>
                                    <li><Link to="/portfolio#">Our Portfolio</Link></li>
                                    <li><Link to="/portfolio-2#">Projects</Link></li>
                                    <li><Link to="/portfolio-3#">Digital Experience</Link></li>
                                    <li><Link to="/portfolio-4#">Best Collaborations</Link></li>
                                    <li><Link to="/portfolio-details#">Results</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Team Member</Link>
                                <ul>
                                    <li><Link to="/team#">Shaista Azam</Link></li>
                                    <li><Link to="/team-2#">Kashan shafique</Link></li>
                                    <li><Link to="/team-3#">Asma Saleem</Link></li>
                                    <li><Link to="/team-4#">Laiba Rana</Link></li>
                                    <li><Link to="/team-profile#">Aqsa Bukhari</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Pricing page</Link>
                                <ul>
                                    <li><Link to="/pricing#">Pricing Plans</Link></li>
                                    <li><Link to="/pricing-2#">Web Development Plan</Link></li>
                                    <li><Link to="/pricing-3#">App Development Plan</Link></li>
                                    <li><Link to="/pricing-4#">Cybersecurity Pricing</Link></li>
                                    <li><Link to="/pricing-5#">Digital Marketing Plan</Link></li>
                                    <li><Link to="/pricing-6#">Hosting Pakages</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#">Testimonials page</Link>
                                <ul>
                                    <li><Link to="/testimonial#">John Doe</Link></li>
                                    <li><Link to="/testimonial-2#">Michael Lee</Link></li>
                                    <li><Link to="/testimonial-3#">Jane Smith</Link></li>
                                    <li><Link to="/testimonial-4#">Michael Lee</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/404#">404 Error</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">blog</Link>
                        <ul>
                            <li><Link to="/blog#">Blog Page</Link></li>
                            <li><Link to="/blog-details#">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact#">Contact</Link></li>
                </ul>
            </div>
        </>
    );
};

export default NavigationMenu;