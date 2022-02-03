import React, {Component} from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  addPlayer = event => {
    event.preventDefault()
    this.props.addPlayer(this.state.name)
    this.setState({ name: '' })
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