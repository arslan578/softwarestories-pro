import React from 'react';
import { Fade } from 'react-reveal';
import ServiceV4Data from '../../jsonData/ServiceV4Data.json'
import SingleServiceV4 from './SingleServiceV4';

const ServiceV4 = (props) => {
    const { serviceSpace } = props

    return (
        <>
            <section className={`services-four pt-115 rpt-95 rpb-150 ${serviceSpace}`}>
                <div className="container">
                    <div className="row justify-content-between align-items-center mb-40">
                        <div className="col-lg-6">
                            <Fade className="fadeInLeft" delay={300}>
                                <div className="section-title mb-35">
                                    <span className="sub-title">It Support For Business</span>
                                    <h2>Preparing for your success trusted source in IT services.</h2>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-5">
                            <Fade className="fadeInRight" delay={300}>
                                <p>Empowering businesses with cutting-edge web and app development 
                                        solutions. Transform your 
                                    ideas into reality with Software Stories LTD.</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="row">
                        {ServiceV4Data.map(service =>
                            <div className="col-lg-4 col-sm-6" key={service.id}>
                                <SingleServiceV4 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceV4;