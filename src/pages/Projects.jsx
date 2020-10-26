import React from 'react';
import Project from '../components/Projects/Project';
import projects from '../content/projects';
import { Grid, Typography, Divider } from '@material-ui/core';

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
        <div>
            <Typography variant="h4" component="h2">
                Projects
            </Typography>
            <Grid container>
                {projects.map(createProject)}
            </Grid>
        </div>
    );
}

export default Projects;