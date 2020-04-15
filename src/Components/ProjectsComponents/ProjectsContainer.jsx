import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import { Card, Header } from 'semantic-ui-react'

const ProjectsContainer = (props) => {

    const [projects, updateProjects] = useState([])

    useEffect(() => { 
        fetch("http://localhost:4000/projects")
            .then(r => r.json())
            .then(projectsArr => {
                // console.log(projectsArr)
                updateProjects(projectsArr)
            })
    }, [])

    // console.log(projects)
    let project = projects.map(project => <ProjectsCard key={project.id} project={project} />)

    return (
        <div className="project-container">
            <Header className="projects-header">Projects</Header>
            <Card.Group itemsPerRow={3} className="project-group-cards">
                {project}
            </Card.Group>
        </div>
    );
};

export default ProjectsContainer;