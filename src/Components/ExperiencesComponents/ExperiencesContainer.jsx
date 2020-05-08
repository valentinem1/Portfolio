import React from 'react';
import { Header, Image } from 'semantic-ui-react'
import schoolCap from '../images/graduation-cap-logo.png'
const ExperiencesContainer = () => {
    return (
        <div className="experience-container">
            <Header className="experience-header">Experience</Header>
            <div className="experience-box">
                <p className="flatiron-student">Software Engineer Student, Flatiron School</p>
                <p className="arrow-right"></p>
            </div>
            <Image className="school-cap" src={schoolCap} alt="school-hat" />
            <hr className="vertical-line" />
        </div>
    );
};

export default ExperiencesContainer;