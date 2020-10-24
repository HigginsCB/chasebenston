import React from 'react';
import Grid from '@material-ui/core/Grid'
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
            <Grid container spacing={1}>
                {props.company.badge.map(createBadge)}
            </Grid>
        </div>
    );
}

export default AwardCompany;