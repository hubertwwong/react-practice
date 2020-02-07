import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleDec = () => {
    let c = this.state.count - 1;
    this.setState({
      count: c
    });
  }

  handleInc = () => {
    let c = this.state.count + 1;
    this.setState({
      count: c
    });
  }

  handleReset = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className="Counter">
        <div>
          <input type="text" value={this.state.count}></input>
        </div>
        <div>
          <button onClick={this.handleInc}>+</button>
          <button onClick={this.handleReset}>reset</button>
          <button onClick={this.handleDec}>-</button>
        </div>
      </div>
    )
    }
}

export default Counter;

/**
 * Simple counter.
 * Using arrow functions to define the event handlers
 * You can't pass the arguments or else it triggers the event.
 * Something likee {this.handleInc(foo)} will cause an infinite reload.
 * I think you can do it but not pass it to the handler and pass it to a prop instead and then pass it to a handler.
 */