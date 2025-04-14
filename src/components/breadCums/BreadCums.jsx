import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const BreadCums = ({ pageTitle, pageLink, image, description }) => {
  return (
    <>
      <section
        className="page-banner bgs-cover overlay pt-50"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : "url(/images/gallery/back-1.jpg)",
        }}
      >
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title">
              {pageTitle || ""}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  {description ? (
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                  ) : (
                    <Link to={"/#"}>
                      At Software Stories Ltd, we create brilliant ideas into{" "}
                      <br />
                      reality through strong digital solutions. Mobile
                      applications, <br />
                      online security, or a digital marketing drive, <br />
                      whatever your business requirements, we have you covered.
                    </Link>
                  )}
                </li>
                <li className="breadcrumb-item active">
                  {pageLink || ""}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCums;
