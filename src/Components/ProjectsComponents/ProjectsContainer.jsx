import React, { useState } from 'react';
import ProjectsCard from './ProjectsCard';
import { Card, Header } from 'semantic-ui-react'
import shopEqual from '../images/Shop-Equal.png'

const ProjectsContainer = (props) => {

    const [projects] = useState([
        {
            "id": 1,
            "name": "Watif",
            "description": "An e-marketplace modeled after Etsy - allowing creativity and uniqueness in products from handmade to vintage items and craft supplies.",
            "image": "https://i.postimg.cc/W3tJMTDb/watif.png",
            "github": "https://github.com/valentinem1/watif_frontend",
            "demo": "https://www.youtube.com/watch?v=DtVUKqseap8",
            "live_website": "https://watif.herokuapp.com/",
            "technologies": "Built with React, Redux, Ruby on Rails, PostgreSQL, Semantic UI, CSS3, Stripe API, Esty API"
        },
        {
            "id": 2,
            "name": "Travel Advisor",
            "description": "A rating traveling app modeled after Trip Advisor - that offers a large selection of destinations throughout the world.",
            "image": "https://i.postimg.cc/VNw6FM6N/travel-advisor.png",
            "github": "https://github.com/valentinem1/Travel_Advisor_frontend",
            "demo": "https://www.youtube.com/watch?v=1ZLSS1F6WBs&t=1s",
            "live_website": "https://travel-advisor-app.herokuapp.com/",
            "technologies": "Built with React, Ruby on Rails, PostgreSQL, Semantic UI, CSS3"
        },
        {
            "id": 3,
            "name": "Planet Express",
            "description": "A traveling app that allows people to fly to other planets - more than 10 flights per planet with real-time traveling data.",
            "image": "https://i.postimg.cc/kgBZhh21/planet-express.png",
            "github": "https://github.com/valentinem1/Planet-Express-Frontend",
            "demo": "https://www.youtube.com/watch?v=oP7dmeB0Y3E",
            "live_website": "",
            "technologies": "Built with JavaScript, Ruby on Rails, PostgreSQL, CSS3"
        },
        {
            "id": 4,
            "name": "Shop Equal",
            "description": "Shop Equal is a centralized interface designed to empower the Black community by directing users to Black owned businesses.",
            "image": `${shopEqual}`,
            "github": "https://github.com/shopequal",
            "demo": "",
            "live_website": "https://shop-equal.netlify.app/",
            "technologies": "Built with React, React Hooks, Ruby on Rails, PostgreSQL, Bootstrap, CSS3"
        }
    ])

    let project = projects.map(project => <ProjectsCard key={project.id} project={project} />)

    return (
        <Card className="project-container">
            {projects.length === 0 ? 
                <div className="loader"></div>
                :
                <>
                    <Header className="projects-header">Projects</Header>
                    <div className="project-group-cards">
                        {project}
                    </div>
                </>
            }
        </Card>
    );
};

export default ProjectsContainer;