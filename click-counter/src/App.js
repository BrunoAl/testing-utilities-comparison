import React, { Component } from 'react'

class App extends Component {
  state = {
    counter: 0,
    displayBellowZeroError: false
  }

  onDecrement = () => {
    this.setState(state => ({
      counter: state.counter > 0 ? state.counter - 1 : 0,
      displayBellowZeroError: state.counter < 1
    }))
  }

  onIncrement = () => {
    this.setState(state => ({
      counter: state.counter + 1,
      displayBellowZeroError: false
    }))
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button
          data-test="increment-button"
          onClick={this.onIncrement}
        >
          Increment Button
        </button>
        <button onClick={this.onDecrement}>Decrement Button</button>
        {this.state.displayBellowZeroError && <p>Can't decrement bellow 0</p>}
      </div>
    )
  }
}

export default App
