import React from 'react';
import { Header, Image } from 'semantic-ui-react'
import schoolCap from '../images/graduation-cap-logo.png'
const ExperiencesContainer = () => {
    return (
        <div className="experience-container">
            <Header className="experience-header">Experience</Header>
            <div className="school-experience-logo">
                <p className="flatiron-student">Software Engineer Student, Flatiron School</p>
                <Image className="school-cap" src={schoolCap} alt="school-hat" />
            </div>
            <hr className="vertical-line" />
        </div>
    );
};

export default ExperiencesContainer;