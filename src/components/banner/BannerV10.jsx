import React from "react";
import { Fade } from "react-reveal";
import heroMobile from "/images/hero/hero-ten-mobile.jpg";
import heroThumb1 from "/images/hero/hero-ten-1.png";
import heroThumb2 from "/images/hero/hero-ten-2.png";
import heroThumb3 from "/images/hero/hero-ten-3.png";
import heroThumb4 from "/images/hero/hero-ten-4.jpg";
import heroThumb5 from "/images/hero/hero-ten-5.png";

const BannerV10 = () => {
  return (
    <>
      <section className="hero-section-ten bg-lighter z-1 rel pt-50">
        <div className="container container-1250">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content-ten rel z-2 mt-15 rpy-80 ">
                <Fade bottom delay={200}>
                  <span className="sub-title d-block">
                    Transforming Ideas Into Reality
                  </span>
                </Fade>
                <Fade bottom delay={400}>
                  <h1 className="mt-30">
                    Smart Software, Tailored For Your Business
                  </h1>
                </Fade>
                <Fade bottom delay={600}>
                  <p>
                    From mobile apps to web platforms — we craft digital
                    solutions that solve real-world problems with creativity and
                    precision.
                  </p>
                </Fade>

                <Fade bottom delay={600}>
                  <div className="hero-btns mt-35">
                    <a
                      href="https://play.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn prev-icon apps mr-15 mb-10"
                    >
                      <i className="fab fa-google-play"></i> Google Play
                    </a>
                    <a
                      href="https://apple.com/app-store/"
                      target="_blank"
                      rel="noreferrer"
                      className="theme-btn prev-icon apps style-six mb-10"
                    >
                      <i className="fab fa-apple"></i> Apple Store
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-ten-images images-with-shapes my-100">
                <Fade className="zoomIn" delay={400}>
                  <img className="mobile" src={heroMobile} alt="Mobile" />
                </Fade>
                <img className="shape one" src={heroThumb1} alt="Shape" />
                <img className="shape two" src={heroThumb2} alt="Shape" />
                <img className="shape three" src={heroThumb3} alt="Shape" />
                <img className="shape four" src={heroThumb4} alt="Shape" />
                <div className="circle-shapes-wrap">
                  <div className="circle-shape"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-ten-shapes">
          <img src={heroThumb5} alt="Shape" />
        </div>
      </section>
    </>
  );
};

export default BannerV10;
