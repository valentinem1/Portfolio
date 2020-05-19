import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class HeaderContainer extends Component {

    handleHomeClick = (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    handleProjectClick = (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 790,
            behavior: "smooth"
        })
    }

    handleExperienceClick = (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 1620,
            behavior: "smooth"
        })
    }

    handleSkillsClick = (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 2520,
            behavior: "smooth"
        })
    }

    handleAboutClick = (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 3740,
            behavior: "smooth"
        })
    }

    render() {
        return (
            <div className="page-header">
                <div className="header-name-container">
                    <Header className="website-name-header"><span className="website-name">Valentine Maillard</span></Header>
                </div>
                <div className="menu-container">
                    <a to="" className="header-buttons" onClick={this.handleHomeClick}>HOME</a>
                    <a to="" className="header-buttons" onClick={this.handleProjectClick}>PROJECTS</a>
                    <a to="" className="header-buttons" onClick={this.handleExperienceClick}>EXPERIENCE</a>
                    <a to="" className="header-buttons" onClick={this.handleSkillsClick}>SKILLS</a>
                    <a to="" className="header-buttons" onClick={this.handleAboutClick}>ABOUT</a>
                </div>
            </div>
        );
    }
}

export default HeaderContainer;