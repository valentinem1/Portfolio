import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react'
import githubLogo from '../images/github-logo.png'
import youtubeLogo from '../images/youtube-logo.png'
const ProjectsCard = (props) => {
    
    let { name, description, image, github, demo, live_website, technologies } = props.project
    return (
        <div className="project-info-container">
            <Card className="project-card">
                <Image className="project-image" src={image} alt={name} />
                <div className="project-info">
                    <h4 className="project-name">{name}</h4>
                    <p className="project-description">{description}</p>
                </div>
                <p className="technologies-used-p">{technologies}</p>
            </Card>
            <div className="project-links-container">
                <Button className="github-link-btn">
                    <Image className="github-logo" src={githubLogo} alt='github-logo' />
                    <a className="github-demo-btn-text" target="_blank" rel="noopener noreferrer" href={github}>GitHub</a>
                </Button>
                <Button className="demo-link-btn">
                    <Image className="github-logo" src={youtubeLogo} alt='github-logo' />
                    <a className="github-demo-btn-text" target="_blank" rel="noopener noreferrer" href={demo}>Demo</a>
                </Button>
            </div>
        </div>
    );
};

export default ProjectsCard;