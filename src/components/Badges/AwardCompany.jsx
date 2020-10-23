import React from 'react';
import Award from './Award';

function createBadge(badge) {
    return <Award badge={badge} />;
}

function AwardCompany(props) {
    return (
        <div>
            <a href={props.company.companyWeb}>
                <h2>{props.company.companyName}</h2>
            </a>
            {props.company.badge.map(createBadge)}
        </div>
    );
}

export default AwardCompany;