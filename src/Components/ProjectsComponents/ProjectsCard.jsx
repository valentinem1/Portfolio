import React from 'react';
import { Container, Card, Image } from 'semantic-ui-react'

const ProjectsCard = (props) => {
    // console.log(props.project)

    let { name, description, image, github, demo, live_website } = props.project

    return (
        <div>
            <Card>
                
            </Card>
        </div>
    );
};

export default ProjectsCard;