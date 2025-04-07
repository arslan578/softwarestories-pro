import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ShopProductInfo = () => {

    const handleCart = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <div className="descriptions mb-50">
            <h2>Our Services</h2>
<div className="rating-review d-flex align-items-center mb-10">
    <div className="rating mr-5">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
    </div>
    <Link to="#">(1 customer review)</Link>
</div>
<div className="shop-price">
    <del><span className="price">200</span></del>
    <b className="current-price">150</b>
</div>
<p>At Software Stories Ltd., we provide a comprehensive range of services designed to help your business thrive in the digital age. From web development to mobile app solutions, cybersecurity, and digital marketing, we ensure the highest standards of service and innovation tailored to your unique needs.</p>
<form className="add-to-cart mr-10 mb-25" onChange={handleCart}>
    <input type="number" defaultValue="1" min="1" max="20" required autoComplete='off' />
    <button type="submit" className="theme-btn">Add to Cart</button>
</form>
<ul className="product-meta">
    <li>Category: <Link to="#">Our Services</Link></li>
    <li>Tags: <Link to="#">web development</Link> <Link to="#">app development</Link> <Link to="#">cybersecurity</Link> <Link to="#">digital marketing</Link></li>
</ul>

            </div>
        </>
    );
};

export default ShopProductInfo;