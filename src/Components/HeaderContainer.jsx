import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Header, Button } from 'semantic-ui-react';

class HeaderContainer extends Component {

    render() {
        return (
            <div className="page-header">
                <div className="header-name-container">
                    <Header className="website-name-header"><span className="website-name">Valentine Maillard</span></Header>
                </div>
                <div className="menu-container">
                    <Link to="" className="home-btn">Home</Link>
                    <Link to="" className="projects-btn">Projects</Link>
                </div>
            </div>
        );
    }
}

export default HeaderContainer;