import React, { Component } from 'react'

class App extends Component {
  state = {
    counter: 0
  }

  onDecrement = e => {
    this.setState(state => ({
      counter: state.counter > 0 ? state.counter - 1 : 0
    }))
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button
          data-test="increment-button"
          onClick={() => this.setState(state => ({ counter: state.counter + 1 }))}
        >
          Increment Button
        </button>
        <button onClick={this.onDecrement}>Decrement Button</button>
      </div>
    )
  }
}

export default App
