import React from 'react';
import { Header, Image } from 'semantic-ui-react'
import flatironLogo from '../images/flatiron-logo.png'
import wfmLogo from '../images/wfm-logo.png'
import AuPairLogo from '../images/aupaircare-logo.png'

const ExperiencesContainer = () => {

    return (
        <div className="experience-container">
            <Header className="experience-header">Experience</Header>
            <div className="experience-list">
                <div className="flatiron-experience-container">
                    <Image className="flatiron-logo" src={flatironLogo} alt='flatiron school logo' />
                    <p className="flatiron-student">Software Engineer Student, Flatiron School</p>
                    <p className="flatiron-experience-time">Nov 2019 - Mar 2020 Brooklyn, NY</p>
                </div>
                <div className="flatiron-experience-container">
                    <Image className="wfm-logo" src={wfmLogo} alt='whole foods market logo' />
                    <p className="flatiron-student">Dairy Buyer,<br/> Whole Foods Market</p>
                    <p className="flatiron-experience-time">Jun 2019 - Nov 2019 Brooklyn, NY</p>
                </div>
                <div className="flatiron-experience-container">
                    <Image className="wfm-logo" src={wfmLogo} alt='whole foods market logo' />
                    <p className="flatiron-student">Cashier,<br/> Whole Foods Market</p>
                    <p className="flatiron-experience-time">Aug 2018 - Jun 2019 Brooklyn, NY</p>
                </div>
                <div className="flatiron-experience-container">
                    <Image className="aupair-logo" src={AuPairLogo} alt='whole foods market logo' />
                    <p className="flatiron-student">AuPair,<br/> AuPairCare</p>
                    <p className="flatiron-experience-time">Oct 2015 - Feb 2017 <br/>San Francisco, CA</p>
                </div>
            </div>

        </div>
    );
};

export default ExperiencesContainer;