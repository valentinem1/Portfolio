import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react'

const ProjectsCard = (props) => {
    
    let { name, description, image, github, demo, live_website } = props.project 
    return (
        <div className="project-info-container">
            <Card className="project-card">
                <Image className="project-image" src={image} alt={name} />
                <div className="project-info">
                    <h4 className="project-name">{name}</h4>
                    <p className="project-description">{description}</p>
                </div>
            </Card>
            <div className="project-links-container">
                <Button className="github-link-btn"><a className="github-btn-text" target="_blank" rel="noopener noreferrer" href={github}>GitHub</a></Button>
                <Button className="demo-link-btn"><a className="demo-btn-text" target="_blank" rel="noopener noreferrer" href={demo}>Demo</a></Button>
            </div>
        </div>
    );
};

export default ProjectsCard;