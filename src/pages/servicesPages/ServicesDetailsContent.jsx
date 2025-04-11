import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";
import FeatureV1Data from "../../jsonData/FeatureV1Data.json";

const 
ServicesDetailsContent = () => {
  return (
    <>
      <section className="service-details pt-120 rpt-100 pb-100 rpb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Fade left delay={200}>
                <div className="service-sidebar rmb-55">
                  <div className="widget widget-services">
                    <ul>
                      <li>
                        <Link to="#">Web Development</Link>
                      </li>
                      <li>
                        <Link to="#">App Development</Link>
                      </li>
                      <li>
                        <Link to="#">Cybersecurity</Link>
                      </li>
                      <li>
                        <Link to="#">Digital Marketing</Link>
                      </li>
                    </ul>
                  </div>
                  <ContactV2Thumb />
                </div>
              </Fade>
            </div>
            <div className="col-lg-8">
              <Fade right delay={200}>
                <div className="service-details-content">
                  <div className="image mb-40">
                    <img src={serviceDetailsThumb} alt="Service Details" />
                  </div>
                  <h2>Web Development</h2>
                  <p>
                  At Software Stories Ltd., we create high performance websites built to satisfy your needs.
                   Our job is to ensure the smooth integration of modern technologies
                   into your website that will elevate your brand in the online space..
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Custom web development with responsive design</li>
                    <li>Optimization for performance and scalability</li>
                    <li>SEO friendly websites that amplify visibility</li>
                    <li>E-commerce solutions for businesses of all kinds</li>
                  </ul>
                  <h3>Explore our App Development services</h3>
                  <p>
                  We offer app development services with a focus on intuitive, innovative, and high performance mobile
                   application development. Whether you need an Android app or 
                  an iOS app, we work closely with you to turn your idea into a successful product.
                  </p>
                  <h3>Cybersecurity</h3>
                  <p>
                  At Software Stories Ltd, we take safeguarding your digital assets seriously. Our cybersecurity services help keep your data 
                  encrypted, protected under advanced
                   security protocols, and shield against potential threats to keep your business secure..
                  </p>
                  <h3>Digital Marketing</h3>
                  <p>
                  We are here to help you reach your target audience better with digital marketing services. 
                  Be it search engine optimization or management of social networks,
                   we make individualized strategies for making your 
                  online presence work more to attract business to your doorstep.
                  </p>

                  <div className="row pt-25">
                    {FeatureV1Data.slice(0, 3).map((feature) => (
                      <div
                        className="col-xl-4 col-lg-6 col-md-4 col-sm-6"
                        key={feature.id}
                      >
                        <SingleServicesDetailsFeature feature={feature} />
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetailsContent;
