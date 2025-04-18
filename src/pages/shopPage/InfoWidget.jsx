import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const InfoWidget = () => {
    return (
        <>
            <div className="widget widget-call-action">
                <div className="call-action-widget">
                    <h2>Work Together</h2>
<p>change the word blog details to blog nd change the content in light font
Changed content: We’re here to share stories, insights, and ideas from the world of tech and innovation. From coding tips to industry trends, we break it down in a way that’s easy to follow and fun to explore. Whether you're a developer, a business owner, or just tech-curious, there’s something here for you.

</p>

                    <Link to="/contact#" className="theme-btn style-five btn-circle" >Contact Now <i className="fas fa-angle-double-right"></i></Link>
                </div>
            </div>
        </>
    );
};

export default InfoWidget;