import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const InfoWidget = () => {
    return (
        <>
            <div className="widget widget-call-action">
                <div className="call-action-widget">
                    <h2>Work Together</h2>
<p>At Software Stories Ltd., we believe in collaboration and innovation. We work closely with our 
    clients to bring their ideas to life through cutting-edge web development, app development, cybersecurity, and digital marketing solutions. Our team is committed to delivering high-quality services that drive growth and success for your business.</p>

                    <Link to="/contact#" className="theme-btn style-five btn-circle" >Contact Now <i className="fas fa-angle-double-right"></i></Link>
                </div>
            </div>
        </>
    );
};

export default InfoWidget;