import React, { Component } from 'react'
import Form from './Form'
import Hole from './Hole'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  addPlayer = name => {
    this.setState({players: [...this.state.players, name]})
  }

  getCurrentPlayers = () => {
    return (
      this.state.players.map(player => {
        return (
          <>
            <h2>{player}</h2><br/>
          </>
        )
      })
    )
  }

  render() {
    return (
      <main>
        <h1>Disc Golf Scorecard</h1>
        <Form addPlayer={this.addPlayer}/>
        <section>
          { this.getCurrentPlayers() }
        </section>
        {/* <Hole /> */}
      </main>
    )
  }
}

export default App;
