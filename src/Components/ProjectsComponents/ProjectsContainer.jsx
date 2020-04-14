import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import { Card } from 'semantic-ui-react'

const ProjectsContainer = (props) => {

    const [projects, updateProjects] = useState([])

    useEffect(() => { 
        fetch("http://localhost:4000/projects")
            .then(r => r.json())
            .then(projectsArr => {
                // console.log(projectsArr)
                updateProjects([...projects, projectsArr])
            })
    }, [])

    // console.log(projects)
    let project = projects.map(project => <ProjectsCard key={project.id} project={project} />)
    return (
        <div>
            <Card.Group>
                {project}
            </Card.Group>
        </div>
    );
};

export default ProjectsContainer;