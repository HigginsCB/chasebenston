import React from 'react';
import AwardCompany from '../components/Badges/AwardCompany';
import awards from '../content/awards';
import { Typography } from '@material-ui/core';

// 1.map list of award companies to AwardCompany
// 2.pass in the award company as the prop to the AwardCompany

function createAward(company) {
    return <AwardCompany
        company={company}
    />;
}

function Awards() {
    return (
        <div>
            <Typography variant="h4" component="h2">
                Awards
            </Typography>
            {awards.map(createAward)}
        </div>
    );
}

export default Awards;