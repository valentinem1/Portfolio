import React, { Component } from 'react'
import './App.css';

import { withRouter } from 'react-router-dom'
import Header from './Components/Header';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}


export default withRouter(App);
