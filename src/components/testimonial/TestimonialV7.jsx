import React from 'react';
import TestimonialV7Data from '../../jsonData/TestimonialV7Data.json'
import SingleTestimonialV7 from './SingleTestimonialV7';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination } from 'swiper/modules';
import TestimonialV7CustomNavigation from './TestimonialV7CustomNavigation';

const TestimonialV7 = () => {
    return (
        <>
            <section className="testimonials-area-seven bgs-cover rel z-1 pt-130 rpt-100 pb-200 rpb-150" style={{ backgroundImage: "url(/images/testimonials/testimonial-seven-bg.jpg)" }}>
                <div className="container container-1000">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 col-md-10">
                            <div className="section-title text-white text-center mb-55">
                            <span className="sub-title-two mb-25">Testimonials</span>
                   <h2>What Our Clients Say About Software Stories Ltd.</h2>

                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters justify-content-center">
                        <div className="col-md-5">
                            <div className="testi-seven-left bgs-cover" style={{ backgroundImage: "url(/images/testimonials/testimonial-seven-left.png)" }}></div>
                        </div>
                        <div className="col-md-7">
                            <div className="testimonial-seven-slider">
                                <Swiper
                                    modules={[Keyboard, Pagination]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    loop={true}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                >
                                    {TestimonialV7Data.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV7 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                    <TestimonialV7CustomNavigation />
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonials-shapes rmb-20">
                    
                </div>
            </section>
        </>
    );
};

export default TestimonialV7;