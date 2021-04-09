import React from 'react';
import { Typography, Grid } from '@material-ui/core';


// Build a component for each work exp and send in information

function WorkExp() {
    return (
        <Grid container direction="column">
            <Typography component="h1">Current</Typography>
                <h3>General Motors - Software Developer</h3>
                <h5>Started - Feb 2021</h5>
                <p></p>
                <h3>Vividly Bold - Web Developer</h3>
                <h5>Started - May 2020</h5>
                <p>Consult with clients for web needs and assist with WordPress development.</p>
            <h1>Past</h1>
        </Grid>
    );
}

export default WorkExp;