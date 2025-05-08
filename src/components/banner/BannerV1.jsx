import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { Fade } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";
import Button1 from "../importedButtons/Button1";  


const BannerV1 = () => {
  return (
    <>
      <section
        className="hero-section overlay bgs-cover pt-200 pb-150 "
        style={{ backgroundImage: "url(/images/hero/hero-one.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-9">
              <div className="hero-content text-center text-white">
                <Fade delay={200} bottom>
                  <span className="sub-title d-block">
                    Transform Your Business with Technology
                  </span>
                </Fade>
                <Fade delay={400} bottom>
                  <h1 className="mt-20 ">
                    Innovative IT Solutions for Your Growth
                  </h1>
                </Fade>
                
                  <div >
                    <Link to="/contact#" className="">
                      <Button1/>
                    </Link>
                  </div>
                 
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerV1;
