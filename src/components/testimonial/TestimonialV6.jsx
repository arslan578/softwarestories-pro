import React from 'react';
import TestimonialV6Data from '../../jsonData/TestimonialV6Data.json'
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import SingleTestimonialV6 from './SingleTestimonialV6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';

const TestimonialV6 = () => {
    return (
        <>
            <section className="testimonial-six pt-120 rpt-100 pb-90 rpb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <Fade className="fadeInUp" delay={200}>
                                <div className="testimonial-six-content ">
                                    <div className="section-title mb-30">
                                        <span className="sub-title">Testimonial</span>
                                        <h2>Awesome Team</h2>
                                    </div>
                                    <div className="testi-author-images mb-45">
                                        <img src="/images/testimonials/test1.jpg" alt="Testimonial" />
                                        <img src="/images/testimonials/test2.jpg" alt="Testimonial" />
                                        <img src="/images/testimonials/test3.jpg" alt="Testimonial" />
                                        <img src="/images/testimonials/test4.jpg" alt="Testimonial" />
                                        <img src="/images/testimonials/test5.jpg" alt="Testimonial" />
                                        <span className="plus"><i className="fas fa-plus"></i></span>
                                    </div>
                                    <Link to="/testimonial#" className="theme-btn gradient-btn-one mb-30 rmb-55">View Testimonial</Link>
                                </div>
                            </Fade>
                        </div>

                        <div className="col-xl-8" >
                            <Swiper
                                modules={[Keyboard, Autoplay]}
                                spaceBetween={25}
                                autoplay={{
                                    delay: 3000,
                                    stopOnLastSlide: false,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                keyboard={{
                                    enabled: true,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                    }
                                }}
                            >
                                {TestimonialV6Data.map(testimonial =>
                                    <SwiperSlide key={testimonial.id}>
                                        <SingleTestimonialV6 testimonial={testimonial} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialV6;