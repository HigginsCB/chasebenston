import React from 'react';
import Project from '../components/Projects/Project';
import projects from '../content/projects';
import { Grid, Typography } from '@material-ui/core';

function createProject(project) {
    return <Project
        projectName={project.name}
        projectLink={project.link}
        projectStatus={project.status}
        projectDesc={project.desc}
        projectTech={project.tech}
    />;
}

function Projects() {
    return (
        <Grid container direction="row" spacing={3}>
            <Grid item xs={3}>
                <Typography variant="h4" component="h2">
                        Projects
                </Typography>
            </Grid>
            <Grid container direction="row" spacing={5}>
                {projects.map(createProject)}
            </Grid>
        </Grid>
    );
}

export default Projects;