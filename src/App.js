import React, { Component } from 'react'
import './App.css';

import { withRouter } from 'react-router-dom'
import HeaderContainer from './Components/HeaderContainer';
import PresentationContainer from './Components/PresentationContainer'

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <HeaderContainer />
        <PresentationContainer />
      </div>
    )
  }
}


export default withRouter(App);
