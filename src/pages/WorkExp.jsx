import React from 'react';
import Experience from '../components/Work/Experience';
import experience from '../content/experience';
import { Typography, Grid } from '@material-ui/core';


// Build a component for each work exp and send in information
function createExp(experience){
    return <Experience exp={experience} />;
}

function WorkExp() {
    return (
        <Grid container direction="column">
            <Typography component="h2" variant="h4">Current</Typography>
                <Grid container spacing={1}>
                    {experience.map(createExp)}
                </Grid>
        </Grid>
    );
}

export default WorkExp;