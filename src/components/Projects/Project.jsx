import React from 'react';
import Link from '@material-ui/core/Link';

function Project(props) {
    return (
        <div>
            <h3><Link href={props.projectLink} color="inherit">{props.projectName}</Link></h3>
            <h5>{props.projectStatus}</h5>
            <p>{props.projectDesc}</p>
        </div>
    );
}

export default Project;