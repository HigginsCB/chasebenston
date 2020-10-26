import React from 'react';
import { Card, CardHeader, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginTop: 30
    },
    contentMarg: {
        marginBottom: 20
    }
});

function Project(props) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    link={props.projectLink}
                    title={props.projectName}
                    className={classes.headerPad}
                />
                <CardContent>
                    <Typography className={classes.contentMarg} variant="h8" component="h5">Status: {props.projectStatus}</Typography>
                    <Typography className={classes.contentMarg} component="p">{props.projectDesc}</Typography>
                    <Typography variant="h7" component="h5">Technology Utilized: {props.projectTech}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Project;