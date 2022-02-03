import React, { Component } from 'react'
import Form from './Form'
import Hole from './Hole'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      score: 0
    }
  }

  render() {
    return (
      <main>
        <h1>Disc Golf Scorecard</h1>
        <Form />
        <Hole />
      </main>
    )
  }
}

export default App;
