import React from "react";
import footerLogo from "/images/logos/logo-white.png";
import { HashLink as Link } from "react-router-hash-link";
import SocialShare from "../others/SocialShare";

const FooterV8 = () => {
  return (
    <>
      <footer className="main-footer footer-seven bg-black text-white pt-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="footer-logo mb-25">
                  <Link to="/#">
                    <img src={footerLogo} alt="Logo" />
                  </Link>
                </div>
                <div className="text">
                  We provide reliable digital solutions — from web development
                  to cybersecurity — tailored to your business growth.
                </div>
                <div className="social-style-two mt-30">
                  <SocialShare />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget link-widget ml-30 rml-0">
                <h3 className="footer-title">Explore Links</h3>
                <ul className="list-style-three">
                  <li>
                    <Link to="/#">Home</Link>
                  </li>
                  <li>
                    <Link to="/about#">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services#">Services</Link>
                  </li>
                  <li>
                    <Link to="/testimonial#">Testimonial</Link>
                  </li>
                  <li>
                    <Link to="/blog#">Blog & News</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget link-widget ml-30 rml-0">
                <h3 className="footer-title">Services</h3>
                <ul className="list-style-three">
                  <li>
                    <Link to="/service-details#">Web Development</Link>
                  </li>
                  <li>
                    <Link to="/service-details#">Mobile App Development</Link>
                  </li>
                  <li>
                    <Link to="/service-details#">Cybersecurity Solutions</Link>
                  </li>
                  <li>
                    <Link to="/service-details#">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/service-details#">
                      Online Education Platforms
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-details#">AI & Automation</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget contact-widget">
                <h3 className="footer-title">Information</h3>
                <ul className="list-style-two">
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <span>
                      <b>Phone : </b> <a href="tel:+44 7438 215631">+44 7438 215631</a>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>
                      <b>Email : </b>{" "}
                      <a href="aqsasyed9098@gmail.com">
                      aqsasyed9098@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>
                      <b>Address : </b>Shelton Street, Covent Garden, London, UK
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area mt-30">
          <div className="container">
            <div className="copyright-inner pt-15">
              <p>{new Date().getFullYear()} Restly All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV8;
