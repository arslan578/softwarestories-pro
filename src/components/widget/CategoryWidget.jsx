import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const CategoryWidget = () => {
    return (
        <>
            <div className="widget widget-category">
                <h3 className="widget-title">Category</h3>
                <ul className="list-style-two">
    <li><Link to="#">Web Development</Link> <span>(12)</span></li>
    <li><Link to="#">App Development</Link> <span>(08)</span></li>
    <li><Link to="#">Cybersecurity Solutions</Link> <span>(05)</span></li>
    <li><Link to="#">Digital Marketing</Link> <span>(15)</span></li>
    <li><Link to="#">Free Consultation</Link> <span>(04)</span></li>
    <li><Link to="#">Our Team</Link> <span>(06)</span></li>
       </ul>

            </div>
        </>
    );
};

export default CategoryWidget;