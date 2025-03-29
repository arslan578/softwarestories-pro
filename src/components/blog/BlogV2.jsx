import React from 'react';
import BlogV1Data from '../../jsonData/BlogV1Data.json'
import SingleBlogV2 from './SingleBlogV2';

const BlogV2 = (props) => {
    const { blogClass } = props

    return (
        <>
            <section className={`${blogClass} news-section-two`}>
                <div className="container">
                    <div className="section-title text-center mb-55">
                        <span className="sub-title">Latest Insights</span>
                        <h2>Stay Updated with Software Stories LTD</h2>
                    </div>
                    <div className="row">
                        {BlogV1Data.map(blog =>
                            <div className="col-xl-4 col-md-6" key={blog.id}>
                                <SingleBlogV2 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </section >
        </>
    );
};

export default BlogV2;