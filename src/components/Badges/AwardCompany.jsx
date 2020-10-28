import React from 'react';
import Grid from '@material-ui/core/Grid'
import Award from './Award';
import { Typography } from '@material-ui/core';

function createBadge(badge) {
    return <Award badge={badge} />;
}

function AwardCompany(props) {
    return (
        <div>
            <a href={props.company.companyWeb} style={{ padding: "5px", color: "inherit" }}>
                <Typography variant="h5">{props.company.companyName}</Typography>
            </a>
            <Grid container spacing={1}>
                {props.company.badge.map(createBadge)}
            </Grid>
        </div>
    );
}

export default AwardCompany;