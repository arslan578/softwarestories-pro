import React from 'react';
import SocialShare from '../../components/others/SocialShare';
import teamProfileThumb from '/images/gallery/medium-shot-woman-posing-indoors (1).jpg';
import { Fade } from 'react-reveal';

const TeamProfileContent = () => {
    return (
        <>
            <section className="team-profile py-120 rpy-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <Fade left delay={200}>
                                <div className="team-profile-image rmb-45">
                                    <img src={teamProfileThumb} alt="Team Profile" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-7">
                            <Fade right delay={200}>
                                <div className="team-profile-content ml-40 rml-0">
                                    <h2 className="name">Aqsa Bukhari</h2>
                                    <span className="designation">Director</span>
                                    <p>
  Ms. Aqsa Bukhari is the Director of Software Stories Ltd. With a strong background in leadership and innovation, she plays a key role in shaping the company’s vision and driving growth. Her dedication to quality, client satisfaction, and team development has helped Software Stories stand out in the tech industry.
</p>
<ul className="list-style-three pt-15 pb-30">
  <li>Oversees strategic planning and company direction</li>
  <li>Ensures top-tier quality in all service deliveries</li>
  <li>Leads with a focus on innovation and customer value</li>
  <li>Inspires and empowers the team to achieve excellence</li>
</ul>
                                    <h3>Explore Skills</h3>
                                    <p>Our team genius at creating shrewd, scalable, and secure solutions, from web apps and AI tools, to backend logic and automation. Tackling real problems is indeed our thing!
                                    </p>
                                    <div className="row my-30">
                                        <div className="col-sm-6">
                                            <div className="service-normal style-two">
                                                <div className="icon">
                                                    <i className="flaticon flaticon-computer"></i>
                                                </div>
                                                <h6>Software Development</h6>
                                                <p>Our offer is a custom software service for true business needs, which aims at creating powerful, scalable, and user-centric pieces of software.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="service-normal style-two">
                                                <div className="icon">
                                                    <i className="flaticon flaticon-design-process"></i>
                                                </div>
                                                <h6>Machine Learning</h6>
                                                <p>The Use of Data to generate intelligent systems, which are able to self-adapt, learn, and grow with time.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Explore Skills</h3>
                                    <div className="social-style-two mt-15">
                                        <SocialShare />
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

export default TeamProfileContent;