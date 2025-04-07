import React from "react";
import { Fade } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";
import protectsThumb from "/images/protects/ready.jpg";

const PrivacyV2 = () => {
  return (
    <>
      <section className="ready-section pt-110 rpt-100 rel z-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade left delay={300}>
                <div className="ready-content">
                  <div className="section-title mb-30">
                    <span className="sub-title">We are ready</span>
                    <h2>Empowering Your Business Through Technology</h2>
                  </div>
                  <p>
                    We deliver modern digital solutions that ensure security,
                    efficiency, and growth. From development to defense, we’ve
                    got you covered.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Secure Web & App Development</li>
                    <li>Cybersecurity Risk Mitigation</li>
                    <li>Digital Transformation Strategy</li>
                    <li>Ongoing Technical Support</li>
                  </ul>

                  <Link to="/about#" className="theme-btn style-ten hover-two">
                    Discover More <i className="far fa-paper-plane"></i>
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade right delay={300}>
                <div className="ready-image">
                  <img src={protectsThumb} alt="Ready" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyV2;
