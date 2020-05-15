import React, { Component } from 'react'
import './App.css';

import { withRouter } from 'react-router-dom'
import HeaderContainer from './Components/HeaderContainer';
import PresentationContainer from './Components/PresentationContainer'
import ProjectsContainer from './Components/ProjectsComponents/ProjectsContainer'
import ExperiencesContainer from './Components/ExperiencesComponents/ExperiencesContainer'
import AboutContainer from './Components/AboutComponents/AboutContainer'
import FooterContainer from './Components/FooterContainer'

import backgroundVideo from './Components/images/background.mp4'

class App extends Component {
  
  render() {
    console.log(window)
    return (
      <div className="app">
        <video autoplay="true" muted loop preload="auto" className="background-video"
          src={backgroundVideo} type="video/mp4"
        />
        <HeaderContainer />
        <PresentationContainer />
        <ProjectsContainer />
        <ExperiencesContainer />
        <AboutContainer />
        <FooterContainer />
      </div>
    )
  }
}


export default withRouter(App);
