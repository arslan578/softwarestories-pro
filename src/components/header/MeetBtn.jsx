import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Button3 from '../importedButtons/Button3';
const MeetBtn = () => {
    return (
        <>
            <div className="menu-btn">
                <Link to="/contact#" className="">
                <Button3 />
                </Link>
            </div>
        </>
    );
};

export default MeetBtn;