import React from 'react';
import {Typography, Grid, CardHeader, Card, CardContent} from '@material-ui/core';

function Experience(props){
    return(
        <Grid item spacing={10}>
            <Card>
                <CardHeader
                    title={props.exp.companyName}
                    style={{paddingBottom: 2}}
                    />
                <CardContent style={{paddingTop: 2}}>
                    <Typography component="h6" variant="h6">From: {props.exp.date}</Typography>
                    <Typography component="p">{props.exp.role}</Typography>
                    <Typography component="p">{props.exp.desc}</Typography>
                    <Typography component="p">Technology Utilized: {props.exp.skillsUtilized}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Experience;