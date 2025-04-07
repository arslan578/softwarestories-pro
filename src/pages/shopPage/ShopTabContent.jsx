import React from 'react';
import ShopReviewForm from './ShopReviewForm';
import reviewer from '/images/shop/reviewer-1.jpg'
import { HashLink as Link } from 'react-router-hash-link';

const ShopTabContent = () => {
    return (
        <>
            <ul className="nav product-information-tab mb-30">
            <li><a data-bs-toggle="tab" data-bs-target="#details" className="active show">Description</a></li>
<li><a data-bs-toggle="tab" data-bs-target="#review">Review (1)</a></li>
</ul>
<div className="tab-content mb-55">
    <div className="tab-pane active fade show" id="details" role="tabpanel">
        <h2>Description</h2>
        <p>At Software Stories Ltd., we specialize in delivering high-quality web development, app development, cybersecurity, and digital marketing solutions. Our team of experts ensures that every project is tailored to meet the specific needs of your business, using the latest technologies to drive success and growth.</p>
        <p>Whether you're looking to build a robust website, develop a mobile app, secure your digital assets, or enhance your online visibility, Software Stories Ltd. is here to provide the tools and expertise that will help you stand out in the digital world.</p>
    </div>
    <div className="tab-pane fade" id="review" role="tabpanel">
        <h2>1 review for Our Services</h2>
        <div className="review-item mb-55 pt-10">
            <div className="reviewer-img">
                <img src={reviewer} alt="Reviewer Image" />
            </div>
            <div className="reviewer-review">
                <div className="reviewer-header">
                    <h6>John Doe</h6>
                    <span className="date">7 Jan, 2025</span>
                    <div className="ratings">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                <p>Software Stories Ltd. delivered excellent web development services that exceeded our expectations. The team was professional, efficient, and provided valuable insights throughout the process. Highly recommended!</p>
                <Link to="#" className="reply">Reply</Link>
            </div>
        </div>
  

                 
                    <ShopReviewForm />
                </div>
            </div>
        </>
    );
};

export default ShopTabContent;