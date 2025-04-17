import React from 'react';

const SingleTestimonialV6 = ({ testimonial }) => {
    const { text, name, designation, author } = testimonial

    return (
        <>
            <div className="testimonial-six-item">
                <p className='text-light'>{text}</p>
                <div className="author-description">
                    <div className="designation">
                        <h3>{name}</h3>
                        <span>{designation}</span>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV6;