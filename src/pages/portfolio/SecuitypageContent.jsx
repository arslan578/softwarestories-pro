import React from "react";
import portfolioDetails from "/images/gallery/pick1.jpg";
import portfolioThumb1 from "/images/gallery/pick2.jpg";
import portfolioThumb2 from "/images/gallery/pick3.jpg";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import PortfolioDetailsData from "../../jsonData/PortfolioDetailsData.json";
import SinglePortfolioDetailsContent from "./SinglePortfolioDetailsContent";
import PortfolioNextPrev from "./PortfolioNextPrev";
import PortfolioRelatedProject from "./PortfolioRelatedProject";

const SecuitypageContent = () => {
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
                <h2>Cyber Secuirty</h2>
                <p>
                  We have proven excellence in providing advanced technology
                  solutions in web and mobile application development, IT
                  consulting, and data analysis. The organization's objective is
                  to empower enterprises with the latest innovative capabilities
                  in the digital space to enhance their operational efficiencies
                  and business growth.
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

export default SecuitypageContent;
