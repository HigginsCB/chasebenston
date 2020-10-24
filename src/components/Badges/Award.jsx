import React from 'react';
import { Typography, Grid, CardHeader, Card, CardContent } from '@material-ui/core';

function Award(props) {
    return (
        <Grid item spacing={10}>
            <Card>
                <CardHeader
                    title={props.badge[0]}
                />
                <CardContent>
                    <Typography>
                        Current Rank: {props.badge[1]}
                    </Typography>
                </CardContent>
            </Card>    
        </Grid>
    );
}

export default Award;