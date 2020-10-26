import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Typography variant="h4" component="h2">
                Chase Benston
            </Typography>
            <Typography variant="h6" component="h4">Indiana University - Southeast</Typography>
            <Typography variant="h7" component="h5">BS - Computer Science - May 2020</Typography>
            <Typography variant="Body2" component="p">I am a new graduate from Indiana University - Southeast.</Typography>
            <a target="_blank" href='http://github.com/higginscb'><Typography variant="caption" component="p">GitHub</Typography></a>
            <a target="_blank" href='http://linkedin.com/in/chasebenston'><Typography variant="caption" component="p">LinkedIn</Typography></a>
        </div>    
    );
}

export default Home;