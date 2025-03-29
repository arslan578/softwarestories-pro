import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import MeetBtn from './MeetBtn';
import logo from '/images/logos/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
import MobileHeader from './MobileHeader';

const HeaderMenu3 = () => {

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
                                    <li><strong>Call Us: </strong> <a href="tel:07438255631">07438255631</a></li>
                                    <li> <strong>Email us: </strong><a href="aqsa9098syed@gmail.com">aqsa9098syed@gmail.com</a></li>
                                    <li><strong>Our Address:</strong><br /> 71-75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom</li>

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
                                    <MeetBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu3;