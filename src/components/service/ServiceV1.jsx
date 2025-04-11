import React from 'react';
import Service1Data from '../../jsonData/ServiceV1Data.json'
import SingleServiceV1 from './SingleServiceV1';

const ServiceV1 = () => {
    return (
        <>
            <section className="services-section pt-120 rpt-100 pb-90 rpb-70">
                <div className="container">
                    <div className="row ">
                        {Service1Data.slice(0, 4).map(service =>
                            <div className="col-xl-3 col-sm-6 transition-transform duration-300 transform hover:scale-110" key={service.id}>
                                <SingleServiceV1 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceV1;