import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import logo from '/images/logos/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
import MobileHeader from './MobileHeader';
import Button3 from '../importedButtons/Button3';
const InnerHeader = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`${isSticky ? 'fixed-header' : ''}`}>
                <MobileHeader />
                <div className="main-header header-three text-white">
                    <div className="header-top-wrap bg-blue lg-py-10">
                        <div className="container">
                            <div className="header-top">
                                <div className="top-left">
                                <ul>
                                    <li>Call Us: <a href="tel:+44 7438 215631">....</a></li>
                                    <li>Email us: <a href="aqsasyed9098@gmail.com">aqsasyed9098@gmail.com</a></li>
                                    <li>Our address: <br />  <a href="https://www.google.com/maps?q=71-75+Shelton+Street,+Covent+Garden,+London,+UK" target="_blank">
    Shelton Street, Covent Garden, London, UK
  </a>
                             </li>
                                </ul>
                                </div>
                                <div className="top-right">
                                    <div className="office-time">
                                        <i className="far fa-clock"></i><span>09:00 am - 05:00 pm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-upper">
                        <div className="container clearfix">
                            <div className="header-inner d-flex align-items-center">
                                <div className="logo-outer">
                                    <div className="logo">
                                        <Link to="/#"><img src={logo} alt="Logo" title="Logo" /></Link>
                                    </div>
                                </div>
                                <div className="nav-outer clearfix d-flex align-items-center">
                                    <nav className="main-menu navbar-expand-lg">
                                        <NavigationMenu />
                                    </nav>
                                    <div className="menu-btn">
                                        <Link to="/contact#" >
                                        <Button3/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default InnerHeader;