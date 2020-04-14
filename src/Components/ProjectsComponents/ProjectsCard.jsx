import React from 'react';
import { Container, Card, Image } from 'semantic-ui-react'

const ProjectsCard = (props) => {
    console.log(props.project)

    let { name, description, image, github, demo, live_website } = props.project

    return (
        <div className="project-info-container">
            <Card>
                <Image className="project-image" src={image}  alt={name} />
                <h4>{name}</h4>
            </Card>
        </div>
    );
};

export default ProjectsCard;