import React, { Component } from 'react'
import './App.css';

import { withRouter } from 'react-router-dom'
import HeaderContainer from './Components/HeaderContainer';
import PresentationContainer from './Components/PresentationContainer'
import ProjectsContainer from './Components/ProjectsComponents/ProjectsContainer'

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <HeaderContainer />
        <PresentationContainer />
        <ProjectsContainer />
      </div>
    )
  }
}


export default withRouter(App);
