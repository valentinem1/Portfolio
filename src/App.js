import React, { Component } from 'react'
import './App.css';

import { withRouter } from 'react-router-dom'
import HeaderContainer from './Components/HeaderContainer';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <HeaderContainer />
      </div>
    )
  }
}


export default withRouter(App);
