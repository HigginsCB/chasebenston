import React from 'react';
import { Card, CardHeader, CardContent, Grid, Typography, Link } from '@material-ui/core';

function Project(props) {
    return (
        <Grid item>
            <Card>
                <CardHeader
                    title={<Link target="_blank" href={props.projectLink} style={{ color: "inherit" }}>{props.projectName}</Link>}
                    style={{marginBottom: "-15px"}}
                >
                </CardHeader>
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h5"
                        style={{ paddingBottom: "5px" }}>Status: {props.projectStatus}</Typography>
                    <Typography
                        component="p"
                        style={{ paddingBottom: "5px" }}>{props.projectDesc}</Typography>
                    <Typography variant="h7" component="h5">Technology Utilized: {props.projectTech}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Project;