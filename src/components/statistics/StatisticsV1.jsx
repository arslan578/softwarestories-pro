import React from "react";
import { Fade } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";
import CounterV2 from "../counter/CounterV2";

const StatisticsV1 = (props) => {
  const { areaSpace } = props;

  return (
    <>
      <section className={`fact-counter-section rel z-1 ${areaSpace}`}>
        <div className="container">
          <div
            className="fact-counter-inner br-5 text-white"
            style={{
              backgroundImage: "url(/images/counter/counter-bg-section.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-6">
                <Fade left delay={300}>
                  <div className="counter-left-content px-100 py-70">
                    <div className="section-title mb-30">
                      <span className="sub-title">Company Statistics</span>
                      <h2>
                        Committed to excellence with a vision for global
                        recognition through innovative digital solutions.
                      </h2>
                    </div>
                    <p>
                    At Software Stories LTD, we aim to present our clients with solutions based on innovation and power. 
                    We deliver complete software solutions: from conceptualization to deployment, we deliver results through 
                    software experiences. Our team delivers the best websites, mobile applications,
                     and software solutions to ensure that we meet the unique needs of businesses from every industry.
                    </p>
                    <Link to="/about#" className="theme-btn style-five">
                      Learn More
                    </Link>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-6">
                <CounterV2 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsV1;
