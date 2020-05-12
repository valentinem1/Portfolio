import React from 'react';
import { Header, Image } from 'semantic-ui-react'
import schoolCap from '../images/graduation-cap-logo.png'
import workBag from '../images/work-logo.png'

const ExperiencesContainer = () => {

    return (
        <div className="experience-container">
            <Header className="experience-header">Experience</Header>
            {/* <div>
                <div className="work-school-experience-container">
                    <div className="experience-box">
                        <p className="flatiron-student">Software Engineer Student, Flatiron School</p>
                        <p className="arrow-right"></p>
                    </div>
                    <p className="flatiron-experience-time">Nov 2019 - Mar 2020 Brooklyn, NY</p>
                </div>
                <Image className="school-cap" src={schoolCap} alt="school-hat-logo" />
            </div>
                <hr className="vertical-line" />
            <div>
                <div className="work-school-experience-container">
                    <p className="wfm-buyer-experience-time">Jun 2019 - Nov 2019 Brooklyn, NY</p>
                    <div className="experience-box">
                        <p className="wfm-buyer">Dairy Buyer,<br/> Whole Foods Market</p>
                        <p className="arrow-left"></p>
                    </div>
                </div>
                <Image className="work-bag" src={workBag} alt="work-bag-logo" />
            </div> */}
            <div className="flatiron-experience-container">
                <p className="flatiron-student">Software Engineer Student, Flatiron School</p>
                <p className="flatiron-experience-time">Nov 2019 - Mar 2020 Brooklyn, NY</p>
            </div>
        </div>
    );
};

export default ExperiencesContainer;