import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import blogThumb2 from '/images/news/news-2.jpg'
import newsAuthor2 from '/images/news/news-author-2.jpg'
import BlogV1Data from '../../jsonData/BlogV1Data.json'
import SingleBlogV3 from './SingleBlogV3';

const BlogV3 = () => {
    return (
        <>
            <section className="news-section-two pb-90 rpb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <Fade className="fadeInUp" delay={300}>
                                <div className="news-seciton-content mb-55">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">Latest Insights</span>
                                        <h2>Stay Updated with Software Stories LTD</h2>
                                    </div>
                                    <p>Explore the latest trends in web development, app development, cybersecurity, and IT consulting. Our expert insights help businesses thrive in the digital era.</p>
                                    <p>Founded in 2025, Software Stories LTD is committed to delivering innovative IT solutions that drive growth and security.</p>
                                    <Link to="/blog#" className="theme-btn mt-15">View All News</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <Fade className="fadeInUp" delay={300}>
                                <div className="news-item">
                                    <div className="image">
                                        <img src={blogThumb2} alt="News" />
                                    </div>
                                    <div className="news-content">
                                        <ul className="post-meta-item">
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <Link to="#" rel="bookmark">15 March 2025</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-tag"></i>
                                                <Link to="#">IT Solutions</Link>
                                            </li>
                                        </ul>
                                        <h4><Link to="/blog-details#">Empower Your Business with Cutting-Edge IT Solutions</Link></h4>
                                        <p>From custom software development to advanced cybersecurity, Software Stories LTD ensures your business stays ahead in 2025 and beyond.</p>
                                    </div>
                                    <div className="news-author">
                                        <img src={newsAuthor2} alt="Author" />
                                        <span className="posted-by">
                                            By <Link to="#">Admin</Link>
                                        </span>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-xl-4">
                            <div className="row">
                                {BlogV1Data.slice(0, 2).map(blog =>
                                    <div className="col-xl-12 col-sm-6" key={blog.id}>
                                        <SingleBlogV3 blog={blog} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogV3;
