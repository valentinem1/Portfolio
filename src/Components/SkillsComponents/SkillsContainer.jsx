import React from 'react';
import { Image, Header } from 'semantic-ui-react'
import reactLogo from '../images/react-logo.png'
import reduxLogo from '../images/redux-logo.png'
import railsLogo from '../images/ruby-on-rails-logo.png'
import javascriptLogo from '../images/javascript-logo.png'
import rubyLogo from '../images/ruby-logo.png'
import semanticLogo from '../images/semantic-ui-logo.png'
import cssLogo from '../images/css-logo.png'
import postgresLogo from '../images/postgresql-logo.png'
import stripeLogo from '../images/stripe-api-logo.jpg'
import htmlLogo from '../images/html-logo.png'
import gitLogo from '../images/git-logo.png'
import herokuLogo from '../images/heroku-logo.png'
import githubLogo from '../images/github-logo.png'

const SkillsContainer = () => {

    return (
        <div className="skills-container">
            <Header className="skills-header">Skills</Header>
            <div className="skills-images-container">
                <Image className="skills-images" src={reactLogo} alt="" />
                <Image className="skills-images" src={reduxLogo} alt="" />
                <Image className="skills-images" src={javascriptLogo} alt="" />
                <Image className="skills-images" src={railsLogo} alt="" />
                <Image className="skills-images" src={rubyLogo} alt="" />
                <Image className="skills-images" src={postgresLogo} alt="" />
                <Image className="skills-images" src={semanticLogo} alt="" />
                <Image className="skills-images" src={cssLogo} alt="" />
                <Image className="skills-images" src={stripeLogo} alt="" />
                <Image className="skills-images" src={htmlLogo} alt="" />
                <Image className="skills-images" src={gitLogo} alt="" />
                <Image className="skills-images" src={githubLogo} alt="" />
                <Image className="skills-images" src={herokuLogo} alt="" />
            </div>
        </div>
    );
};

export default SkillsContainer;