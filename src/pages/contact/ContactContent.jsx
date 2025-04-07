import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  return (
    <>
      <section className="contact-page py-120 rpy-100">
        <div className="container">
          <div className="contact-info-area mb-80">
            <div className="contact-info-item">
              <i className="far fa-map"></i>
              <p>
                 Our address: 71-75 Shelton Street Covent Garden London WC2H
                9JQ United Kingdom
              </p>
            </div>
            <div className="contact-info-item">
              <i className="far fa-envelope"></i>
              <p>
                <a href="mailto:support@gmail.com">aqsa9098syed@gmail.com</a> <br />
                <Link to="#">www.softwarestories.com</Link>
              </p>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-phone-alt"></i>
              <p>
                <a href="tel:+08(964)712365">07438255631</a> <br />
                <a href="tel:+0234(456)9864">+07438255631</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="contact-form-left bgs-cover h-100"
                style={{
                  backgroundImage: "url(/images/contact/contact-page.jpg)",
                }}
              >
                <h2>Leave A Message</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form ml-40 rml-0 rmt-55">
                <h3 className="comment-title mb-35">Send A Message</h3>
                <p>Avoids satisfaction itself, not because it is satisfying, but because those who do not know how to pursue success rationally encounter obstacles that hinder their growth. At Software Stories Ltd., we guide you through the complexities of the digital world to ensure that every step you take leads to greater success and achievement.</p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
