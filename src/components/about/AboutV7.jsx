import React from "react";
import { Fade } from "react-reveal";
import aboutThumb6 from "/images/about/about-six.jpg";
import aboutGraph from "/images/about/about-graph.jpg";

const AboutV7 = (props) => {
  const { aboutSpace } = props;

  return (
    <>
      <section className={`about-section-six pb-120 rpb-100 ${aboutSpace}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <Fade left delay={300}>
                <div className="about-six-content mr-65 rmr-0">
                  <div className="section-title mb-35">
                    <span className="sub-title">Management</span>
                    <h2>
                      Empowering Your Business with Smart & Scalable Digital
                      Solutions
                    </h2>
                  </div>
                  <div className="service-item-six">
                    <div className="icon">
                      <i className="flaticon-3d-printing"></i>
                    </div>
                    <div className="service-content">
                      <h5>Fully Responsive</h5>
                      <p>
                      Responsiveness is in our heart, extending to all devices and screens.

                      </p>
                    </div>
                  </div>
                  <div className="service-item-six">
                    <div className="icon">
                      <i className="flaticon-bars"></i>
                    </div>
                    <div className="service-content">
                      <h5>App Development</h5>
                      <p>
                      We create high performing mobile apps for business goals and are custom friendly.

                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-md-6">
              <Fade right delay={300}>
                <div className="about-shape-six ml-50 rml-0 pr-30">
                  <img src={aboutThumb6} alt="About" />
                  <img className="about-graph" src={aboutGraph} alt="Graph" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutV7;
