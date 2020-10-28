import React from 'react';
import AwardCompany from '../components/Badges/AwardCompany';
import awards from '../content/awards';
import { Typography, Grid } from '@material-ui/core';

// 1.map list of award companies to AwardCompany
// 2.pass in the award company as the prop to the AwardCompany

function createAward(company) {
    return <AwardCompany
        company={company}
    />;
}

function Awards() {
    return (
        <Grid container direction="row">
            <Grid item>
            <Typography variant="h4" component="h2">
                    Awards
            </Typography>
            </Grid>
            <Grid item>
                {awards.map(createAward)}
            </Grid>
        </Grid>
    );
}

export default Awards;