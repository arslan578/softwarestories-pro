import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleTeamV2 = ({ team }) => {
    const { thumb, name, designation, delay } = team;

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="team-member style-two">
                    <div className="image">
                        {/* <img src={`/images/team/${thumb}`} alt="Team Member" /> */}
                    </div>
                    <div className="member-designation text-white">
                        <h5><Link to="/team-profile#">{name}</Link></h5>
                        <span>{designation}</span>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleTeamV2;