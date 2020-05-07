import React, { Component } from 'react'
import './App.css';

import { withRouter } from 'react-router-dom'
import HeaderContainer from './Components/HeaderContainer';
import PresentationContainer from './Components/PresentationContainer'
import ProjectsContainer from './Components/ProjectsComponents/ProjectsContainer'
import ExperiencesContainer from './Components/ExperiencesComponents/ExperiencesContainer'

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <HeaderContainer />
        <PresentationContainer />
        <ProjectsContainer />
        <ExperiencesContainer />
      </div>
    )
  }
}


export default withRouter(App);
