import React from 'react';
import Project from '../components/Projects/Project';
import projects from '../content/projects';

function createProject(project) {
    return <Project
        projectName={project.name}
        projectLink={project.link}
        projectStatus={project.status}
        projectDesc={project.desc}
    />;
}

function Projects() {
    return (
        <div>
            {projects.map(createProject)}
        </div>
    );
}

export default Projects;