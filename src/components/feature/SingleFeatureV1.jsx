import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFeatureV1 = ({ feature }) => {
    const { icon, title, text, icon2, delay } = feature;

    return (
        <>

            <Fade delay={delay}>

                <div className="feature-item colorful-border" >
                    <div style={{ position: 'static', zIndex: 5,   }}>
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                        <div className="feature-content">
                            <h5>{title}</h5>
                            <p>{text}</p>
                            <Link to="/service-details#" className="learn-more">
                                Read More <i className={icon2}></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </Fade>

        </>
    );
};

export default SingleFeatureV1;
