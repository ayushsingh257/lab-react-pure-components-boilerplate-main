import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState({ counter: this.state.counter + 1 });
      console.log('Simple Component');
    }
  };

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleToggle}>Set toggle</button>
        <p>Counter: {this.state.counter}</p>
        <p>Toggle: {this.state.toggle.toString()}</p>
      </div>
    );
  }
}

export default SimpleCounterComponent;
