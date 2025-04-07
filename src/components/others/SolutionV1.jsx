import React from 'react';
import CounterV4 from '../counter/CounterV4';
import { HashLink as Link } from 'react-router-hash-link';
import solutionThumb from '/images/about/solution-place.jpg'

const SolutionV1 = () => {
    return (
        <>
            <section className="solution-place bgs-cover rel z-1 pb-150 rpb-100" style={{ backgroundImage: "url(/images/background/counter-bg.png)" }}>
                <CounterV4 />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="solution-place-content rmb-60">
                                <div className="section-title mb-30">
                                    <span className="sub-title">04 Solution Place</span>
                                    <h2>A one place solution for All your problems</h2>
                                </div>
                                <p>Our team focuses on creating smart, user-friendly digital products that drive results and elevate your brand.</p>
                                <Link to="/about#" className="theme-btn style-eight mt-35">Learn Click Here <i className="fas fa-long-arrow-alt-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="solution-place-image">
                                <img src={solutionThumb} alt="About" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SolutionV1;