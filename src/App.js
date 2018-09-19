import React, { Component } from 'react';
import './App.css';

import { loadHobbits } from './actions'
import { connect } from 'react-redux'

import HobbitContainer from './components/HobbitContainer'

class App extends Component {

  componentDidMount () {
    this.props.loadHobbits()
  }

  render() {
    return (
      <div className='App'>
        <HobbitContainer />
      </div>
    );
  }
}



export default connect(null, { loadHobbits })(App);
