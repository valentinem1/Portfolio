import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
            top: 800,
            behavior: "smooth"
        })
    }

    handleExperienceClick = (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 1600,
            behavior: "smooth"
        })
    }

    handleAboutClick = (event) => {
        event.preventDefault()
        window.scrollTo({
            top: 2650,
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
                    <Link to="" className="header-buttons" onClick={this.handleHomeClick}>HOME</Link>
                    <Link to="" className="header-buttons" onClick={this.handleProjectClick}>PROJECTS</Link>
                    <Link to="" className="header-buttons" onClick={this.handleExperienceClick}>EXPERIENCE</Link>
                    <Link to="" className="header-buttons" onClick={this.handleAboutClick}>ABOUT</Link>
                </div>
            </div>
        );
    }
}

export default HeaderContainer;