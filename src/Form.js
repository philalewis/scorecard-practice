import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      players: []
    }
  }

  handleChange = event => {
    this.setState({ name: this.event.target.value })
  }

  addPlayer = event => {
    event.preventDefault()
    this.setState({ players: [...this.state.player, event.target.value] })
  }

  render() {
    return (
      <form>
        <input 
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.addPlayer(event)}>ADD PLAYER</button>
      </form>
    )
  }
}

export default Form