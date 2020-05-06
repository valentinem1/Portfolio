import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import { Card, Header } from 'semantic-ui-react'

const ProjectsContainer = (props) => {

    const [projects, updateProjects] = useState([])

    useEffect(() => { 
        fetch("http://localhost:4000/projects")
            .then(r => r.json())
            .then(projectsArr => {
                updateProjects(projectsArr)
            })
    }, [])

    let project = projects.map(project => <ProjectsCard key={project.id} project={project} />)

    return (
        <div className="project-container">
            {projects.length === 0 ? 
                <div class="loader"></div>
                :
                <>
                    <Header className="projects-header">Projects</Header>
                    <Card.Group className="project-group-cards">
                        {project}
                    </Card.Group>
                </>
            }
        </div>
    );
};

export default ProjectsContainer;