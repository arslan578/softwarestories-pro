import React from "react";
import aboutSevenThumb from "/images/about/about-seven.jpg";
import { HashLink as Link } from "react-router-hash-link";

const AboutV8 = (props) => {
  const { aboutSpace } = props;

  return (
    <>
      <section className={`about-seven rel z-1 pt-150 rpt-30 ${aboutSpace}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="about-seven-image rmb-60">
                <img src={aboutSevenThumb} alt="About" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-seven-content">
                <div className="section-title mb-30">
                  <span className="sub-title">02 What We Do</span>
                  <h2>Innovative Digital Solutions We Provide</h2>
                </div>
                <p>
                  We specialize in delivering cutting-edge digital solutions
                  tailored to meet the unique needs of our clients. Our team
                  ensures efficient, scalable, and secure systems for your
                  business growth.
                </p>
                <ul className="list-style-three mt-35 mb-50">
                  <li>Custom Web Development & Design</li>
                  <li>Mobile App Development for iOS & Android</li>
                  <li>AI & Automation Solutions</li>
                </ul>
                <Link to="/contact#" className="theme-btn style-eight">
                  Start Free Trial{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="circle-drop"></div>
      </section>
    </>
  );
};

export default AboutV8;
