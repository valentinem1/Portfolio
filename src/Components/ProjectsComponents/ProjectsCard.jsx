import React from 'react';
import { Container, Card, Image, Reveal } from 'semantic-ui-react'

const ProjectsCard = (props) => {
    
    let { name, description, image, github, demo, live_website } = props.project
    console.log(image)

    return (
        <div className="project-info-container">
            <Card className="project-card">
                <Image className="project-image" src={image} alt={name} />
                <div className="project-info">
                    <h4 className="project-name">{name}</h4>
                    <p className="project-description">{description}</p>
                </div>
            </Card>
        </div>
    );
};

export default ProjectsCard;



// {/* <Reveal className="project-card" animated='small fade'>
//                 <Reveal.Content visible>
//                     <Image className="project-image" src={image} size='small' />
//                 </Reveal.Content>
//                 <Reveal.Content hidden>
//                     {/* <Image src={image} size='small' /> */}
//                     <h4 className="project-name">{name}</h4>
//                     <p className="project-description">{description}</p>
//                 </Reveal.Content>
//             </Reveal> */}