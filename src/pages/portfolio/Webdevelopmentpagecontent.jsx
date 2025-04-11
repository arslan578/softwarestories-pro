import React from "react";
import portfolioDetails from "/images/gallery/portfolio-details.jpg";
import portfolioThumb1 from "/images/gallery/portfolio-middle-1.jpg";
import portfolioThumb2 from "/images/gallery/portfolio-middle-2.jpg";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import PortfolioDetailsData from "../../jsonData/PortfolioDetailsData.json";
import SinglePortfolioDetailsContent from "./SinglePortfolioDetailsContent";
import PortfolioNextPrev from "./PortfolioNextPrev";
import PortfolioRelatedProject from "./PortfolioRelatedProject";

const Webdevelopmentpagecontent = () => {
  return (
    <>
      <section className="portfolio-details pt-120 rpt-100 pb-90 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="portfolio-details-content rmb-55">
                <div className="image mb-35">
                  <img src={portfolioDetails} alt="Portfolio Details" />
                </div>
                <h2>Web Development</h2>
                <p>
                The focus of Software Stories LTD is to provide effective digital marketing solutions, 
                including SEO, social media management, PPC, and content strategy. We help businesses
                 to grow their online presence and engage with the audience meaningfully. Our team of 
                 creative marketers and strategists then formulates data-centric campaigns designed with
                  your brand and goals in mind. Whether boosting visibility, generating leads, or building an active online community,
                 we can help accomplish that the smart way. Let's grow your brand!
                </p>
                <div className="row mt-45">
                  <div className="col-sm-6">
                    <div className="image mb-30">
                      <img src={portfolioThumb1} alt="Portfolio" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="image mb-30">
                      <img src={portfolioThumb2} alt="Portfolio" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-sidebar">
                <div className="widget widget-portfolio-info bg-lighter p-45 wow fadeInUp delay-0-3s">
                  <h3 className="widget-title">Project Details</h3>
                  <ul>
                    {PortfolioDetailsData.map((details) => (
                      <SinglePortfolioDetailsContent
                        details={details}
                        key={details.id}
                      />
                    ))}
                  </ul>
                </div>
                <ContactV2Thumb />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PortfolioNextPrev />
      <PortfolioRelatedProject />
    </>
  );
};

export default Webdevelopmentpagecontent;
