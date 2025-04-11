import React from 'react';
import SocialShare from '../../components/others/SocialShare';
import singleBlogThumb from '/images/news/blog-standard-1.jpg'
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogDetails = () => {
    return (
        <>
            <div className="image">
                <img src={singleBlogThumb} alt="Blog Standard" />
            </div>
            <div className="blog-header">
                <ul className="post-meta-item mr-15">
                    <li>
                        <i className="far fa-user"></i>
                        <Link to="#">Aqsa Bukhari</Link>
                    </li>
                    <li>
                        <i className="fas fa-calendar-alt"></i>
                        <Link to="#">25 Mar 2025</Link>
                    </li>
                </ul>
                <div className="social-style-one d-flex">
                    <span>Share Now</span>
                    <SocialShare />
                </div>
            </div>
            <h3>Enhancing Your Business with Web Development, App Solutions, and Cybersecurity</h3>
            <p>At Software Stories Ltd., we provide state-of-the-art web development services, ensuring your business is built on the latest technologies and frameworks.</p>
            <p>Our app development solutions are tailored to meet the needs of modern businesses, with a focus on performance, user experience, and seamless integration. Additionally, we offer top-tier cybersecurity services to protect your data and digital assets. Our experts follow best practices to keep your information safe and secure, providing peace of mind for your company.</p>
            <blockquote>
                In the world of digital solutions, a well-built system is key to success. We are here to ensure your business grows with the power of technology.
                <span className="author">Arslan Zaheer</span>
            </blockquote>
            <div className="blog-footer mb-40">
                <div className="popular-tags mb-15">
                    <b className='me-1'>Popular Tags:</b>
                    <Link to="#">Web Development</Link>
                    <Link to="#">App Development</Link>
                    <Link to="#">Cybersecurity</Link>
                </div>
                <div className="social-style-two">
                    <span className='me-2'>Share</span>
                    <SocialShare />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <Link to="/blog-details#" className="next-prev-blog">
                        <h4>Building Secure Digital Solutions for Businesses</h4>
                    </Link>
                </div>
                <div className="col-sm-6">
                    <Link to="/blog-details#" className="next-prev-blog">
                        <h4>App Development: Turning Ideas into Functional Solutions</h4>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogDetails;
