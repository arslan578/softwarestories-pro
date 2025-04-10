import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BreadCums = ({ pageTitle, pageLink }) => {
    return (
        <>
            <section className="page-banner bgs-cover overlay pt-50" style={{ backgroundImage: "url(/images/gallery-two-3.jpg)" }}>
                <div className="container">
                    <div className="banner-inner">
                        <h1 className="page-title">{pageTitle ? pageTitle : "404 Not Found"}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/#">At Software Stories Ltd, we create brilliant ideas into <br />reality through strong digital solutions.Mobile applications, <br/>online security, or a digital marketing drive, <br/>
                                whatever your business requirements, we have you covered.</Link></li>
                                <li className="breadcrumb-item active">{pageLink ? pageLink : "404 Not Found"}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreadCums;