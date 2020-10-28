import React from 'react';
import { Typography, Grid, CardHeader, Card, CardContent } from '@material-ui/core';

// todo: add conditional rendering on rank if there is a rank show if not don't show

function rank(badge) {
    if (badge === "") {
        return "";
    } else {
        return (<CardContent><Typography component="p">Current Rank: {badge}</Typography></CardContent>);
    }
}

function Award(props) {
    return (
        <Grid item spacing={10}>
            <Card>
                <CardHeader
                    title={props.badge[0]}
                />
                {rank(props.badge[1])}
            </Card>    
        </Grid>
    );
}

export default Award;